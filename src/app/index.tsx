import AlarmFloating from '@/components/alarm/AlarmFloating';
import AlarmList from '@/components/alarm/AlarmList';
import Header from '@/components/layout/Header';

export default function HomeScreen() {
  return (
    <>
      <Header />
      <AlarmList />
      <AlarmFloating />
    </>
  );
}
