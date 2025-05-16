import { gray, grayDark, teal, tealDark } from '@radix-ui/colors';
import { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import { DefaultTheme, ThemeProvider } from 'styled-components/native';

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

const lightTheme: DefaultTheme = {
  colors: {
    primary: teal.teal9,
    surface: gray.gray3,
    onSurface: gray.gray12,
    container: gray.gray1,
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    primary: tealDark.teal9,
    surface: grayDark.gray3,
    onSurface: grayDark.gray12,
    container: grayDark.gray1,
  },
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
