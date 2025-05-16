import { FlatList } from 'react-native';
import AlarmCard from '../AlarmCard';

function AlarmList() {
  return (
    <FlatList
      data={Array.from({ length: 30 }, (i) => i)}
      renderItem={() => <AlarmCard />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, padding: 16, paddingBottom: 144 }}
    />
  );
}

export default AlarmList;
