import { ThemeProvider } from 'next-themes';

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => (
   <ThemeProvider attribute="class" defaultTheme='dark'>{children}</ThemeProvider>
);
