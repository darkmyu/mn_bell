import React from 'react';
import { ListRenderItemInfo } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';
import TimePickerItem from '@/components/picker/TimePickerItem';

interface Props {
  values: string[];
  onValueChange: (value: string) => void;
}

export const ITEM_HEIGHT = 40;
export const ITEM_VISIBLE_COUNT = 5;

function TimePicker({ values, onValueChange }: Props) {
  const scrollY = useSharedValue(0);

  const containerHeight = ITEM_HEIGHT * ITEM_VISIBLE_COUNT;
  const contentPaddingVertical = (containerHeight - ITEM_HEIGHT) / 2;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    return <TimePickerItem label={item} index={index} scrollY={scrollY} />;
  };

  return (
    <Animated.FlatList
      data={values}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onScroll={handleScroll}
      snapToInterval={ITEM_HEIGHT}
      showsVerticalScrollIndicator={false}
      style={styles.container(containerHeight)}
      contentContainerStyle={styles.contentContainer(contentPaddingVertical)}
    />
  );
}

const styles = StyleSheet.create({
  container: (height: number) => ({
    height,
  }),
  contentContainer: (paddingVertical: number) => ({
    paddingVertical,
  }),
});

export default TimePicker;
