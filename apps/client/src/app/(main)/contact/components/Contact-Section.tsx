'use client';

import { motion } from 'framer-motion';
import { Heading, Paragraph, Icons } from '@libs/ui';

import { CONTACT_INFO, SOCIAL_LINKS } from '../../../content';
import { ContactForm } from '../../components/Contact';
import { Section } from '../../../components/Section';

export const ContactSection = () => {
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
    <Section className="mx-auto px-12 sm:px-16 md:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-24 lg:grid-cols-2">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Heading
                as="h2"
                weight="semibold"
                className="mb-6 text-2xl sm:text-3xl"
              >
                Contact Information
              </Heading>
              <Paragraph
                as="p"
                weight="normal"
                size="lg"
                className="mb-8 text-muted-foreground"
              >
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
                    className="flex items-center gap-4 rounded-lg border border-border/50 bg-background/50 p-4 transition-colors hover:border-primary/30 hover:bg-primary/5"
                  >
                    <div className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <Paragraph
                        as="span"
                        size="xs"
                        weight="medium"
                        className="text-muted-foreground"
                      >
                        {item.label}
                      </Paragraph>
                      <Paragraph as="p" weight="medium" size="sm">
                        {item.value}
                      </Paragraph>
                    </div>
                    {item.link.startsWith('http') && (
                      <Icons.ExternalLink className="ml-auto size-4 text-muted-foreground" />
                    )}
                  </motion.a>
                ))}
              </motion.div>

              <div>
                <Heading as="h3" weight="medium" className="mb-4 text-lg">
                  Connect With Me
                </Heading>
                <div className="flex gap-4">
                  {SOCIAL_LINKS.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      className="flex items-center justify-center rounded-full border border-border/50 bg-background/50 p-3 text-foreground transition-colors hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                      aria-label={`Visit ${link.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                    >
                      {link.icon}
                    </motion.a>
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
