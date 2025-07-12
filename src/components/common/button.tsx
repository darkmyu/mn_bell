import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Pressable, Text } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

interface Props {
  title: string;
  onPress?: () => void;
  startIcon?: React.ReactNode;
  afterIcon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

function Button({ title, onPress: handlePress, startIcon, afterIcon, buttonStyle, titleStyle }: Props) {
  return (
    <Pressable style={({ pressed }) => [styles.pressable(pressed), buttonStyle]} onPress={handlePress}>
      {startIcon}
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      {afterIcon}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  pressable: (pressed: boolean) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.secondary,
    opacity: pressed ? 0.75 : 1,
  }),
  title: {
    fontFamily: theme.fonts.bold,
    color: theme.colors.white,
  },
}));

export default Button;
