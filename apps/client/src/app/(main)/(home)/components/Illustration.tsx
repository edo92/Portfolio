'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect, useMemo } from 'react';

const CodeLines = ({ isDark }: { isDark: boolean }) => {
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
        >
          <rect
            x="265"
            y={200 + i * 25}
            width={120 + Math.random() * 100}
            height="6"
            rx="3"
            fill={isDark ? 'var(--code-bg)' : 'var(--code-bg-light)'}
          />
          <rect
            x="265"
            y={200 + i * 25}
            width={30 + Math.random() * 20}
            height="6"
            rx="3"
            fill="var(--primary)"
          />
        </motion.g>
      ))}
    </>
  );
};

// Memoized decorative elements
const DecorativeElements = ({ isDark }: { isDark: boolean }) => {
  const circles = useMemo(
    () => [
      { cx: 200, cy: 150, size: 60 },
      { cx: 650, cy: 300, size: 40 },
      { cx: 400, cy: 450, size: 50 },
    ],
    []
  );

  return (
    <>
      {circles.map((circle, i) => (
        <motion.g key={i}>
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.size / 2}
            fill="none"
            stroke={
              isDark
                ? 'var(--circle-stroke-dark)'
                : 'var(--circle-stroke-light)'
            }
            strokeWidth="2"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
          <motion.circle
            cx={circle.cx}
            cy={circle.cy}
            r={circle.size / 4}
            fill={
              isDark ? 'var(--circle-fill-dark)' : 'var(--circle-fill-light)'
            }
            animate={{ scale: [1.2, 1, 1.2] }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        </motion.g>
      ))}
    </>
  );
};

// Memoized connecting lines
const ConnectingLines = ({ isDark }: { isDark: boolean }) => {
  const lines = useMemo(
    () => [
      { x1: 160, y1: 220, x2: 250, y2: 220 },
      { x1: 550, y1: 170, x2: 680, y2: 170 },
      { x1: 190, y1: 420, x2: 250, y2: 420 },
      { x1: 620, y1: 220, x2: 620, y2: 380 },
    ],
    []
  );

  return (
    <>
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke={isDark ? 'var(--line-dark)' : 'var(--line-light)'}
          strokeWidth="2"
          strokeDasharray="5,5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </>
  );
};

export const HeroIllustration = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set CSS variables for better performance
    document.documentElement.style.setProperty('--code-bg', '#4D4D4D');
    document.documentElement.style.setProperty('--code-bg-light', '#E5E7EB');
    document.documentElement.style.setProperty('--primary', '#6366F1');
    document.documentElement.style.setProperty(
      '--circle-stroke-dark',
      '#ffffff20'
    );
    document.documentElement.style.setProperty(
      '--circle-stroke-light',
      '#00000020'
    );
    document.documentElement.style.setProperty(
      '--circle-fill-dark',
      '#ffffff10'
    );
    document.documentElement.style.setProperty(
      '--circle-fill-light',
      '#00000010'
    );
    document.documentElement.style.setProperty('--line-dark', '#ffffff15');
    document.documentElement.style.setProperty('--line-light', '#00000015');
  }, []);

  useEffect(() => {
    setIsDark(theme === 'dark');
  }, [theme]);

  const skillIcons = useMemo(
    () => [
      { id: 'ts', img: '/static/logos/typescript.svg', x: 180, y: 300 },
      { id: 'py', img: '/static/logos/python.svg', x: 150, y: 400 },
      { id: 'go', img: '/static/logos/go.svg', x: 120, y: 200 },
      { id: 'node', img: '/static/logos/nodejs.svg', x: 220, y: 100 },
      { id: 'postgres', img: '/static/logos/postgres.svg', x: 600, y: 120 },
      { id: 'redis', img: '/static/logos/redis.svg', x: 400, y: 100 },
      { id: 'k8s', img: '/static/logos/kubernetes.svg', x: 660, y: 200 },
      { id: 'docker', img: '/static/logos/docker.svg', x: 640, y: 310 },
      { id: 'az', img: '/static/logos/azure.svg', x: 350, y: 400 },
      { id: 'aws', img: '/static/logos/aws.svg', x: 530, y: 420 },
    ],
    []
  );

  if (!mounted) return null;

  return (
    <div className="relative mt-3 h-[600px] w-full">
      {/* Background Glow Effects - Using CSS transform for better performance */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="animate-glow-1 absolute size-64 rounded-full bg-background-primary/10 blur-3xl" />
        <div className="animate-glow-2 absolute size-48 rounded-full bg-secondary/20 blur-3xl" />
      </div>

      {/* Main Illustration */}
      <motion.svg
        viewBox="0 0 800 600"
        className="absolute inset-0 size-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Add radial gradient mask */}
        <defs>
          <radialGradient id="fade" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#fade)" />
          </mask>
        </defs>

        {/* Grid Pattern */}
        <pattern
          id="grid"
          x="0"
          y="0"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke={isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}
            strokeWidth="1"
          />
        </pattern>
        <rect
          width="100%"
          height="100%"
          fill="url(#grid)"
          mask="url(#grid-mask)"
        />

        {/* Central Code Window */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.rect
            x="250"
            y="150"
            width="300"
            height="200"
            rx="8"
            fill={isDark ? '#2D2D2D' : '#FFFFFF'}
            stroke={isDark ? '#3E3E3E' : '#E5E7EB'}
            strokeWidth="2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />

          <rect
            x="250"
            y="150"
            width="300"
            height="30"
            rx="8"
            fill={isDark ? '#1F1F1F' : '#F3F4F6'}
          />

          <circle cx="270" cy="165" r="4" fill="#FF5F57" />
          <circle cx="285" cy="165" r="4" fill="#FEBC2E" />
          <circle cx="300" cy="165" r="4" fill="#28C840" />

          <CodeLines isDark={isDark} />
        </motion.g>

        {/* Floating Elements */}
        <motion.g>
          {/* Skill Icons with Original Logos - Reduced number for better performance */}
          {skillIcons.map((icon, index) => (
            <motion.image
              key={icon.id}
              x={icon.x}
              y={icon.y}
              width="37"
              height="37"
              href={icon.img}
              style={{ willChange: 'transform' }}
              animate={{
                y: [-10, 10, -10],
                x: index % 2 === 0 ? [-5, 5, -5] : [5, -5, 5],
              }}
              transition={{
                y: {
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                },
                x: {
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                },
              }}
            />
          ))}

          <DecorativeElements isDark={isDark} />
          <ConnectingLines isDark={isDark} />
        </motion.g>
      </motion.svg>
    </div>
  );
};
