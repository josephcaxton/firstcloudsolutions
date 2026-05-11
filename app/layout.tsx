import type { Metadata } from 'next';
import { Fraunces } from 'next/font/google';
import { DM_Sans } from 'next/font/google';
import './globals.css';

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
    'AWS Cloud and DevOps consulting for mid-size and large organisations. Cloud security transformation, large-scale migrations, Kubernetes platform engineering, and AI/ML integration on AWS.',
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
      'AWS Cloud and DevOps consulting. Over ten years of enterprise delivery across financial services, media, and technology.',
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
      <body>{children}</body>
    </html>
  );
}
