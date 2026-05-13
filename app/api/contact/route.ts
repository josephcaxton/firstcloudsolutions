import { NextRequest, NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

// SES client — uses IAM role in Amplify, env vars locally
const ses = new SESClient({
  region: process.env.AWS_REGION ?? 'eu-west-1',
});

function sanitize(str: string): string {
  return str.replace(/[<>]/g, '').trim().slice(0, 2000);
}

export async function POST(req: NextRequest) {
  // Rate-limit hint: add API Gateway throttling on Amplify if you see spam
  const { name, email, company, message } = await req.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const safeName    = sanitize(name);
  const safeEmail   = sanitize(email);
  const safeCompany = company ? sanitize(company) : 'Not provided';
  const safeMessage = sanitize(message);

  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail   = process.env.SES_TO_EMAIL;

  if (!fromEmail || !toEmail) {
    console.error('SES environment variables missing: SES_FROM_EMAIL or SES_TO_EMAIL');
    return NextResponse.json(
      { error: 'Server configuration error. Please email directly.' },
      { status: 500 }
    );
  }

  const htmlBody = `
    <div style="font-family: Georgia, serif; max-width: 600px; color: #0d0d0d;">
      <h2 style="font-weight: 300; border-bottom: 1px solid #edeae3; padding-bottom: 1rem;">
        New enquiry — First Cloud Solutions
      </h2>
      <table style="width: 100%; border-collapse: collapse; margin-top: 1.5rem;">
        <tr>
          <td style="padding: 0.5rem 1rem 0.5rem 0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #7a7a7a; width: 100px;">Name</td>
          <td style="padding: 0.5rem 0; font-size: 1rem;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 1rem 0.5rem 0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #7a7a7a;">Email</td>
          <td style="padding: 0.5rem 0;"><a href="mailto:${safeEmail}" style="color: #c8461e;">${safeEmail}</a></td>
        </tr>
        <tr>
          <td style="padding: 0.5rem 1rem 0.5rem 0; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.08em; color: #7a7a7a;">Company</td>
          <td style="padding: 0.5rem 0;">${safeCompany}</td>
        </tr>
      </table>
      <div style="margin-top: 2rem; padding: 1.5rem; background: #f5f3ee; border-radius: 4px;">
        <p style="font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.08em; color: #7a7a7a; margin-bottom: 0.75rem;">Message</p>
        <p style="font-size: 1rem; line-height: 1.7; white-space: pre-wrap;">${safeMessage}</p>
      </div>
      <p style="margin-top: 2rem; font-size: 0.8rem; color: #7a7a7a;">
        Sent from firstcloudsolutions.net contact form
      </p>
    </div>
  `;

  const textBody = `
New enquiry — First Cloud Solutions
====================================

Name:    ${safeName}
Email:   ${safeEmail}
Company: ${safeCompany}

Message:
${safeMessage}
  `.trim();

  try {
    await ses.send(
      new SendEmailCommand({
        Source: fromEmail,
        Destination: { ToAddresses: [toEmail] },
        ReplyToAddresses: [safeEmail],
        Message: {
          Subject: {
            Data: `New enquiry from ${safeName}${safeCompany !== 'Not provided' ? ` · ${safeCompany}` : ''}`,
            Charset: 'UTF-8',
          },
          Body: {
            Html: { Data: htmlBody, Charset: 'UTF-8' },
            Text: { Data: textBody, Charset: 'UTF-8' },
          },
        },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('SES send error:', err);
    return NextResponse.json(
      { error: 'Failed to send message. Please email directly.' },
      { status: 500 }
    );
  }
}
