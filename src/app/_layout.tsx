import ThemeContextProvider from '@/components/theme/ThemeContextProvider';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStack from '@/components/theme/ThemeStack';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';
import { SplashScreen } from 'expo-router';
import PretendardFontProvider from '../components/font/PretendardFontProvider';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <PretendardFontProvider>
      <ThemeContextProvider>
        <ThemeStatusBar />
        <ThemeSafeAreaView>
          <ThemeStack />
        </ThemeSafeAreaView>
      </ThemeContextProvider>
    </PretendardFontProvider>
  );
}
