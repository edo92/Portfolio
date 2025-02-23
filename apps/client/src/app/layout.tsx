import './styles/global.css';

import { cn } from '@libs/util';
import * as fonts from './fonts';
import { Providers } from './providers';

export const metadata = {
  title: {
    default: 'Portfolio',
    template: '%s | Eduard Jacobs',
  },
  description: "Eduard Jacobs' personal portfolio",
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
        <Providers>
          <main className="flex min-h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
