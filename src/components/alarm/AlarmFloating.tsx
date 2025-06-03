import { Pressable, Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

function AlarmFloating() {
  const { theme } = useUnistyles();

  return (
    <View style={styles.container}>
      <View style={styles.backdrop}>
        <Pressable style={({ pressed }) => styles.floating(pressed)}>
          <FontAwesome5 name="plus" size={16} color={theme.colors.white} />
          <Text style={styles.text}>빵이 일정 생성</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  backdrop: {
    width: '100%',
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
  },
  floating: (pressed: boolean) => ({
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 12,
    backgroundColor: theme.colors.secondary,
    opacity: pressed ? 0.75 : 1,
  }),
  text: {
    fontSize: 16,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
}));

export default AlarmFloating;
