import PretendardFontProvider from '@/components/provider/PretendardFontProvider';
import TanStackQueryProvider from '@/components/provider/TanStackQueryProvider';
import ThemeContextProvider from '@/components/theme/ThemeContextProvider';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStack from '@/components/theme/ThemeStack';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TanStackQueryProvider>
      <PretendardFontProvider>
        <ThemeContextProvider>
          <ThemeStatusBar />
          <ThemeSafeAreaView>
            <ThemeStack />
          </ThemeSafeAreaView>
        </ThemeContextProvider>
      </PretendardFontProvider>
    </TanStackQueryProvider>
  );
}
