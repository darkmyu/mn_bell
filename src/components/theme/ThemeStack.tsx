import { Stack } from 'expo-router';
import { useTheme } from 'styled-components/native';

function ThemeStack() {
  const theme = useTheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: theme.colors.background,
        },
      }}
    />
  );
}

export default ThemeStack;
