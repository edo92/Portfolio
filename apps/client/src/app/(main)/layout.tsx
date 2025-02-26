import type { Metadata } from 'next';
import { Header } from './components/Header';
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
      <Header />
      {children}
    </main>
  );
}
