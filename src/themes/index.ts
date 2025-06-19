import { blackA, gray, grayDark, teal, tealDark, tomato, tomatoDark, whiteA } from '@radix-ui/colors';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';
import { ThemeColors, ThemeFonts, ThemeValues } from './types';

const fonts: ThemeFonts = {
  thin: 'Pretendard-Thin',
  extraLight: 'Pretendard-ExtraLight',
  light: 'Pretendard-Light',
  regular: 'Pretendard-Regular',
  medium: 'Pretendard-Medium',
  semiBold: 'Pretendard-SemiBold',
  bold: 'Pretendard-Bold',
  extraBold: 'Pretendard-ExtraBold',
  black: 'Pretendard-Black',
};

const lightColors: ThemeColors = {
  white: whiteA.whiteA12,
  black: blackA.blackA12,
  primary: teal.teal9,
  secondary: tomato.tomato9,
  background: gray.gray3,
  content: gray.gray12,
  ...gray,
};

const darkColors: ThemeColors = {
  white: whiteA.whiteA12,
  black: blackA.blackA12,
  primary: tealDark.teal9,
  secondary: tomatoDark.tomato9,
  background: grayDark.gray3,
  content: grayDark.gray12,
  ...grayDark,
};

const lightTheme: ThemeValues = {
  colors: lightColors,
  fonts,
};

const darkTheme: ThemeValues = {
  colors: darkColors,
  fonts,
};

StyleSheet.configure({
  themes: {
    light: lightTheme,
    dark: darkTheme,
  },
  settings: {
    initialTheme: () => (UnistylesRuntime.colorScheme === 'light' ? 'light' : 'dark'),
  },
});
