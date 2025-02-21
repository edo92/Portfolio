import './styles/global.css';

import { cn } from '@libs/ui';
import { Providers } from './providers';
import { inter } from './fonts';

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
      <body className={cn('relative h-screen w-full', inter.variable)}>
        <Providers>
          <main className="flex min-h-screen w-full">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
