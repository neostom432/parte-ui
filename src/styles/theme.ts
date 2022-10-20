import { DefaultTheme } from 'styled-components';

export const theme = {
  // SUR
  'Surface-primary': 'white',
} as const;

export type ThemeType = typeof theme;
