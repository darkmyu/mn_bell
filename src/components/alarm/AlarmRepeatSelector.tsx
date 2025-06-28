import { useAlarmCreateFormContext } from '@/hooks/forms/alalrm';
import { AlarmRepeat, AlarmRepeatType } from '@/services/alarm/types';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

interface RepeatItem {
  label: string;
  value: AlarmRepeatType;
}

const repeatItems: RepeatItem[] = [
  { label: '매일', value: AlarmRepeat.DAILY },
  { label: '매주', value: AlarmRepeat.WEEKLY },
  { label: '매월', value: AlarmRepeat.MONTHLY },
];

function AlarmRepeatSelector() {
  const { setValue, watch } = useAlarmCreateFormContext();

  const handleRepeatPress = (repeat: AlarmRepeatType) => {
    setValue('repeat', repeat);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {repeatItems.map((item) => {
          const isSelected = watch('repeat') === item.value;

          return (
            <Pressable key={item.value} style={styles.item(isSelected)} onPress={() => handleRepeatPress(item.value)}>
              <Text style={styles.text(isSelected)}>{item.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
  },
  item: (isSelected: boolean) => ({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: isSelected ? theme.colors.gray3 : undefined,
  }),
  text: (isSelected: boolean) => ({
    fontSize: 14,
    fontFamily: isSelected ? theme.fonts.semiBold : theme.fonts.medium,
    color: isSelected ? theme.colors.content : theme.colors.gray10,
  }),
}));

export default AlarmRepeatSelector;
