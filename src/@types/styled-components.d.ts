import 'styled-components';
import { ColorToken, Palette } from '../styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    colorToken: ColorToken;
  }
}
