import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: "E.J's",
    template: 'Portfolio %s',
  },
  description: "Eduard Jacobs' personal portfolio",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {children}
    </main>
  );
}
