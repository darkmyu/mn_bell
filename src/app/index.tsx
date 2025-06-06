import AlarmHeader from '@/components/alarm/AlarmHeader';
import AlarmList from '@/components/alarm/AlarmList';
import AlarmFloating from '@/components/alarm/AlarmFloating';

export default function HomeScreen() {
  return (
    <>
      <AlarmHeader />
      <AlarmList />
      <AlarmFloating />
    </>
  );
}
