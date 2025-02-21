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
      <Link href="/projects" className="hover:text-muted-foreground">
          Projects
      </Link>
      <Link href="/resume" className="hover:text-muted-foreground">
        <Paragraph variant="span" weight="medium" size="sm">
          Resume
        </Paragraph>
      </Link>
      <Link href="/contact" className="hover:text-muted-foreground">
        <Paragraph variant="span" weight="medium" size="sm">
          Contact
        </Paragraph>
      </Link>
      <div className="p-1">
        <ThemeSwitch />
      </div>
    </div>
  </nav>
);
