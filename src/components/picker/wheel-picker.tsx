import WheelPickerItem from '@/components/picker/wheel-picker-item';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  scrollTo,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
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

const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

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
  const scrollIndex = useSharedValue(0);
  const scrollViewRef = useAnimatedRef<ScrollView>();

  const containerHeight = itemHeight * itemVisibleCount;
  const contentPaddingVertical = (containerHeight - itemHeight) / 2;

  const initialData = infiniteScroll ? Array(3).fill(data).flat() : data;

  const selectedIndex = data.indexOf(value);
  const validationIndex = selectedIndex > -1 ? selectedIndex : 0;
  const initialScrollPosition = infiniteScroll
    ? (Math.floor(3 / 2) * data.length + validationIndex) * itemHeight
    : validationIndex * itemHeight;

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
      scrollIndex.value = Math.round(event.contentOffset.y / itemHeight);
    },
    onEndDrag: (event) => {
      const targetIndex = Math.round(event.contentOffset.y / itemHeight);
      const targetOffset = targetIndex * itemHeight;

      if (scrollViewRef.current) {
        scrollTo(scrollViewRef, 0, targetOffset, true);
      }
    },
    onMomentumEnd: (event) => {
      const index = Math.round(event.contentOffset.y / itemHeight);
      const originalValue = data[index % data.length];
      if (originalValue !== undefined) {
        runOnJS(onValueChange)(originalValue);
      }

      if (infiniteScroll) {
        const length = data.length;
        if (index < length || index >= 2 * length) {
          const newIndex = length + (index % length);
          const newOffset = newIndex * itemHeight;
          scrollTo(scrollViewRef, 0, newOffset, false);
        }
      }
    },
  });

  const handleLayout = () => {
    scrollY.value = initialScrollPosition;
    scrollViewRef.current?.scrollTo({ y: initialScrollPosition, animated: false });
  };

  return (
    <AnimatedScrollView
      ref={scrollViewRef}
      onScroll={handleScroll}
      onLayout={handleLayout}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={itemHeight}
      style={styles.container(containerHeight)}
      contentContainerStyle={[styles.contentContainer(contentPaddingVertical), contentContainerStyle]}
    >
      {initialData.map((item, index) => (
        <WheelPickerItem key={index} label={item} index={index} scrollY={scrollY} itemHeight={itemHeight} />
      ))}
    </AnimatedScrollView>
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
