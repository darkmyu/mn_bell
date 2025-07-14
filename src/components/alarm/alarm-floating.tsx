import { ROUTE_ALARM_FORM_SCREEN } from '@/constants/route';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';
import Button from '../common/button';

function AlarmFloating() {
  const router = useRouter();
  const { theme } = useUnistyles();

  const handlePressed = () => {
    router.push(ROUTE_ALARM_FORM_SCREEN);
  };

  return (
    <View style={styles.container}>
      <View style={styles.backdrop}>
        <Button
          title="빵이 일정 추가"
          onPress={handlePressed}
          startIcon={<FontAwesome5 name="plus" size={14} color={theme.colors.white} />}
        />
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
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 16,
    backgroundColor: theme.colors.background,
    boxShadow: `0 -10px 10px ${theme.colors.background}`,
  },
}));

export default AlarmFloating;
