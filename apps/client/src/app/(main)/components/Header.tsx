import { Paragraph, Link } from '@libs/ui';
import { ThemeSwitch } from '../../components/ThemeSwitch';
import { LogoIcon } from './LogoIcon';

export const Header = () => (
  <nav className="z-10 flex w-full items-center justify-between px-6 py-4 md:px-8 lg:px-12 lg:py-5">
    <Link href="/">
      <LogoIcon />
    </Link>
    <div className="flex items-center gap-6">
      <Link href="/project">
        <Paragraph
          as="span"
          size="sm"
          weight="medium"
          variant="muted"
          transition={true}
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
          variant="muted"
          transition={true}
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
