export const metadata = {
   title: 'Portfolio',
   description: 'portfolio projects',
};

export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <main className="flex size-full flex-col items-center justify-center">
         <>{children}</>
      </main>
   );
}
