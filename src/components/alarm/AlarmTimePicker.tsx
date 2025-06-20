import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import WheelPicker from '../picker/WheelPicker';

function AlarmTimePicker() {
  return (
    <View style={styles.container}>
      <WheelPicker
        values={Array.from({ length: 24 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        onValueChange={(value) => {}}
        contentContainerStyle={{ alignItems: 'flex-end', paddingRight: 32 }}
        infiniteScroll
      />
      <WheelPicker
        values={Array.from({ length: 60 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        onValueChange={(value) => {}}
        contentContainerStyle={{ alignItems: 'flex-start', paddingLeft: 32 }}
        infiniteScroll
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
}));

export default AlarmTimePicker;
