import { Stack } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';

function ThemeStack() {
  const { theme } = useUnistyles();

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
