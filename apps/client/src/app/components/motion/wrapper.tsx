import { forwardRef, ReactNode } from 'react';
import { motion, MotionProps } from 'framer-motion';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = forwardRef<
  HTMLDivElement,
  MotionWrapperProps
>(({ children, delay = 0, ...props }, ref) => (
  <motion.div
    ref={ref}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
));

MotionWrapper.displayName = 'MotionWrapper';
