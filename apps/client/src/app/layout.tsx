import './styles/global.css';
import { cn } from '@client/lib/cn';
import * as fonts from '@client/app/fonts';

export const metadata = {
   title: 'Eduard Jacobs | Portfolio',
   description: "Eduard Jacobs' personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
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
            {children}
         </body>
      </html>
   );
}
