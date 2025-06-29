import { useAlarmCreateFormContext } from '@/hooks/forms/alalrm';
import { AlarmRepeat, AlarmRepeatType } from '@/services/alarm/types';
import { useEffect } from 'react';
import { LayoutChangeEvent, Pressable, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface RepeatItem {
  label: string;
  value: AlarmRepeatType;
}

const repeatItems: RepeatItem[] = [
  { label: '매일', value: AlarmRepeat.DAILY },
  { label: '매주', value: AlarmRepeat.WEEKLY },
  { label: '매월', value: AlarmRepeat.MONTHLY },
];

function AlarmRepeatSelector() {
  const { setValue, watch } = useAlarmCreateFormContext();

  const itemWidth = useSharedValue(0);
  const translateX = useSharedValue(0);

  const selectedRepeat = watch('repeat');
  const selectedIndex = repeatItems.findIndex((item) => item.value === selectedRepeat);

  const backdropAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleLayout = (event: LayoutChangeEvent) => {
    itemWidth.value = event.nativeEvent.layout.width;
    translateX.value = selectedIndex * event.nativeEvent.layout.width;
  };

  const handleRepeatPress = (repeat: AlarmRepeatType) => {
    setValue('repeat', repeat);
  };

  useEffect(() => {
    translateX.value = withSpring(selectedIndex * itemWidth.value, { stiffness: 200, damping: 20 });
  }, [selectedIndex, itemWidth]);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.backdrop, backdropAnimatedStyle]} />

        {repeatItems.map((item) => {
          const isSelected = watch('repeat') === item.value;

          return (
            <Pressable
              key={item.value}
              style={styles.item}
              onPress={() => handleRepeatPress(item.value)}
              onLayout={handleLayout}
            >
              <Text style={styles.text(isSelected)}>{item.label}</Text>
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
    width: `${100 / repeatItems.length}%`,
    borderRadius: 16,
    backgroundColor: theme.colors.gray3,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
  },
  text: (isSelected: boolean) => ({
    fontSize: 14,
    fontFamily: isSelected ? theme.fonts.semiBold : theme.fonts.medium,
    color: isSelected ? theme.colors.content : theme.colors.gray10,
  }),
}));

export default AlarmRepeatSelector;
