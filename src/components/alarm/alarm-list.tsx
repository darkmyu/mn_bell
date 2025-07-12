import AlarmCard from '@/components/alarm/alarm-card';
import { FlatList } from 'react-native';

function AlarmList() {
  return (
    <FlatList
      data={Array.from({ length: 30 }, (i) => i)}
      renderItem={() => <AlarmCard />}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 16, padding: 16, paddingBottom: 160 }}
    />
  );
}

export default AlarmList;
