import type { Metadata } from 'next';
import dynamic from 'next/dynamic';

const ContactHero = dynamic(() =>
  import('./components/Hero').then((mod) => mod.ContactHero)
);

export const metadata: Metadata = {
  title: {
    absolute: 'Contact | Eduard Jacobs',
  },
  description: 'Contact Eduard Jacobs.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <ContactHero />
    </main>
  );
}
