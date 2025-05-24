import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}

function PretendardFontProvider({ children }: Props) {
  const [loaded, error] = useFonts({
    'Pretendard-Thin': require('@/../assets/fonts/Pretendard-Thin.otf'),
    'Pretendard-ExtraLight': require('@/../assets/fonts/Pretendard-ExtraLight.otf'),
    'Pretendard-Light': require('@/../assets/fonts/Pretendard-Light.otf'),
    'Pretendard-Regular': require('@/../assets/fonts/Pretendard-Regular.otf'),
    'Pretendard-Medium': require('@/../assets/fonts/Pretendard-Medium.otf'),
    'Pretendard-SemiBold': require('@/../assets/fonts/Pretendard-SemiBold.otf'),
    'Pretendard-Bold': require('@/../assets/fonts/Pretendard-Bold.otf'),
    'Pretendard-ExtraBold': require('@/../assets/fonts/Pretendard-ExtraBold.otf'),
    'Pretendard-Black': require('@/../assets/fonts/Pretendard-Black.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return children;
}

export default PretendardFontProvider;
