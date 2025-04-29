import { StatusBar } from 'react-native';
import { useThemeContext } from './ThemeContextProvider';

function ThemeStatusBar() {
  const { isDark } = useThemeContext();

  return <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />;
}

export default ThemeStatusBar;
