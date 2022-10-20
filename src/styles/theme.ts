import { DefaultTheme } from 'styled-components';

export const theme = {
  // SUR
  'Surface-primary': 'white',
  mainBackground: `#fff`,
  // neutral color
  title: `rgba(0, 0, 0, 0.85)`,
  primaryText: `rgba(0, 0, 0, 0.75)`,
  secondaryText: `rgba(0, 0, 0, 0.45)`,
  disable: `rgba(0, 0, 0, 0.25)`,
  border: `rgba(0, 0, 0, 0.15)`,
  divider: `rgba(0, 0, 0, 0.06)`,
  background: `rgba(0, 0, 0, 0.04)`,
  tableHeader: `rgba(0, 0, 0, 0.02)`,
} as const;

export type ThemeType = typeof theme;
