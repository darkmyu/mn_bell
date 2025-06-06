import PretendardFontProvider from '@/components/provider/PretendardFontProvider';
import TanStackQueryProvider from '@/components/provider/TanStackQueryProvider';
import ThemeStack from '@/components/theme/ThemeStack';
import { SplashScreen } from 'expo-router';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TanStackQueryProvider>
      <PretendardFontProvider>
        <GestureHandlerRootView>
          <ThemeSafeAreaView>
            <ThemeStatusBar />
            <ThemeStack />
          </ThemeSafeAreaView>
        </GestureHandlerRootView>
      </PretendardFontProvider>
    </TanStackQueryProvider>
  );
}
