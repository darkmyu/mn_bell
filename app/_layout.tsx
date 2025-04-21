import ThemeContextProvider from '@/themes/ThemeContextProvider';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <Stack />
    </ThemeContextProvider>
  );
}
