import 'styled-components';
import { ColorToken, Palette, Spacing } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    colorToken: ColorToken;
    spacing: Spacing;
  }
}
