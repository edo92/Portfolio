'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

import { cn } from '@libs/util';
import { Heading, Paragraph } from '@libs/ui';
import { Section } from '../../components/Section';

const timelineEvents = [
  {
    year: 2018,
    title: 'Flowers & Saints Founded',
    description:
      'Our journey began with a passion for minimal design and floral artistry.',
    details:
      "Founded by Jane Doe and John Smith, Flowers & Saints started as a small studio in Sydney's Surry Hills, combining their love for minimalist design and botanical beauty.",
  },
  {
    year: 2019,
    title: 'First Major Exhibition',
    description:
      'Showcased our unique blend of digital art and floral arrangements at the Sydney Design Festival.',
    details:
      "Our exhibition 'Digital Bloom' attracted over 10,000 visitors and received critical acclaim for its innovative approach to merging technology with natural elements.",
  },
  {
    year: 2020,
    title: 'Launch of Online Store',
    description:
      'Expanded our reach by bringing our creations to the digital world.',
    details:
      'In response to global changes, we pivoted to e-commerce, offering our unique designs and virtual floral workshops to a worldwide audience.',
  },
  {
    year: 2021,
    title: 'Collaboration with Top Brands',
    description:
      'Partnered with leading lifestyle brands to create exclusive collections.',
    details:
      'Our collaborations included limited edition prints with Australian fashion label Zimmermann and a bespoke fragrance line with Aesop.',
  },
  {
    year: 2022,
    title: 'International Recognition',
    description: 'Received the prestigious International Floral Design Award.',
    details:
      "Our 'Ethereal Echoes' installation, which combined holographic projections with live flowers, won the gold medal at the Chelsea Flower Show.",
  },
  {
    year: 2023,
    title: 'Expansion to Physical Stores',
    description: 'Opened our first flagship store in the heart of Sydney.',
    details:
      'Our Bondi Beach location features an immersive retail experience, blending digital installations with a curated selection of floral arrangements and lifestyle products.',
  },
];

export const Timeline = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <Section ref={containerRef} secondary>
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          className="mb-12 md:mb-16 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" weight="bold" className="text-3xl sm:text-4xl">
            Our Journey
          </Heading>
          <Paragraph as="p" weight="normal" size="md" className="mt-6">
            The evolution of Flowers & Saints through the years
          </Paragraph>
        </motion.div>

        <div className="relative space-y-12">
          <motion.div
            className={cn(
              'absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-secondary-foreground/40 dark:bg-secondary/80'
            )}
            style={{
              scaleY,
              originY: 0,
              height: '105%',
              top: '0%',
            }}
          />

          {timelineEvents.map((event, index) => (
            <TimelineEvent
              key={event.year}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

function TimelineEvent({
  event,
  index,
  isExpanded,
  onToggle,
}: {
  event: (typeof timelineEvents)[0];
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between',
        index % 2 === 0 ? 'flex-row-reverse' : ''
      )}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12">
        <div className="transform-gpu" onClick={onToggle}>
          <motion.div
            className="rounded-lg border p-6 sm:p-8 shadow-lg transition-all duration-300 ease-in-out cursor-pointer"
            whileHover={{
              scale: 1.02,
              zIndex: 20,
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Paragraph
              as="span"
              size="xs"
              weight="medium"
              className="mb-2 inline-block"
            >
              {event.year}
            </Paragraph>

            <Heading variant="h3" weight="semibold" size="xl" className="mb-3">
              {event.title}
            </Heading>

            <Paragraph as="p" weight="medium" size="base">
              {event.description}
            </Paragraph>

            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <Paragraph
                as="p"
                size="sm"
                weight="medium"
                className="mt-4 text-body/80"
              >
                {event.details}
              </Paragraph>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="z-10 flex items-center justify-center">
        <motion.div
          className="flex size-4 items-center justify-center rounded-full bg-card-foreground/80 p-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="size-2 rounded-full bg-background p-[5px]" />
        </motion.div>
      </div>
      <div className="w-5/12" />
    </motion.div>
  );
}
