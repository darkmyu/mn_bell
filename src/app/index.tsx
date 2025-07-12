import AlarmFloating from '@/components/alarm/alarm-floating';
import AlarmHeader from '@/components/alarm/alarm-header';
import AlarmList from '@/components/alarm/alarm-list';
import React from 'react';

export default function HomeScreen() {
  return (
    <>
      <AlarmHeader />
      <AlarmList />
      <AlarmFloating />
    </>
  );
}
