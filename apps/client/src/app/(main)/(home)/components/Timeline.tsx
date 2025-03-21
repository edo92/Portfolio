'use client';

import { useRef, type FC } from 'react';
import { motion, useScroll, useSpring, useInView } from 'framer-motion';

import { cn } from '@/util';
import { Container, Heading, Paragraph, Section } from '@/ui';
import { TIMELINE_EVENTS } from '../../../content';

interface TimelineEventData {
  year: string;
  title: string;
  description: string;
}

interface TimelineEventProps {
  event: TimelineEventData;
  index: number;
  total: number;
}

const timelineEventAnimation = {
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

const TimelineEvent: FC<TimelineEventProps> = ({ event, index, total }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { year, title, description } = event;
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={cn(
        'flex w-full items-center justify-between',
        isEven && 'flex-row-reverse'
      )}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={timelineEventAnimation}
      custom={index}
      role="listitem"
      aria-label={`Timeline event ${index + 1} of ${total}: ${year} - ${title}`}
    >
      {/* Increased width from 5/12 to 6/12 to make cards bigger */}
      <div className="w-6/12">
        <div
          className={cn(
            'transform-gpu',
            isEven && 'ml-9 md:ml-12 lg:ml-16',
            !isEven && 'mr-9 md:mr-12 lg:mr-16'
          )}
          role="button"
          tabIndex={0}
          aria-expanded="false"
        >
          <motion.div
            className="flex flex-col rounded-lg border p-6 shadow-lg transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.02, zIndex: 20 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex w-full flex-col">
              <div className="mb-3 flex flex-col gap-2">
                <Paragraph
                  as="span"
                  variant="metadata"
                  className="inline-block"
                >
                  {year}
                </Paragraph>
                <Heading as="h3" variant="h4">
                  {title}
                </Heading>
              </div>
              <Paragraph as="p" variant="body" className="text-body/80">
                {description}
              </Paragraph>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline bullet */}
      <div className="z-10 flex items-center justify-center">
        <motion.div
          className="flex size-4 items-center justify-center rounded-full bg-card-foreground/80 p-3"
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={bulletAnimation}
          custom={index}
        >
          <div className="size-2 rounded-full bg-background p-[5px]" />
        </motion.div>
      </div>

      {/* Spacer for layout - also updated to match the card width */}
      <div className="w-6/12" />
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
    <Section ref={containerRef} background="secondary">
      <Container className="flex flex-col gap-12" size="xl">
        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center justify-center gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          role="heading"
          aria-level={2}
        >
          <Heading as="h2" variant="h2">
            Career Journey
          </Heading>
          <Paragraph as="p" variant="body-md" className="text-body/80">
            Key milestones in my software engineering journey
          </Paragraph>
        </motion.div>

        {/* Timeline events and vertical progress line */}
        <div
          className="relative space-y-12"
          role="list"
          aria-label="Timeline of career events"
        >
          <motion.div
            className={cn(
              'absolute inset-y-0 left-[49.95%] w-0.5 -translate-x-1/2 bg-secondary-foreground/40 dark:bg-secondary/80'
            )}
            style={{ scaleY, originY: 0, height: '105%', top: '0%' }}
            aria-hidden="true"
          />
          {TIMELINE_EVENTS.map((event, index) => (
            <TimelineEvent
              key={event.year + index}
              event={event}
              index={index}
              total={TIMELINE_EVENTS.length}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
};
