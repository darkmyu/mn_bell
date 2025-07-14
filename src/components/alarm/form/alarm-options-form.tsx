import Toggle from '@/components/common/toggle';
import { ROUTE_ALARM_FORM_REPEAT_SCREEN, ROUTE_ALARM_FORM_SOUND_SCREEN } from '@/constants/route';
import { useAlarmCreateFormContext } from '@/hooks/forms/alarm';
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

function AlarmOptionsForm() {
  const router = useRouter();
  const { theme } = useUnistyles();
  const {} = useAlarmCreateFormContext();

  return (
    <View style={styles.container}>
      <Pressable style={styles.wrapper} onPress={() => router.push(ROUTE_ALARM_FORM_REPEAT_SCREEN)}>
        <Text style={styles.label}>반복</Text>
        <View style={styles.item}>
          <Text style={styles.value}>매일</Text>
          <Feather name="chevron-right" size={14} color={theme.colors.content} />
        </View>
      </Pressable>
      <Pressable style={styles.wrapper} onPress={() => router.push(ROUTE_ALARM_FORM_SOUND_SCREEN)}>
        <Text style={styles.label}>사운드</Text>
        <View style={styles.item}>
          <Text style={styles.value}>Drum Bounce</Text>
          <Feather name="chevron-right" size={14} color={theme.colors.content} />
        </View>
      </Pressable>
      <View style={styles.wrapper}>
        <Text style={styles.label}>진동</Text>
        <Toggle value={true} onValueChange={() => {}} />
      </View>
      <Pressable style={styles.wrapper}>
        <Text style={styles.label}>알람 미루기</Text>
        <View style={styles.item}>
          <Text style={styles.value}>끔</Text>
          <Feather name="chevron-right" size={14} color={theme.colors.content} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: 32,
    paddingVertical: 28,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
    color: theme.colors.content,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  value: {
    fontSize: 13,
    fontFamily: theme.fonts.medium,
    color: theme.colors.content,
  },
}));

export default AlarmOptionsForm;
