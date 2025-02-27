'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';

export const HeroIllustration = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  const isDark = theme === 'dark';

  // Define skill icons with their properties
  const skillIcons = [
    { id: 'ts', text: 'TS', color: '#3178C6', x: 180, y: 300 },
    { id: 'py', text: 'PY', color: '#3776AB', x: 150, y: 400 },
    { id: 'go', text: 'GO', color: '#00ADD8', x: 500, y: 150 },
    { id: 'node', text: 'NJ', color: '#539E43', x: 600, y: 400 },
    { id: 'aws', text: 'AWS', color: '#FF9900', x: 700, y: 250 },
    { id: 'docker', text: 'DC', color: '#2496ED', x: 120, y: 200 },
    { id: 'postgres', text: 'PG', color: '#336791', x: 650, y: 350 },
    { id: 'redis', text: 'RD', color: '#DC382D', x: 400, y: 100 },
    { id: 'graphql', text: 'GQL', color: '#E535AB', x: 200, y: 150 },
    { id: 'k8s', text: 'K8S', color: '#326CE5', x: 700, y: 150 },
  ];

  return (
    <div className="relative h-[400px] w-full sm:h-[500px] md:h-[600px]">
      {/* Background Glow Effects */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute h-64 w-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </div>

      {/* Main Illustration */}
      <motion.svg
        viewBox="0 0 800 600"
        className="absolute inset-0 h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated Shapes */}
        <motion.g
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {/* Central Code Window */}
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

          {/* Window Header */}
          <rect
            x="250"
            y="150"
            width="300"
            height="30"
            rx="8"
            fill={isDark ? '#1F1F1F' : '#F3F4F6'}
          />

          {/* Window Controls */}
          <circle cx="270" cy="165" r="4" fill="#FF5F57" />
          <circle cx="285" cy="165" r="4" fill="#FEBC2E" />
          <circle cx="300" cy="165" r="4" fill="#28C840" />

          {/* Code Lines */}
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
                fill={isDark ? '#4D4D4D' : '#E5E7EB'}
              />
              <rect
                x="265"
                y={200 + i * 25}
                width={30 + Math.random() * 20}
                height="6"
                rx="3"
                fill={isDark ? '#6366F1' : '#4F46E5'}
              />
            </motion.g>
          ))}
        </motion.g>

        {/* Floating Elements */}
        <motion.g>
          {/* React Logo */}
          <motion.g
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
            style={{ transformOrigin: '600px 200px' }}
          >
            <circle
              cx="600"
              cy="200"
              r="20"
              fill={isDark ? '#61DAFB20' : '#61DAFB40'}
              stroke="#61DAFB"
              strokeWidth="2"
            />
            <circle cx="600" cy="200" r="4" fill="#61DAFB" />
          </motion.g>

          {/* Skill Icons */}
          {skillIcons.map((icon, index) => (
            <motion.g
              key={icon.id}
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
            >
              <rect
                x={icon.x}
                y={icon.y}
                width="40"
                height="40"
                rx="8"
                fill={icon.color}
                opacity="0.8"
              />
              <text
                x={icon.x + (icon.text.length > 2 ? 5 : 10)}
                y={icon.y + 27}
                fill="white"
                fontSize={icon.text.length > 2 ? '16' : '20'}
                fontWeight="bold"
                fontFamily="monospace"
              >
                {icon.text}
              </text>
            </motion.g>
          ))}

          {/* Decorative Circles */}
          {[
            { cx: 200, cy: 150, size: 60 },
            { cx: 650, cy: 300, size: 40 },
            { cx: 400, cy: 450, size: 50 },
          ].map((circle, i) => (
            <motion.g key={i}>
              <motion.circle
                cx={circle.cx}
                cy={circle.cy}
                r={circle.size / 2}
                fill="none"
                stroke={isDark ? '#ffffff20' : '#00000020'}
                strokeWidth="2"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
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
                fill={isDark ? '#ffffff10' : '#00000010'}
                animate={{
                  scale: [1.2, 1, 1.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: 'easeInOut',
                  delay: i * 0.5,
                }}
              />
            </motion.g>
          ))}

          {/* Connecting Lines */}
          {[
            // Horizontal connections
            { x1: 160, y1: 220, x2: 250, y2: 220 },
            { x1: 550, y1: 170, x2: 680, y2: 170 },
            { x1: 190, y1: 420, x2: 250, y2: 420 },
            // Vertical connections
            { x1: 620, y1: 220, x2: 620, y2: 380 },
            { x1: 420, y1: 120, x2: 420, y2: 250 },
            // Diagonal connections
            { x1: 220, y1: 170, x2: 280, y2: 220 },
            { x1: 540, y1: 170, x2: 580, y2: 200 },
            { x1: 670, y1: 270, x2: 630, y2: 320 },
            { x1: 190, y1: 380, x2: 250, y2: 330 },
          ].map((line, i) => (
            <motion.line
              key={i}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke={isDark ? '#ffffff15' : '#00000015'}
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
        </motion.g>

        {/* Interactive Elements */}
        <motion.g>
          {[
            { x: 150, y: 200 },
            { x: 650, y: 150 },
            { x: 500, y: 400 },
            { x: 350, y: 100 },
            { x: 700, y: 300 },
          ].map((pos, i) => (
            <motion.circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r="6"
              fill={isDark ? '#ffffff30' : '#00000030'}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </motion.g>
      </motion.svg>
    </div>
  );
};
