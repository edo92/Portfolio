'use client';

import { Paragraph, Link, Heading } from '@/ui';
import { SOCIAL_LINKS } from '../content';

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
    <footer
      className="relative border-t bg-gradient-to-b from-background to-background-secondary"
      aria-label="Site footer"
    >
      <div className="via-primary/20 from-primary/10 to-primary/10 absolute inset-x-0 top-0 h-px bg-gradient-to-r" />

      <div className="container mx-auto px-6 py-12 md:px-8 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className="group inline-flex items-center"
              aria-label="Go to homepage"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-background-primary/10 transition-colors group-hover:bg-background-primary/20">
                <span className="text-primary text-lg font-bold sm:text-xl">
                  EJ
                </span>
              </div>

              <Heading
                as="h2"
                variant="h5"
                weight="bold"
                className="group-hover:text-primary ml-2 transition-colors"
              >
                Eduard Jacobs
              </Heading>
            </Link>
          </div>

          {/* Navigation Column */}
          <nav aria-label="Footer navigation">
            <div className="flex flex-col space-y-6">
              <Paragraph
                as="p"
                variant="label-sm"
                weight="semibold"
                className="uppercase tracking-wider text-foreground/80"
              >
                Navigation
              </Paragraph>
              <ul className="space-y-4">
                {mainLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>
                      <Paragraph
                        as="span"
                        variant="body-sm"
                        className="transition-colors hover:text-body/75"
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
          <div className="flex flex-col space-y-6">
            <Paragraph
              as="p"
              variant="label-sm"
              weight="semibold"
              className="uppercase tracking-wider text-foreground/80"
            >
              Connect
            </Paragraph>
            <div className="flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <Link
                  external
                  key={link.name}
                  href={link.href}
                  className="hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-primary/5 group flex size-10 items-center justify-center rounded-lg border border-border/50 bg-card/30 text-foreground transition-all hover:shadow-sm"
                  aria-label={`Connect on ${link.name}`}
                >
                  {link.icon}
                  <span className="sr-only">Visit {link.name}</span>
                </Link>
              ))}
            </div>
            <Paragraph as="p" variant="body-xs" className="text-foreground/70">
              Follow me on social media for the latest updates and insights.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/20 bg-background-secondary/80 p-4">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <Paragraph
            as="small"
            variant="caption"
            className="text-foreground/60"
          >
            © {currentYear} Eduard Jacobs. All rights reserved.
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};
