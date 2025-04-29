import ThemeContextProvider from '@/themes/ThemeContextProvider';
import ThemeStatusBar from '@/themes/ThemeStatusBar';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <ThemeStatusBar />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeContextProvider>
  );
}
