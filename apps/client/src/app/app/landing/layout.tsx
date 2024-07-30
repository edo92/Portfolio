export const metadata = {
   title: 'Portfolio',
   description: 'portfolio projects',
};

export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <main className="flex min-h-screen">
         <>{children}</>
      </main>
   );
}
