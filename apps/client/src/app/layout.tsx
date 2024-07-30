import './styles/global.css';

import { cn } from '@client/lib/cn';
import * as fonts from '@client/app/fonts';
import { Providers } from './providers';
import { Header } from './components/Header';

export const metadata = {
   title: {
      default: 'Portfolio',
      template: '%s | Eduard Jacobs',
   },
   description: "Eduard Jacobs' personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en" suppressHydrationWarning>
         <body
            className={cn(
               'relative h-screen w-full overflow-hidden',
               fonts.walsheimBlack.variable,
               fonts.walsheimBold.variable,
               fonts.walsheimMedium.variable,
               fonts.walsheimRegular.variable,
               fonts.walsheimLight.variable,
               fonts.walsheimUltraLight.variable
            )}
         >
            <Providers>
               <Header />
               <main className="flex min-h-screen">{children}</main>
            </Providers>
         </body>
      </html>
   );
}
