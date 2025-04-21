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
    surface: 'white',
    onSurface: 'black',
  },
};

const darkTheme: DefaultTheme = {
  colors: {
    surface: 'black',
    onSurface: 'white',
  },
};

function ThemeContextProvider({ children }: Props) {
  const colorScheme = useColorScheme();
  const [isDark, setIsDark] = useState(colorScheme === 'dark');

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(!isDark);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useThemeContext = () => useContext(ThemeContext);

export default ThemeContextProvider;
