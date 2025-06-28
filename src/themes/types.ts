import { gray, teal, tomato } from '@radix-ui/colors';

export interface Themes {
  light: ThemeValues;
  dark: ThemeValues;
}

export interface ThemeValues {
  colors: ThemeColors;
  fonts: ThemeFonts;
}

export interface ThemeFonts {
  thin: string;
  extraLight: string;
  light: string;
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
  extraBold: string;
  black: string;
}

export type BaseColors = {
  white: string;
  black: string;
  primary: string;
  secondary: string;
  background: string;
  content: string;
};

export type RadixColors = typeof gray & typeof teal & typeof tomato;

export type ThemeColors = BaseColors & RadixColors;
