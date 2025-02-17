import Link from 'next/link';
import { ThemeSwitch } from '../../components/ThemeSwitch';

export const Header = () => (
  <nav className="absolute top-0 w-full px-6 py-4 flex justify-between items-center z-10">
    <Link href="/" className="text-xl font-bold">
      EJ
    </Link>
    <div className="flex items-center gap-6">
      <Link href="/projects" className="hover:text-gray-300 transition-colors">
        Projects
      </Link>
      <Link href="/resume" className="hover:text-gray-300 transition-colors">
        Resume
      </Link>
      <Link href="/contact" className="hover:text-gray-300 transition-colors">
        Contact
      </Link>
      <div className="p-1 hover:bg-gray-800 rounded-full transition-colors">
        <ThemeSwitch />
      </div>
    </div>
  </nav>
);
