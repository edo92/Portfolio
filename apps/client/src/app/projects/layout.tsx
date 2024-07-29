export const metadata = {
   title: 'Portfolio | Projects',
   description: 'Portfolio of projects',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <div className="flex w-full flex-col items-center justify-center">
         <>{children}</>
      </div>
   );
}
