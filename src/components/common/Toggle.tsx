import { useEffect } from 'react';
import { Pressable } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import { useAnimatedTheme } from 'react-native-unistyles/reanimated';

interface Props {
  value: boolean;
  onValueChange: (value: boolean) => void;
  trackWidth?: number;
  trackHeight?: number;
  thumbSize?: number;
}

function Toggle({ value, onValueChange, trackWidth = 52, trackHeight = 28, thumbSize = 24 }: Props) {
  const theme = useAnimatedTheme();
  const animatedValue = useSharedValue(value ? 1 : 0);

  const internalPadding = (trackHeight - thumbSize) / 2;
  const thumbPositionOff = internalPadding;
  const thumbPositionOn = trackWidth - thumbSize - internalPadding;

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      [theme.value.colors.gray5, theme.value.colors.primary],
    );

    return {
      backgroundColor,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const translateX = animatedValue.value * (thumbPositionOn - thumbPositionOff) + thumbPositionOff;

    const backgroundColor = interpolateColor(
      animatedValue.value,
      [0, 1],
      [theme.value.colors.white, theme.value.colors.white],
    );

    return {
      backgroundColor,
      transform: [{ translateX }],
    };
  });

  const handlePress = () => {
    onValueChange(!value);
  };

  useEffect(() => {
    animatedValue.value = withTiming(value ? 1 : 0, { duration: 200 });
  }, [value, animatedValue]);

  return (
    <Pressable style={styles.pressable(trackWidth, trackHeight)} onPress={handlePress}>
      <Animated.View style={[styles.track(trackWidth, trackHeight), trackAnimatedStyle]}>
        <Animated.View style={[styles.thumb(thumbSize, thumbSize), thumbAnimatedStyle]} />
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: (width: number, height: number) => ({
    width,
    height,
  }),
  track: (width: number, height: number) => ({
    width,
    height,
    borderRadius: height / 2,
    justifyContent: 'center',
  }),
  thumb: (width: number, height: number) => ({
    width,
    height,
    borderRadius: height / 2,
  }),
});

export default Toggle;
