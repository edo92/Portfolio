import './styles/global.css';

import type { Metadata } from 'next';
import { cn } from '@libs/util';
import * as fonts from './fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: "Eduard Jacobs' Portfolio",
    template: '%s | Eduard Jacobs',
  },
  description:
    "Explore Eduard Jacobs' projects, skills, and experience in software development.",
  keywords: [
    'Eduard Jacobs',
    'Portfolio',
    'Web Development',
    'Software Engineer',
    'Projects',
  ],
  robots: 'index, follow',
  authors: [{ name: 'Eduard Jacobs' }],
  openGraph: {
    title: "Eduard Jacobs' Portfolio",
    description: "Showcasing Eduard Jacobs' work in software engineering.",
    url: 'https://ejresume.com.com',
    siteName: 'Eduard Jacobs Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Eduard Jacobs Portfolio',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Eduard Jacobs' Portfolio",
    description:
      'Showcasing projects, skills, and expertise in software development.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('relative h-screen w-full', fonts.inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
