import React from 'react';
import { StatusBar, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { StyleSheet, UnistylesRuntime, useUnistyles } from 'react-native-unistyles';

function ThemeStatusBar() {
  const { theme } = useUnistyles();
  const { top } = useSafeAreaInsets();
  const isDark = UnistylesRuntime.themeName === 'dark';

  return (
    <>
      {/*iOS*/}
      <View style={styles.container(top)} />
      {/*Android*/}
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} backgroundColor={theme.colors.background} />
    </>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: (top: number) => ({
    height: top,
    backgroundColor: theme.colors.background,
  }),
}));

export default ThemeStatusBar;
