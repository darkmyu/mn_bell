import ThemeContextProvider from '@/themes/ThemeContextProvider';
import ThemeSafeAreaView from '@/themes/ThemeSafeAreaView';
import ThemeStatusBar from '@/themes/ThemeStatusBar';
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <ThemeStatusBar />
      <ThemeSafeAreaView>
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeSafeAreaView>
    </ThemeContextProvider>
  );
}
