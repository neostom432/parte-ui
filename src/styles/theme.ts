import { palette } from './palette';
import * as colorToken from './colorToken';
import { spacing } from './spacing';

export type Palette = typeof palette;
export type ColorToken = typeof colorToken;
export type Spacing = typeof spacing;

export default { palette, colorToken, spacing };
