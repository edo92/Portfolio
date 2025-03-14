'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heading, Paragraph, Icons, Link, Section } from '@/ui';

import { ContactForm } from '../../../components/Contact';
import { CONTACT_INFO, SOCIAL_LINKS } from '../../../content';

const ANIMATION_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
} as const;

const ContactInfoItem = ({ item }: { item: (typeof CONTACT_INFO)[number] }) => (
  <motion.a
    href={item.link}
    target={item.link.startsWith('http') ? '_blank' : undefined}
    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
    variants={ANIMATION_VARIANTS.item}
    className="hover:border-primary/30 flex items-center gap-4 rounded-lg border border-border/50 bg-background/50 p-4 transition-colors hover:bg-background-primary/5"
  >
    <div className="text-primary flex size-10 items-center justify-center rounded-full bg-background-primary/10">
      {item.icon}
    </div>
    <div>
      <Paragraph as="span" variant="body-sm" className="text-muted-foreground">
        {item.label}
      </Paragraph>
      <Paragraph as="p" weight="medium" variant="body-sm">
        {item.value}
      </Paragraph>
    </div>
    {item.link.startsWith('http') && (
      <Icons.ExternalLink className="ml-auto size-4 text-muted-foreground" />
    )}
  </motion.a>
);

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <Section
      ref={sectionRef}
      background="secondary"
      className="mx-auto px-6 md:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            initial="hidden"
            variants={ANIMATION_VARIANTS.container}
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={ANIMATION_VARIANTS.item}>
              <Heading
                as="h2"
                weight="semibold"
                className="mb-6 text-2xl sm:text-3xl"
              >
                Contact Information
              </Heading>
              <Paragraph
                as="p"
                variant="body-md"
                className="mb-8 text-muted-foreground"
              >
                Feel free to reach out through any of these channels. I
                typically respond within 24-48 hours.
              </Paragraph>

              <motion.div
                variants={ANIMATION_VARIANTS.container}
                className="mb-12 space-y-6"
              >
                {CONTACT_INFO.map((item, index) => (
                  <ContactInfoItem key={index} item={item} />
                ))}
              </motion.div>

              <div>
                <Heading
                  as="h3"
                  weight="medium"
                  className="mb-4 text-lg"
                  id="social-links"
                >
                  Connect With Me
                </Heading>
                <div
                  className="flex gap-4"
                  role="navigation"
                  aria-labelledby="social-links"
                >
                  {SOCIAL_LINKS.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={ANIMATION_VARIANTS.item}
                      className="flex items-center justify-center"
                    >
                      <Link
                        external
                        href={link.href}
                        aria-label={`Visit ${link.name}`}
                        className="hover:border-primary/30 hover:text-primary rounded-full border border-border/50 bg-background/50 p-3 text-foreground transition-colors hover:bg-background-primary/5"
                      >
                        {link.icon}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </Section>
  );
};
