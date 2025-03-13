import { Link, Paragraph } from '@/ui';
import { LogoIcon } from './LogoIcon';
import { ThemeSwitch } from './ThemeSwitch';

export const Header = () => (
  <header>
    <nav
      className="z-10 flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12 lg:py-5"
      aria-label="Main navigation"
    >
      <Link href="/" className="flex items-center" aria-label="Go to homepage">
        <LogoIcon />
      </Link>
      <div className="flex items-center gap-4 sm:gap-6">
        <ul className="m-0 flex list-none items-center gap-4 p-0 sm:gap-6">
          <li>
            <Link href="/project">
              <Paragraph
                as="span"
                variant="navlink"
                className="transition-colors hover:text-body/75"
              >
                Projects
              </Paragraph>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <Paragraph
                as="span"
                variant="navlink"
                className="transition-colors hover:text-body/75"
              >
                Contact
              </Paragraph>
            </Link>
          </li>
          <li className="px-1">
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </nav>
  </header>
);
