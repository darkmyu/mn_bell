import ThemeContextProvider from '@/themes/ThemeContextProvider';
import ThemeSafeAreaView from '@/themes/ThemeSafeAreaView';
import ThemeStack from '@/themes/ThemeStack';
import ThemeStatusBar from '@/themes/ThemeStatusBar';

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
