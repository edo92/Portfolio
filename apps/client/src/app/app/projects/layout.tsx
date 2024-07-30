export const metadata = {
   title: 'Eduard Jacobs',
   description: 'personal portfolio',
};

export default function Layout({ children }: React.PropsWithChildren) {
   return (
      <main className="flex size-full flex-col items-center justify-center">
         <>{children}</>
      </main>
   );
}
