'use client';

import type React from 'react';
import { Paragraph, Icons, Link } from '@libs/ui';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
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
    <footer className="relative border-t bg-gradient-to-b from-background to-background-secondary">
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="group inline-flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <span className="text-xl font-bold text-primary">EJ</span>
              </div>
              <span className="ml-2 text-xl font-bold transition-colors group-hover:text-primary">
                Eduard Jacobs
              </span>
            </Link>

            <Paragraph
              as="p"
              size="sm"
              weight="normal"
              className="text-muted-foreground max-w-sm md:max-w-md"
            >
              Software Engineer specializing in cloud-native architectures and
              microservices. Building scalable systems with Python, TypeScript,
              and AWS.
            </Paragraph>
          </div>

          {/* Links Column */}
          <div className="flex flex-col items-start md:items-center">
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
                        size="xs"
                        weight="normal"
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {link.name}
                      </Paragraph>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

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
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 bg-card/30 text-foreground transition-all hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:shadow-sm hover:shadow-primary/5"
                  aria-label={`Visit ${link.name}`}
                  external
                >
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </Link>
              ))}
            </div>
            <Paragraph
              as="span"
              size="xs"
              weight="normal"
              className="text-muted-foreground"
            >
              Follow me on social media for the latest updates and insights.
            </Paragraph>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/20 bg-background-secondary/80 p-4">
        <Paragraph
          as="span"
          size="xs"
          weight="normal"
          className="text-muted-foreground"
        >
          © {currentYear} Eduard Jacobs. All rights reserved.
        </Paragraph>
      </div>
    </footer>
  );
}
