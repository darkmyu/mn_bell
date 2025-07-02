import { useAlarmCreateFormContext } from '@/hooks/forms/alarm';
import dayjs from 'dayjs';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';
import WheelPicker from '../picker/WheelPicker';

function AlarmTimeSelector() {
  const { watch, setValue } = useAlarmCreateFormContext();

  const time = watch('time');

  const handleHourChange = (value: string) => {
    setValue('time', dayjs(time).set('hour', parseInt(value)).toDate());
  };

  const handleMinuteChange = (value: string) => {
    setValue('time', dayjs(time).set('minute', parseInt(value)).toDate());
  };

  return (
    <View style={styles.container}>
      <WheelPicker
        data={Array.from({ length: 24 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        value={dayjs(time).format('HH')}
        onValueChange={handleHourChange}
        contentContainerStyle={{ alignItems: 'flex-end', paddingRight: 32 }}
        infiniteScroll
      />
      <WheelPicker
        data={Array.from({ length: 60 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        value={dayjs(time).format('mm')}
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

export default AlarmTimeSelector;
