import Link from 'next/link';
import { Paragraph } from '@libs/ui';
import { ThemeSwitch } from '../../components/ThemeSwitch';

export const Header = () => (
  <nav className="z-10 flex w-full items-center justify-between px-8 py-5">
    <Link href="/">
      <Paragraph as="span" size="xl" weight="bold">
        EJ
      </Paragraph>
    </Link>
    <div className="flex items-center gap-6">
      <Link href="/project">
        <Paragraph
          as="span"
          size="sm"
          weight="medium"
          className="hover:text-accent-foreground/80"
        >
          Projects
        </Paragraph>
      </Link>
      <Link href="/contact">
        <Paragraph
          as="span"
          size="sm"
          weight="medium"
          className="hover:text-accent-foreground/80"
        >
          Contact
        </Paragraph>
      </Link>
      <div className="p-1">
        <ThemeSwitch />
      </div>
    </div>
  </nav>
);
