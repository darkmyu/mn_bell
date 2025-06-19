import AlarmFloating from '@/components/alarm/AlarmFloating';
import AlarmHeader from '@/components/alarm/AlarmHeader';
import AlarmList from '@/components/alarm/AlarmList';
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
