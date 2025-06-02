import Header from '@/components/layout/Header';
import AlarmList from '@/components/alarm/AlarmList';
import AlarmFloating from '@/components/alarm/AlarmFloating';

export default function HomeScreen() {
  return (
    <>
      <Header />
      <AlarmList />
      <AlarmFloating />
    </>
  );
}
