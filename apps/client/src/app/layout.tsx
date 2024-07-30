import './styles/global.css';

import { ThemeProvider } from 'next-themes';
import * as fonts from '@client/app/fonts';
import { cn } from '@client/lib/cn';
import { Header } from './components/Header';

export const metadata = {
   title: 'Eduard Jacobs | %s',
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
            <ThemeProvider attribute="class">
               <Header />
               <main className="flex min-h-screen">{children}</main>
            </ThemeProvider>
         </body>
      </html>
   );
}
