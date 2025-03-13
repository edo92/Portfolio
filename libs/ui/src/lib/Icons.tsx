import type { SVGAttributes } from 'react';
import { Sun, Moon } from 'lucide-react';

export type IconProps = SVGAttributes<SVGElement>;

export const Icons = {
  Sun,
  Moon,
} as const;
