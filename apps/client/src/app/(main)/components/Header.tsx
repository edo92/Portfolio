import Link from 'next/link';
import { ThemeSwitch } from '../../components/ThemeSwitch';
import { Paragraph } from '@libs/ui';

export const Header = () => (
  <nav className="z-10 flex w-full items-center justify-between px-8 py-5">
    <Link href="/">
      <Paragraph variant="span" size="xl" weight="bold">
        EJ
      </Paragraph>
    </Link>
    <div className="flex items-center gap-6">
      <Link href="/projects">
        <Paragraph variant="span" size="sm">
          Projects
        </Paragraph>
      </Link>
      <Link href="/resume">
        <Paragraph variant="span" size="sm">
          Resume
        </Paragraph>
      </Link>
      <Link href="/contact">
        <Paragraph variant="span" size="sm">
          Contact
        </Paragraph>
      </Link>
      <div className="p-1">
        <ThemeSwitch />
      </div>
    </div>
  </nav>
);
