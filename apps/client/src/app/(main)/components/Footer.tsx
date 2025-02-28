'use client';

import Link from 'next/link';
import { Button, Paragraph, Icons } from '@libs/ui';
import { Input } from '@libs/ui';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const resourceLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'Resources', href: '/resources' },
    { name: 'Documentation', href: '/docs' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Icons.GitHub className="size-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Icons.LinkedIn className="size-5" />,
    },
    {
      name: 'Medium',
      href: 'https://medium.com',
      icon: <Icons.Medium className="size-5" />,
    },
  ];

  return (
    <footer className="border-t bg-background-secondary">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link href="/" className="mb-4 flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <span className="text-xl font-bold text-primary">EJ</span>
              </div>
              <span className="ml-2 text-xl font-bold">Eduard Jacobs</span>
            </Link>
            <Paragraph
              as="p"
              size="sm"
              weight="normal"
              className="mb-6 text-muted-foreground"
            >
              Software Engineer specializing in cloud-native architectures and
              microservices. Building scalable systems with Python, TypeScript,
              and AWS.
            </Paragraph>
            <div className="mt-auto flex space-x-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border/50 bg-background/50 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  aria-label={`Visit ${link.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <Paragraph
              as="p"
              size="sm"
              weight="semibold"
              className="mb-4 uppercase tracking-wider text-muted-foreground"
            >
              Navigation
            </Paragraph>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <Paragraph
              as="p"
              size="sm"
              weight="semibold"
              className="mb-4 uppercase tracking-wider text-muted-foreground"
            >
              Resources
            </Paragraph>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <Paragraph
              as="p"
              size="sm"
              weight="semibold"
              className="mb-4 uppercase tracking-wider text-muted-foreground"
            >
              Stay Updated
            </Paragraph>
            <Paragraph
              as="p"
              size="sm"
              weight="normal"
              className="mb-4 text-muted-foreground"
            >
              Subscribe to my newsletter for the latest articles and updates.
            </Paragraph>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none"
                />
                <Button type="submit" className="rounded-l-none">
                  Subscribe
                </Button>
              </div>
              <Paragraph
                as="p"
                size="xs"
                weight="normal"
                className="text-muted-foreground"
              >
                I respect your privacy. Unsubscribe at any time.
              </Paragraph>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50 bg-background/50">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 sm:flex-row md:px-6">
          <Paragraph
            as="p"
            size="xs"
            weight="normal"
            className="mb-4 text-muted-foreground sm:mb-0"
          >
            © {currentYear} Eduard Jacobs. All rights reserved.
          </Paragraph>
          <div className="flex space-x-4">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
