'use client';

import { useRef, FC } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

import { cn } from '@libs/util';
import { Heading, Paragraph } from '@libs/ui';
import { TIMELINE_EVENTS } from '../../content';
import { Section } from '../../components/Section';

interface TimelineEventData {
  year: number;
  title: string;
  description: string;
  details: string;
}

interface TimelineEventProps {
  event: TimelineEventData;
  index: number;
}

const TimelineEvent: FC<TimelineEventProps> = ({ event, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const containerAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    transition: { duration: 0.8, delay: index * 0.1 },
  };

  const bulletAnimation = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 0.5, delay: index * 0.1 },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between',
        index % 2 === 0 && 'flex-row-reverse'
      )}
      {...containerAnimation}
    >
      <div className="w-5/12">
        <div className="transform-gpu cursor-pointer">
          <motion.div
            className="flex flex-col rounded-lg border p-6 shadow-lg transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.02, zIndex: 20 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex w-full flex-col">
              <div className="mb-3 flex flex-col gap-2">
                <Paragraph
                  as="span"
                  size="xs"
                  weight="medium"
                  className="inline-block"
                >
                  {event.year}
                </Paragraph>
                <Heading as="h3" weight="semibold" size="xl">
                  {event.title}
                </Heading>
              </div>
              <Paragraph as="p" weight="medium" size="base">
                {event.description}
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline Bullet */}
      <div className="z-10 flex items-center justify-center">
        <motion.div
          className="flex size-4 items-center justify-center rounded-full bg-card-foreground/80 p-3"
          {...bulletAnimation}
        >
          <div className="size-2 rounded-full bg-background p-[5px]" />
        </motion.div>
      </div>

      {/* Spacer for layout */}
      <div className="w-5/12" />
    </motion.div>
  );
};

export const Timeline: FC = () => {
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
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-12">
        {/* Section header */}
        <motion.div
          className="flex flex-col items-center justify-center gap-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" variant="title">
            Career Journey
          </Heading>
          <Paragraph as="p" variant="subtle">
            Key milestones in my software engineering journey
          </Paragraph>
        </motion.div>

        {/* Timeline events and vertical line */}
        <div className="relative space-y-12">
          <motion.div
            className={cn(
              'absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-secondary-foreground/40 dark:bg-secondary/80'
            )}
            style={{ scaleY, originY: 0, height: '105%', top: '0%' }}
          />

          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineEvent key={event.year} event={event} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
