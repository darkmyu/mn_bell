import { AlarmRepeatValue } from '@/db/types';
import { useAlarmCreateFormContext } from '@/hooks/forms/alarm';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

dayjs.locale('ko');

function AlarmSummary() {
  const { theme } = useUnistyles();
  const { watch } = useAlarmCreateFormContext();

  const time = watch('time');
  const repeat = watch('repeat');
  const repeatLabel = AlarmRepeatValue[repeat];
  const formattedTime = dayjs(time).format('A HH시 mm분');

  return (
    <View style={styles.container}>
      <MaterialIcons name="notifications-active" size={16} color={theme.colors.content} />
      <Text style={styles.text}>{`${repeatLabel} ${formattedTime}에 알람이 울립니다.`}</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
    color: theme.colors.content,
  },
}));

export default AlarmSummary;
