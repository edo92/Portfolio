'use client';

import { Paragraph, Link } from '@libs/ui';
import { SOCIAL_LINKS } from '../../content';

interface NavLink {
  name: string;
  href: string;
}

const mainLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-background-secondary">
      <div className="via-primary/20 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      <div className="container mx-auto px-6 py-12 md:px-8 lg:px-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group inline-flex items-center">
              <div className="flex size-10 items-center justify-center rounded-lg bg-background-primary/10 transition-colors group-hover:bg-background-primary/20">
                <span className="text-primary font-bold text-xl">EJ</span>
              </div>
              <span className="group-hover:text-primary ml-2 font-bold text-xl transition-colors">
                Eduard Jacobs
              </span>
            </Link>
          </div>

          {/* Navigation Column */}
          <nav className="flex flex-col items-start md:items-center">
            <div className="flex flex-col space-y-4">
              <Paragraph
                as="p"
                size="sm"
                weight="semibold"
                className="font-bold uppercase tracking-wider text-foreground/80"
              >
                Navigation
              </Paragraph>
              <ul className="space-y-2">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <Paragraph
                        as="span"
                        size="sm"
                        variant="muted"
                        className="transition-colors duration-200 hover:text-muted-foreground/70"
                      >
                        {link.name}
                      </Paragraph>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Social Column */}
          <div className="flex flex-col space-y-4">
            <Paragraph
              as="p"
              size="sm"
              weight="semibold"
              className="font-bold uppercase tracking-wider text-foreground/80"
            >
              Connect
            </Paragraph>
            <div className="flex flex-wrap gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  external
                  key={link.name}
                  href={link.href}
                  className="hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-primary/5 group flex size-10 items-center justify-center rounded-lg border border-border/50 bg-card/30 text-foreground transition-all hover:shadow-sm"
                  aria-label={`Visit ${link.name}`}
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <Paragraph as="span" size="sm" variant="muted">
              Follow me on social media for the latest updates and insights.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/20 bg-background-secondary/80 p-4">
        <Paragraph as="span" size="xs" variant="muted">
          © {currentYear} Eduard Jacobs. All rights reserved.
        </Paragraph>
      </div>
    </footer>
  );
};
