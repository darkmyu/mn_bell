import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  children: React.ReactNode;
}

function ThemeSafeAreaView({ children }: Props) {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={[]} style={styles.container}>
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ThemeSafeAreaView;
