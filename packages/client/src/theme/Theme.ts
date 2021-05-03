import hexToRgba from '../utils/hexToRgba';

const getBoxShadow = (strength: number): string => `0 1px 1px rgba(0,0,0,${strength}),
              0 2px 2px rgba(0,0,0,${strength}),
              0 4px 4px rgba(0,0,0,${strength}),
              0 8px 8px rgba(0,0,0,${strength}),
              0 16px 16px rgba(0,0,0,${strength})`;

const white = '#fff';
const blue = '#0F8FFF';
const red = '#D32F2F';
const dark = '#41464E';
const grey = '#F4F4F4';
const disabledOpacity = 0.3;

export const theme = {
  breakpoints: {
    xs: 375,
    sm: 600,
    md: 960,
    lg: 1120,
    xl: 1920,
  },
  sizes: {
    borderRadius: '12px',
  },
  palette: {
    divider: hexToRgba(dark, 0.1),
    disabled: hexToRgba(dark, 0.4),
    focus: hexToRgba(dark, 0.3),
    colors: {
      white,
      blue,
      dark,
      grey,
      red,
    },
    boxShadow: {
      default: getBoxShadow(0.03),
      small: getBoxShadow(0.015),
      big: getBoxShadow(0.08),
      getBoxShadow,
    },
    opacity: {
      label: 0.7,
      disabled: disabledOpacity,
    },
  },
  up: (breakpoint: number, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpoint}px + 1px))`,
  down: (breakpoint: number, vertical = false) =>
    `@media (max-${vertical ? 'height' : 'width'}: ${breakpoint}px)`,
  upDown: (breakpointUp: number, breakpointDown: number, vertical = false) =>
    `@media (min-${vertical ? 'height' : 'width'}: calc(${breakpointUp}px + 1px)) and (max-${
      vertical ? 'height' : 'width'
    }: ${breakpointDown}px)`,
};

export type ITheme = typeof theme;
