import { AlarmRepeat, AlarmRepeatKey, AlarmRepeatValue } from '@/db/types';
import { useAlarmCreateFormContext } from '@/hooks/forms/alarm';
import { useEffect } from 'react';
import { LayoutChangeEvent, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

const repeats: AlarmRepeat[] = Object.values(AlarmRepeatKey);

function AlarmRepeatSelector() {
  const { setValue, watch } = useAlarmCreateFormContext();

  const itemWidth = useSharedValue(0);
  const translateX = useSharedValue(0);

  const selectedRepeat = watch('repeat');
  const selectedIndex = repeats.findIndex((repeat) => repeat === selectedRepeat);

  const backdropAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    itemWidth.value = event.nativeEvent.layout.width;
    translateX.value = selectedIndex * event.nativeEvent.layout.width;
  };

  const handleRepeatPress = (repeat: AlarmRepeat) => {
    setValue('repeat', repeat);
  };

  useEffect(() => {
    translateX.value = withSpring(selectedIndex * itemWidth.value, { stiffness: 200, damping: 20 });
  }, [selectedIndex, itemWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} />

        {repeats.map((repeat) => {
          const isSelected = repeat === selectedRepeat;

          return (
            <Pressable
              key={repeat}
              style={styles.item}
              onPress={() => handleRepeatPress(repeat)}
              onLayout={handleLayout}
            >
              <Text style={styles.text(isSelected)}>{AlarmRepeatValue[repeat]}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
  },
  backdrop: {
    position: 'absolute',
    inset: 0,
    width: `${100 / repeats.length}%`,
    borderRadius: 16,
    backgroundColor: theme.colors.primary,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  text: (isSelected: boolean) => ({
    fontSize: 15,
    fontFamily: isSelected ? theme.fonts.bold : theme.fonts.medium,
    color: isSelected ? theme.colors.white : theme.colors.gray10,
  }),
}));

export default AlarmRepeatSelector;
