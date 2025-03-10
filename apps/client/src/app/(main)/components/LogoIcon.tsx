'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const LogoIcon = () => {
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
          width="24"
          height="24"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="overflow-visible"
        >
          {/* E letter */}
          <motion.path
            d="M10 10 L10 38 M10 10 L25 10 M10 24 L22 24 M10 38 L25 38"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            className="stroke-body/90"
            transition={{
              duration: 1.5,
              ease: 'easeInOut',
              delay: 0.2,
            }}
          />

          {/* Dot */}
          <motion.circle
            cx="31.5"
            cy="24"
            r="1.6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.8, opacity: 1 }}
            className='fill-body/90'
            transition={{
              duration: 0.3,
              delay: 1.2,
            }}
          />

          {/* J letter */}
          <motion.path
            d="M42 10 L42 32 C42 36 39 38 36 38 L33 38"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            className="stroke-body/90"
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
              delay: 0.4,
            }}
          />
        </svg>
      )}
    </>
  );
};
