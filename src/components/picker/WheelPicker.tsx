import WheelPickerItem from '@/components/picker/WheelPickerItem';
import React, { useRef } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedReaction,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  values: string[];
  onValueChange: (value: string) => void;
  itemHeight?: number;
  itemVisibleCount?: number;
  infiniteScroll?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

function WheelPicker({
  values,
  onValueChange,
  contentContainerStyle,
  itemHeight = 40,
  itemVisibleCount = 5,
  infiniteScroll,
}: Props) {
  const scrollY = useSharedValue(0);
  const isMounted = useSharedValue(false);
  const flatListRef = useRef<Animated.FlatList<string>>(null);

  const data = infiniteScroll ? Array(100).fill(values).flat() : values;
  const initialScrollIndex = Math.floor(100 / 2) * values.length;
  const containerHeight = itemHeight * itemVisibleCount;
  const contentPaddingVertical = (containerHeight - itemHeight) / 2;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
    onMomentumEnd: (event) => {
      const index = Math.round(event.contentOffset.y / itemHeight);
      const selectedValue = data[index];

      if (selectedValue !== undefined) {
        runOnJS(onValueChange)(selectedValue);
      }
    },
  });

  const handleLayout = () => {
    isMounted.value = true;
  };

  const getItemLayout = (_: unknown, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ index, animated: false });
  };

  useAnimatedReaction(
    () => isMounted.value,
    (mounted) => {
      if (mounted && infiniteScroll) {
        runOnJS(scrollToIndex)(initialScrollIndex);
      }
    },
    [initialScrollIndex, infiniteScroll],
  );

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    return <WheelPickerItem label={item} index={index} scrollY={scrollY} itemHeight={itemHeight} />;
  };

  return (
    <Animated.FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onScroll={handleScroll}
      onLayout={handleLayout}
      getItemLayout={getItemLayout}
      snapToInterval={itemHeight}
      showsVerticalScrollIndicator={false}
      style={styles.container(containerHeight)}
      contentContainerStyle={[styles.contentContainer(contentPaddingVertical), contentContainerStyle]}
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

export default WheelPicker;
