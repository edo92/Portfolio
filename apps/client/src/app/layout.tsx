import '@/ui/styles';

import type { Metadata } from 'next';
import { cn } from '@/util';
import { inter } from './fonts';
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('relative h-screen w-full', inter.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
