import DatabaseProvider from '@/components/provider/database-provider';
import PretendardFontProvider from '@/components/provider/pretendard-font-provider';
import TanStackQueryProvider from '@/components/provider/tanstack-query-provider';
import ThemeSafeAreaView from '@/components/theme/theme-safe-area-view';
import ThemeStack from '@/components/theme/theme-stack';
import ThemeStatusBar from '@/components/theme/theme-status-bar';
import { SplashScreen } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <TanStackQueryProvider>
      <PretendardFontProvider>
        <DatabaseProvider>
          <GestureHandlerRootView>
            <ThemeSafeAreaView>
              <ThemeStatusBar />
              <ThemeStack />
            </ThemeSafeAreaView>
          </GestureHandlerRootView>
        </DatabaseProvider>
      </PretendardFontProvider>
    </TanStackQueryProvider>
  );
}
