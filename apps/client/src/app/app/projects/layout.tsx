export const metadata = {
   title: 'Eduard Jacobs',
   description: 'personal portfolio',
};

export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <main className="flex min-h-screen">
         <>{children}</>
      </main>
   );
}
