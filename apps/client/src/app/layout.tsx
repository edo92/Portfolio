import './styles/global.css';

import { cn } from '@client/lib/cn';
import { DarkModeProvider } from './providers/darkmode';
import { Header } from './components/Header';

export const metadata = {
   title: 'Eduard Jacobs | Portfolio',
   description: "Eduard Jacobs' personal portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html lang="en">
         <body className={cn('relative size-full overflow-auto overflow-x-hidden scroll-smooth')}>
            <DarkModeProvider>
               <Header />
               {children}
            </DarkModeProvider>
         </body>
      </html>
   );
}
