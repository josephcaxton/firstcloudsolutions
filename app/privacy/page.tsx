import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
    return (
        <>
            <Nav />
            <section style={{
                padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)',
                background: 'var(--paper)',
            }}>
                <div className="container">
                    <div style={{ maxWidth: '680px' }}>
                        <p className="section-tag">Legal</p>
                        <h1 className="section-title" style={{ marginBottom: '2rem' }}>
                            Privacy <em>Policy</em>
                        </h1>

                        <div className="post-body">
                            <p>Last updated: June 2026</p>

                            <h2>Who we are</h2>
                            <p>First Cloud Solutions is a cloud and AI engineering consultancy operated by Joseph Caxton-Idowu, based in the United Kingdom. Our website address is firstcloudsolutions.net.</p>

                            <h2>What data we collect</h2>
                            <p>When you use the contact form on this website, we collect your name, email address, and the content of your message. This information is used solely to respond to your enquiry.</p>
                            <p>We do not collect any data automatically beyond what is described below under cookies.</p>

                            <h2>How we use your data</h2>
                            <p>Your contact form data is sent directly to us via AWS Simple Email Service and is not stored in any database. We use it only to respond to your message and will never share it with third parties or use it for marketing without your explicit consent.</p>
                            <p>This website uses Google reCAPTCHA v3 to protect the contact form from spam.
                                Google's <a href="https://policies.google.com/privacy">privacy policy</a> applies
                                to data collected by reCAPTCHA.</p>

                            <h2>Cookies</h2>
                            <p>This website uses a single cookie to remember your cookie consent preference. It contains no personal data and expires after 12 months. We do not use tracking, advertising, or analytics cookies.</p>

                            <h2>Your rights</h2>
                            <p>Under UK GDPR, you have the right to access, correct, or request deletion of any personal data we hold about you. To exercise any of these rights, contact us at:</p>
                            <p><a href="mailto:support@firstcloudsolutions.net">support@firstcloudsolutions.net</a></p>

                            <h2>Third party services</h2>
                            <p>This website is hosted on AWS. Fonts are loaded from Google Fonts. Please refer to their respective privacy policies for details on how they handle data.</p>

                            <h2>Changes to this policy</h2>
                            <p>We may update this policy from time to time. The date at the top of this page will always reflect the most recent version.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}