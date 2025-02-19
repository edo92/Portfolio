'use client';

import { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@libs/ui';

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

export default function Timeline() {
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
    <div
      ref={containerRef}
      className="bg-background relative overflow-hidden py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-foreground font-bold text-3xl sm:text-4xl">
            Our Journey
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            The evolution of Flowers & Saints through the years
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="bg-primary/20 absolute inset-y-0 left-1/2 w-0.5"
            style={{ scaleY, originY: 0 }}
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
    </div>
  );
}

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
      className={`mb-12 flex w-full items-center justify-between ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : ''}`}>
        <motion.div
          className="bg-card border-primary/10 rounded-lg border p-6 shadow-lg transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="text-primary bg-primary/10 mb-2 inline-block rounded-full px-3 py-1 text-sm font-semibold">
            {event.year}
          </span>
          <h3 className="text-foreground mb-2 text-xl font-semibold">
            {event.title}
          </h3>
          <p className="text-muted-foreground mb-4">{event.description}</p>
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? 'auto' : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-muted-foreground mt-2 text-sm">
              {event.details}
            </p>
          </motion.div>
          <Button variant="ghost" size="sm" className="mt-4" onClick={onToggle}>
            {isExpanded ? (
              <>
                Read Less <ChevronUp className="ml-2 size-4" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="ml-2 size-4" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
      <div className="z-10">
        <motion.div
          className="bg-primary flex size-4 items-center justify-center rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div className="bg-background size-2 rounded-full" />
        </motion.div>
      </div>
      <div className="w-5/12" />
    </motion.div>
  );
}
