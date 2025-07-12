import Feather from '@expo/vector-icons/Feather';
import { Pressable, Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import Toggle from '../common/toggle';

function AlarmMediaSelector() {
  const { theme } = useUnistyles();

  return (
    <Pressable style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>사운드</Text>
        <View style={styles.item}>
          <Text style={styles.value}>Drum Bounce</Text>
          <Feather name="chevron-right" size={14} color={theme.colors.content} />
        </View>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>진동</Text>
        <Toggle value={true} onValueChange={() => {}} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
  wrapper: {
    padding: 20,
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

export default AlarmMediaSelector;
