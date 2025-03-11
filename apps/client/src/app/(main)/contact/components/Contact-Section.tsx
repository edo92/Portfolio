'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heading, Paragraph, Icons, Link } from '@libs/ui';

import { CONTACT_INFO, SOCIAL_LINKS } from '../../../content';
import { ContactForm } from '../../components/Contact';
import { Section } from '../../../components/Section';

export const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Section className="mx-auto px-6 md:px-8 lg:px-12" ref={sectionRef}>
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <Heading as="h2" size="xl" weight="semibold" className="mb-6">
                Contact Information
              </Heading>
              <Paragraph as="p" size="lg" variant="muted" className="mb-8">
                Feel free to reach out through any of these channels. I
                typically respond within 24-48 hours.
              </Paragraph>

              <motion.div
                variants={containerVariants}
                className="mb-12 space-y-6"
              >
                {CONTACT_INFO.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={
                      item.link.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    variants={itemVariants}
                    className="hover:border-primary/30 border-border/50 bg-background/50 hover:bg-background-primary/5 flex items-center gap-4 rounded-lg border p-4 transition-colors"
                  >
                    <div className="text-primary bg-background-primary/10 flex size-10 items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <Paragraph as="span" size="sm" variant="muted">
                        {item.label}
                      </Paragraph>
                      <Paragraph as="p" weight="medium" size="base">
                        {item.value}
                      </Paragraph>
                    </div>
                    {item.link.startsWith('http') && (
                      <Icons.ExternalLink className="text-muted-foreground ml-auto size-4" />
                    )}
                  </motion.a>
                ))}
              </motion.div>

              <div>
                <Heading as="h3" size="md" weight="medium" className="mb-4">
                  Connect With Me
                </Heading>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <motion.div
                      key={link.name}
                      variants={itemVariants}
                      className="flex items-center justify-center"
                    >
                      <Link
                        external
                        href={link.href}
                        aria-label={`Visit ${link.name}`}
                        className="hover:border-primary/30 hover:text-primary border-border/50 bg-background/50 text-foreground hover:bg-background-primary/5 rounded-full border p-3 transition-colors"
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
