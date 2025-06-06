import React from 'react';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import { ITEM_HEIGHT } from '@/components/picker/TimePicker';

interface Props {
  label: string;
  index: number;
  scrollY: SharedValue<number>;
}

function TimePickerItem({ label, index, scrollY }: Props) {
  const animatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      (index - 2) * ITEM_HEIGHT,
      (index - 1) * ITEM_HEIGHT,
      index * ITEM_HEIGHT,
      (index + 1) * ITEM_HEIGHT,
      (index + 2) * ITEM_HEIGHT,
    ];

    const opacity = interpolate(scrollY.value, inputRange, [0.4, 0.4, 1, 0.4, 0.4], Extrapolation.CLAMP);

    return {
      opacity,
    };
  });

  return (
    <Animated.View style={[styles.container(ITEM_HEIGHT), animatedStyle]}>
      <Text style={styles.label}>{label}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: (height: number) => ({
    height,
    alignItems: 'center',
    justifyContent: 'center',
  }),
  label: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
  },
}));

export default TimePickerItem;
