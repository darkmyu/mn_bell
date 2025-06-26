import dayjs from 'dayjs';
import { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import WheelPicker from '../picker/WheelPicker';

function AlarmTimePicker() {
  const [time, setTime] = useState(dayjs());

  const handleHourChange = (value: string) => {
    setTime(time.set('hour', parseInt(value)));
  };

  const handleMinuteChange = (value: string) => {
    setTime(time.set('minute', parseInt(value)));
  };

  return (
    <View style={styles.container}>
      <WheelPicker
        data={Array.from({ length: 24 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        value={time.format('HH')}
        onValueChange={handleHourChange}
        contentContainerStyle={{ alignItems: 'flex-end', paddingRight: 32 }}
        infiniteScroll
      />
      <WheelPicker
        data={Array.from({ length: 60 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        value={time.format('mm')}
        onValueChange={handleMinuteChange}
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
