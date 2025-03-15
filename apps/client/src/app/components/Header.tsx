'use client';

import { motion } from 'framer-motion';
import { Link, Paragraph } from '@/ui';
import { LogoIcon } from './LogoIcon';
import { ThemeSwitch } from './ThemeSwitch';

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const navItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + custom * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
};

export const Header = () => (
  <motion.header initial="hidden" animate="visible" variants={headerVariants}>
    <nav
      className="z-10 flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-12 lg:py-5"
      aria-label="Main navigation"
    >
      <motion.div variants={logoVariants} whileHover="hover">
        <Link
          href="/"
          className="flex items-center"
          aria-label="Go to homepage"
        >
          <LogoIcon />
        </Link>
      </motion.div>
      <div className="flex items-center gap-4 sm:gap-6">
        <ul className="m-0 flex list-none items-center gap-4 p-0 sm:gap-6">
          <motion.li custom={0} variants={navItemVariants}>
            <Link href="/projects">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Paragraph
                  as="span"
                  variant="navlink"
                  className="transition-colors hover:text-body/75"
                >
                  Projects
                </Paragraph>
              </motion.div>
            </Link>
          </motion.li>
          <motion.li custom={1} variants={navItemVariants}>
            <Link href="/contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Paragraph
                  as="span"
                  variant="navlink"
                  className="transition-colors hover:text-body/75"
                >
                  Contact
                </Paragraph>
              </motion.div>
            </Link>
          </motion.li>
          <motion.li
            className="px-1"
            custom={2}
            variants={navItemVariants}
            whileHover={{ rotate: 5 }}
          >
            <ThemeSwitch />
          </motion.li>
        </ul>
      </div>
    </nav>
  </motion.header>
);
