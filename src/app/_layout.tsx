import PretendardFontProvider from '@/components/provider/PretendardFontProvider';
import TanStackQueryProvider from '@/components/provider/TanStackQueryProvider';
import ThemeStack from '@/components/theme/ThemeStack';
import { SplashScreen } from 'expo-router';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TanStackQueryProvider>
      <PretendardFontProvider>
        <ThemeSafeAreaView>
          <ThemeStatusBar />
          <ThemeStack />
        </ThemeSafeAreaView>
      </PretendardFontProvider>
    </TanStackQueryProvider>
  );
}
