import React, { createContext, useContext, useEffect, useState } from 'react';
import { blackA, gray, grayDark, teal, tealDark, tomato, tomatoDark, whiteA } from '@radix-ui/colors';
import { useColorScheme } from 'react-native';
import { DefaultTheme, ThemeColors, ThemeFonts, ThemeProvider } from 'styled-components/native';

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme: () => void;
}

interface Props {
  children: React.ReactNode;
}

const initialValue: ThemeContextValue = {
  isDark: false,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextValue>(initialValue);

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

const lightTheme: DefaultTheme = {
  colors: lightColors,
  fonts,
};

const darkTheme: DefaultTheme = {
  colors: darkColors,
  fonts,
};

function ThemeContextProvider({ children }: Props) {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(colorScheme === 'dark');
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
