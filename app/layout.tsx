import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import CookieBanner from '@/components/CookieBanner';
import RecaptchaProvider from '@/components/RecaptchaProvider';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'First Cloud Solutions – AWS Cloud Consulting',
    template: '%s | First Cloud Solutions',
  },
  icons: {
  icon: [
    { url: '/favicon.ico', sizes: 'any' },
    { url: '/icon.png', type: 'image/png', sizes: '512x512' },
  ],
  apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  shortcut: '/favicon.ico',
},
  description:
    'Forward Deployed AI & Cloud Engineering — embedding within enterprise teams to integrate AWS Bedrock, LangChain agentic workflows, and RAG pipelines into production. Over 10+ years across financial services, EdTech, and technology.',
  keywords: [
    'AWS consulting',
    'cloud security',
    'DevOps engineer',
    'Kubernetes',
    'cloud migration',
    'AWS Bedrock',
    'SageMaker',
    'Terraform',
    'EKS',
    'cloud transformation',
    'forward deployed engineering',
    'agentic workflows',
    'RAG pipelines',
    'prompt engineering',
  ],
  authors: [{ name: 'Joseph Caxton-Idowu' }],
  creator: 'Joseph Caxton-Idowu',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.firstcloudsolutions.net',
    siteName: 'First Cloud Solutions',
    title: 'First Cloud Solutions – AWS Cloud Consulting',
    description:
      'Forward Deployed AI & Cloud Engineering. Over ten years of enterprise delivery across financial services, media, and technology.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'First Cloud Solutions – AWS Cloud Consulting',
    description:
      'AWS consulting for complex cloud transformation, security posture improvement, and AI-native architecture.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  metadataBase: new URL('https://www.firstcloudsolutions.net'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <RecaptchaProvider>
        <body>{children}<CookieBanner /></body>
      </RecaptchaProvider>
    </html>
  );
}
