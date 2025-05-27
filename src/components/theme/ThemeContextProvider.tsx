import { blackA, gray, grayDark, teal, tealDark, tomato, tomatoDark, whiteA } from '@radix-ui/colors';
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, ThemeColors, ThemeFonts, ThemeProvider } from 'styled-components/native';

interface Props {
  children: React.ReactNode;
}

interface ThemeContextValue {
  isDark: boolean;
  toggleTheme(): void;
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
  onPrimary: teal.teal1,
  secondary: tomato.tomato9,
  onSecondary: tomato.tomato1,
  surface: gray.gray3,
  onSurfaceLow: gray.gray11,
  onSurface: gray.gray12,
  container: gray.gray1,
  containerHigh: gray.gray5,
};

const darkColors: ThemeColors = {
  white: whiteA.whiteA12,
  black: blackA.blackA12,
  primary: tealDark.teal9,
  onPrimary: tealDark.teal1,
  secondary: tomatoDark.tomato9,
  onSecondary: tomatoDark.tomato1,
  onSurfaceLow: grayDark.gray11,
  surface: grayDark.gray3,
  onSurface: grayDark.gray12,
  container: grayDark.gray1,
  containerHigh: grayDark.gray5,
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
