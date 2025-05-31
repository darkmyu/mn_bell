import { StatusBar } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useThemeContext } from './ThemeContextProvider';

function ThemeStatusBar() {
  const theme = useTheme();
  const { isDark } = useThemeContext();

  return <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />;
}

export default ThemeStatusBar;
