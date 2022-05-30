import { styled, VariantProps } from '../../lib/stitches.config';

export const StyledSVG = styled('svg', {
  variants: {
    variant: {
      default: { stroke: 'currentColor', fill: 'none' },
      primary: {
        stroke: 'var(--laodeaksar-colors-typeface-primary)',
        fill: 'none',
      },
      secondary: {
        stroke: 'var(--laodeaksar-colors-typeface-secondary)',
        fill: 'none',
      },
      tertiary: {
        stroke: 'var(--laodeaksar-colors-typeface-tertiary)',
        fill: 'none',
      },
      info: {
        stroke: 'var(--laodeaksar-colors-brand)',
        fill: 'var(--laodeaksar-colors-emphasis)',
      },
      danger: {
        stroke: 'var(--laodeaksar-colors-danger)',
        fill: 'var(--laodeaksar-colors-danger-emphasis)',
      },
      success: {
        stroke: 'var(--laodeaksar-colors-success)',
        fill: 'var(--laodeaksar-colors-success-emphasis)',
      },
      warning: {
        stroke: 'var(--laodeaksar-colors-warning)',
        fill: 'var(--laodeaksar-colors-warning-emphasis)',
      },
    },
    outline: {
      true: {
        fill: 'none !important',
      },
    },
    size: {
      1: {
        width: 'var(--space-1)',
        height: 'var(--space-1)',
      },
      2: {
        width: 'var(--space-2)',
        height: 'var(--space-2)',
      },
      3: {
        width: 'var(--space-3)',
        height: 'var(--space-3)',
      },
      4: {
        width: 'var(--space-4)',
        height: 'var(--space-4)',
      },
      5: {
        width: 'var(--space-5)',
        height: 'var(--space-5)',
      },
      6: {
        width: 'var(--space-6)',
        height: 'var(--space-6)',
      },
      7: {
        width: 'var(--space-7)',
        height: 'var(--space-7)',
      },
      8: {
        width: 'var(--space-8)',
        height: 'var(--space-8)',
      },
      9: {
        width: 'var(--space-9)',
        height: 'var(--space-9)',
      },
      10: {
        width: 'var(--space-10)',
        height: 'var(--space-10)',
      },
      11: {
        width: 'var(--space-11)',
        height: 'var(--space-11)',
      },
      12: {
        width: 'var(--space-12)',
        height: 'var(--space-12)',
      },
      13: {
        width: 'var(--space-13)',
        height: 'var(--space-13)',
      },
      14: {
        width: 'var(--space-14)',
        height: 'var(--space-14)',
      },
      15: {
        width: 'var(--space-15)',
        height: 'var(--space-15)',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
    outline: true,
    size: 5,
  },
});

export type IconSize = VariantProps<typeof StyledSVG>['size'];
export type IconVariant = VariantProps<typeof StyledSVG>['variant'];
