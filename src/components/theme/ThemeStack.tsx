import { gray, grayDark } from '@radix-ui/colors';
import { Stack } from 'expo-router';
import { useThemeContext } from './ThemeContextProvider';

function ThemeStack() {
  const { isDark } = useThemeContext();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: isDark ? grayDark.gray1 : gray.gray1,
        },
      }}
    />
  );
}

export default ThemeStack;
