import { useColorScheme } from 'nativewind';
import { Switch, Text, View } from 'react-native';

export default function Index() {
  const { colorScheme, setColorScheme } = useColorScheme();

  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-black dark:text-white">Edit app/index.tsx to edit this screen.</Text>
      <Switch
        value={colorScheme === 'dark'}
        onValueChange={() => setColorScheme(colorScheme === 'light' ? 'dark' : 'light')}
      />
    </View>
  );
}
