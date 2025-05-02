import ThemeContextProvider from '@/components/theme/ThemeContextProvider';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStack from '@/components/theme/ThemeStack';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';

export default function RootLayout() {
  return (
    <ThemeContextProvider>
      <ThemeStatusBar />
      <ThemeSafeAreaView>
        <ThemeStack />
      </ThemeSafeAreaView>
    </ThemeContextProvider>
  );
}
