'use client';

import { useRef, FC } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

import { cn } from '@libs/util';
import { Heading, Paragraph } from '@libs/ui';
import { TIMELINE_EVENTS } from '../../content';
import { Section } from '../../components/Section';

interface TimelineEventData {
  year: string;
  title: string;
  description: string;
}

interface TimelineEventProps {
  event: TimelineEventData;
  index: number;
}

const timelineEventVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: custom * 0.1 },
  }),
};

const bulletAnimation = {
  hidden: { scale: 0 },
  visible: (custom: number) => ({
    scale: 1,
    transition: { duration: 0.5, delay: custom * 0.1 },
  }),
};

const TimelineEvent: FC<TimelineEventProps> = ({ event, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { year, title, description } = event;

  return (
    <motion.div
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between',
        index % 2 === 0 && 'flex-row-reverse'
      )}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={timelineEventVariants}
      custom={index}
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
                <Paragraph as="span" variant="small" className="font-light">
                  {year}
                </Paragraph>
                <Heading as="h3" variant="card">
                  {title}
                </Heading>
              </div>
              <Paragraph as="p" variant="body">
                {description}
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="z-10 flex items-center justify-center">
        <motion.div
          className="bg-card-foreground/80 flex size-4 items-center justify-center rounded-full p-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={bulletAnimation}
          custom={index}
        >
          <div className="bg-background size-2 rounded-full p-[5px]" />
        </motion.div>
      </div>

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
      <div className="container mx-auto flex max-w-screen-lg flex-col gap-12">
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" variant="section">
            Career Journey
          </Heading>
          <Paragraph as="p" variant="lead">
            Key milestones in my software engineering journey
          </Paragraph>
        </motion.div>

        <div className="relative space-y-12">
          <motion.div
            className={cn(
              'bg-secondary-foreground/40 dark:bg-secondary/80 absolute inset-y-0 left-[49.95%] w-0.5 -translate-x-1/2'
            )}
            style={{ scaleY, originY: 0, height: '105%', top: '0%' }}
          />
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineEvent
              key={event.year + index}
              event={event}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
