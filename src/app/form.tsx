import TimePicker from '@/components/picker/TimePicker';
import { View } from 'react-native';

export default function FormScreen() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TimePicker
        values={Array.from({ length: 24 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        onValueChange={(value) => {}}
      />
      <TimePicker
        values={Array.from({ length: 60 }, (_, index) => index).map((i) => i.toString().padStart(2, '0'))}
        onValueChange={(value) => {}}
      />
    </View>
  );
}
