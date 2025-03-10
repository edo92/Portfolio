'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeaderWithAnimatedLogo() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isAnimating && (
        <svg
          width="26"
          height="26"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* E letter */}
          <motion.path
            d="M10 10 L10 38 M10 10 L25 10 M10 24 L22 24 M10 38 L25 38"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />

          {/* Dot */}
          <motion.circle
            cx="29"
            cy="24"
            r="1.5"
            fill="black"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            transition={{
              duration: 0.3,
              delay: 1.8,
            }}
          />

          {/* J letter */}
          <motion.path
            d="M38 10 L38 32 C38 36 35 38 32 38 L29 38"
            stroke="black"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />
        </svg>
      )}
    </>
  );
}
