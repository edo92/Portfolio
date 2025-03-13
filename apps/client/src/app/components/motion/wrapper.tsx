import { motion, MotionProps } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps extends MotionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  delay = 0,
  ...props
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    {...props}
  >
    {children}
  </motion.div>
);
