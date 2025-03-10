'use client';

import type React from 'react';
import { forwardRef } from 'react';
import NextImage, { type ImageProps as NextImageProps } from 'next/image';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const PLACEHOLDER_IMAGE = '/static/projects/placeholder.svg';

const imageVariants = tv({
  base: 'relative overflow-hidden',
  variants: {
    size: {
      avatar: 'size-10',
      xs: 'size-16',
      sm: 'size-24',
      md: 'size-32',
      lg: 'size-48',
      xl: 'size-64',
      '2xl': 'size-96',
      full: 'size-full',
      auto: 'size-auto',
    },
    shape: {
      default: 'rounded-none',
      rounded: 'rounded-md',
      circle: 'rounded-full',
      square: 'aspect-square',
      'rounded-full': 'rounded-full',
      'rounded-sm': 'rounded-sm',
      'rounded-lg': 'rounded-lg',
      'rounded-xl': 'rounded-xl',
      'rounded-2xl': 'rounded-2xl',
      'rounded-3xl': 'rounded-3xl',
    },
    border: {
      none: 'border-0',
      default: 'border-border border',
      thin: 'border-border/50 border',
      thick: 'border-border border-2',
      primary: 'border-primary border-2',
      accent: 'border-accent border-2',
    },
    shadow: {
      none: 'shadow-none',
      sm: 'shadow-sm',
      default: 'shadow',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl',
    },
    hover: {
      none: '',
      grow: 'transition-transform duration-300 hover:scale-105',
      shrink: 'transition-transform duration-300 hover:scale-95',
      shine:
        'relative overflow-hidden [&::after]:absolute [&::after]:inset-0 [&::after]:bg-gradient-to-r [&::after]:from-transparent [&::after]:via-white/20 [&::after]:to-transparent [&::after]:transition-transform [&::after]:duration-500 [&:hover::after]:translate-x-full',
      rotate: 'transition-transform duration-300 hover:rotate-3',
    },
    filter: {
      none: '',
      grayscale: 'grayscale',
      blur: 'blur-sm',
      sepia: 'sepia',
      invert: 'invert',
      brightness: 'brightness-125',
      contrast: 'contrast-125',
      saturate: 'saturate-150',
      'grayscale-hover':
        'grayscale-0 transition-all duration-300 hover:grayscale',
      'color-hover': 'grayscale transition-all duration-300 hover:grayscale-0',
    },
    objectFit: {
      contain: 'object-contain',
      cover: 'object-cover',
      fill: 'object-fill',
      none: 'object-none',
      'scale-down': 'object-scale-down',
    },
    loading: {
      eager: '',
      lazy: '',
    },
  },
  defaultVariants: {
    size: 'auto',
    shape: 'default',
    border: 'none',
    shadow: 'none',
    hover: 'none',
    filter: 'none',
    objectFit: 'cover',
    loading: 'lazy',
  },
});

export interface ImageProps
  extends Omit<NextImageProps, 'className' | 'fill' | 'sizes' | 'objectFit'>,
    VariantProps<typeof imageVariants> {
  className?: string;
  containerClassName?: string;
  fill?: boolean;
  sizes?: string;
  fallback?: string;
  aspectRatio?: string;
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      width,
      height,
      size,
      shape,
      border,
      shadow,
      hover,
      filter,
      objectFit,
      loading,
      className,
      containerClassName,
      fill = false,
      sizes,
      fallback = PLACEHOLDER_IMAGE,
      aspectRatio,
      ...props
    },
    ref
  ) => {
    const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      const target = e.target as HTMLImageElement;
      if (target.src !== fallback) {
        target.src = fallback;
      }
    };

    const aspectRatioStyle = aspectRatio
      ? {
          aspectRatio,
          width: '100%',
        }
      : {};

    return (
      <NextImage
        ref={ref}
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={sizes}
        className={cn(
          imageVariants({
            size: !fill ? size : undefined,
            shape,
            border,
            shadow,
            hover,
            filter,
            objectFit,
          }),
          className,
          '!relative'
        )}
        onError={handleError}
        loading={loading === 'eager' ? 'eager' : 'lazy'}
        style={!fill ? aspectRatioStyle : undefined}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';

export { Image, imageVariants };
