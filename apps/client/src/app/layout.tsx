import './styles/global.css';

import type { Metadata } from 'next';
import { cn } from '@libs/util';
import * as fonts from './fonts';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: {
    default: 'Portfolio',
    template: '%s Portfolio',
  },
  description: "Eduard Jacobs' portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'relative h-screen w-full',
          fonts.interBlack.variable,
          fonts.interBold.variable,
          fonts.interSemibold.variable,
          fonts.interMedium.variable,
          fonts.interRegular.variable,
          fonts.interLight.variable
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
