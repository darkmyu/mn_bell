import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  width?: number;
  height?: number;
}

function Spacer({ width = 0, height = 0 }: Props) {
  return <View style={styles.spacer(width, height)} />;
}

const styles = StyleSheet.create({
  spacer: (width: number, height: number) => ({
    width,
    height,
  }),
});

export default Spacer;
