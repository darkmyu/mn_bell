import { useEffect } from 'react';
import { Animated, useAnimatedValue } from 'react-native';
import { useTheme } from 'styled-components/native';
import * as S from './Toggle.styles';

interface Props {
  value: boolean;
  onValueChange: (value: boolean) => void;
  trackWidth?: number;
  trackHeight?: number;
  thumbSize?: number;
}

const DEFAULT_TRACK_WIDTH = 52;
const DEFAULT_TRACK_HEIGHT = 28;
const DEFAULT_THUMB_SIZE = 24;

function Toggle({
  value,
  onValueChange,
  trackWidth = DEFAULT_TRACK_WIDTH,
  trackHeight = DEFAULT_TRACK_HEIGHT,
  thumbSize = DEFAULT_THUMB_SIZE,
}: Props) {
  const theme = useTheme();
  const animatedValue = useAnimatedValue(value ? 1 : 0);

  const internalPadding = (trackHeight - thumbSize) / 2;
  const thumbPositionOff = internalPadding;
  const thumbPositionOn = trackWidth - thumbSize - internalPadding;

  const trackColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.gray5, theme.colors.primary],
  });

  const thumbColor = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [theme.colors.white, theme.colors.white],
  });

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [thumbPositionOff, thumbPositionOn],
  });

  const handlePress = () => {
    onValueChange(!value);
  };

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [value, animatedValue]);

  return (
    <S.Pressable width={trackWidth} height={trackHeight} onPress={handlePress}>
      <S.Track width={trackWidth} height={trackHeight} style={{ backgroundColor: trackColor }}>
        <S.Thumb
          width={thumbSize}
          height={thumbSize}
          style={{
            backgroundColor: thumbColor,
            transform: [{ translateX: thumbTranslateX }],
          }}
        />
      </S.Track>
    </S.Pressable>
  );
}

export default Toggle;
