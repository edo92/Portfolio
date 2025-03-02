import type { Metadata } from 'next';
import { ContactHero } from './components/Contact-Hero';
import { ContactSection } from './components/Contact-Section';

export const metadata: Metadata = {
  title: {
    absolute: 'Contact | Eduard Jacobs',
  },
  description: 'Contact Eduard Jacobs.',
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Eduard Jacobs Portfolio',
    description: 'Contact Eduard Jacobs.',
    images: ['/images/projects-og.png'],
  },
  openGraph: {
    title: 'Contact | Eduard Jacobs Portfolio',
    description: 'Contact Eduard Jacobs.',
    url: 'https://ejresume.com/contact',
    siteName: 'Eduard Jacobs Portfolio',
    images: [
      {
        url: '/images/projects-og.png',
        width: 1200,
        height: 630,
        alt: 'Eduard Jacobs Projects',
      },
    ],
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
      <ContactSection />
    </main>
  );
}
