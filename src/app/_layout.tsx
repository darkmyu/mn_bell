import PretendardFontProvider from '@/components/provider/PretendardFontProvider';
import TanStackQueryProvider from '@/components/provider/TanStackQueryProvider';
import ThemeSafeAreaView from '@/components/theme/ThemeSafeAreaView';
import ThemeStack from '@/components/theme/ThemeStack';
import ThemeStatusBar from '@/components/theme/ThemeStatusBar';
import { SplashScreen } from 'expo-router';
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
