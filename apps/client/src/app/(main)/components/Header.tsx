import { Paragraph, Link } from '@libs/ui';
import { ThemeSwitch } from '../../components/ThemeSwitch';
import { LogoIcon } from './LogoIcon';

export const Header = () => (
  <nav className="z-10 flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12 lg:py-5">
    <Link href="/" className="flex items-center">
      <LogoIcon />
    </Link>
    <div className="flex items-center gap-4 sm:gap-6">
      <Link
        href="/project"
        className="hover:text-primary py-1 transition-colors duration-200"
      >
        <Paragraph
          as="span"
          size="sm"
          weight="medium"
          variant="muted"
          transition={true}
          className="hover:text-primary"
        >
          Projects
        </Paragraph>
      </Link>
      <Link
        href="/contact"
        className="hover:text-primary py-1 transition-colors duration-200"
      >
        <Paragraph
          as="span"
          size="sm"
          weight="medium"
          variant="muted"
          transition={true}
          className="hover:text-primary"
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
