'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const { executeRecaptcha } = useGoogleReCaptcha()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    if (!executeRecaptcha) {
      setStatus('error');
      setErrorMsg('reCAPTCHA not ready. Please refresh and try again.');
      return;
    }
    const recaptchaToken = await executeRecaptcha('contact_form');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      company: (form.elements.namedItem('company') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      recaptchaToken,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || 'Something went wrong.');
      }

      setStatus('success');
      form.reset();
    } catch (err: unknown) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Unexpected error. Please try again.');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Full name *</label>
          <input id="name" name="name" type="text" required placeholder="Jane Smith" />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Work email *</label>
          <input id="email" name="email" type="email" required placeholder="jane@company.com" />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" placeholder="Acme Corp" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">What are you working on? *</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Briefly describe the challenge or engagement you have in mind…"
        />
      </div>

      <button type="submit" className={styles.submit} disabled={status === 'loading'}>
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>

      {status === 'success' && (
        <p className={styles.success}>
          ✓ Message sent. I'll be in touch within one business day.
        </p>
      )}
      {status === 'error' && (
        <p className={styles.error}>{errorMsg}</p>
      )}
    </form>
  );
}
