import WheelPickerItem from '@/components/picker/wheel-picker-item';
import React, { useRef } from 'react';
import { ListRenderItemInfo, StyleProp, ViewStyle } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  data: string[];
  value: string;
  onValueChange: (value: string) => void;
  itemHeight?: number;
  itemVisibleCount?: number;
  infiniteScroll?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<string>);

function WheelPicker({
  data,
  value,
  onValueChange,
  itemHeight = 40,
  itemVisibleCount = 5,
  infiniteScroll,
  contentContainerStyle,
}: Props) {
  const scrollY = useSharedValue(0);
  const flatListRef = useRef<FlatList<string>>(null);

  const initialData = infiniteScroll ? Array(10).fill(data).flat() : data;
  const containerHeight = itemHeight * itemVisibleCount;
  const contentPaddingVertical = (containerHeight - itemHeight) / 2;

  const selectedIndex = data.indexOf(value);
  const validationIndex = selectedIndex > -1 ? selectedIndex : 0;
  const initialScrollIndex = infiniteScroll ? Math.floor(10 / 2) * data.length + validationIndex : validationIndex;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
    onMomentumEnd: (event) => {
      const index = Math.round(event.contentOffset.y / itemHeight);
      const selectedValue = initialData[index];

      if (selectedValue !== undefined) {
        runOnJS(onValueChange)(selectedValue);
      }
    },
  });

  const getItemLayout = (_: unknown, index: number) => ({
    length: itemHeight,
    offset: itemHeight * index,
    index,
  });

  const renderItem = ({ item, index }: ListRenderItemInfo<string>) => {
    return <WheelPickerItem label={item} index={index} scrollY={scrollY} itemHeight={itemHeight} />;
  };

  return (
    <AnimatedFlatList
      ref={flatListRef}
      data={initialData}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      onScroll={handleScroll}
      getItemLayout={getItemLayout}
      initialScrollIndex={initialScrollIndex}
      snapToInterval={itemHeight}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
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
