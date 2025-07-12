import React from 'react';
import { Text } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  label: string;
  index: number;
  scrollY: SharedValue<number>;
  itemHeight: number;
}

function WheelPickerItem({ label, index, scrollY, itemHeight }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * itemHeight,
      (index - 1) * itemHeight,
      index * itemHeight,
      (index + 1) * itemHeight,
      (index + 2) * itemHeight,
    ];

    const opacity = interpolate(scrollY.value, inputRange, [0.4, 0.4, 1, 0.4, 0.4], Extrapolation.CLAMP);

    return {
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.container(itemHeight), animatedStyle]}>
      <Text style={styles.label}>{label}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: (height: number) => ({
    height,
  }),
  label: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
    color: theme.colors.content,
  },
}));

export default WheelPickerItem;
