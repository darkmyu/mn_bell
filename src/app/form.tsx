import AlarmRepeatSelector from '@/components/alarm/AlarmRepeatSelector';
import AlarmSummary from '@/components/alarm/AlarmSummary';
import AlarmTimeSelector from '@/components/alarm/AlarmTimeSelector';
import { useAlarmCreateForm } from '@/hooks/forms/alarm';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

export default function FormScreen() {
  const methods = useAlarmCreateForm();

  return (
    <FormProvider {...methods}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        <AlarmSummary />
        <AlarmTimeSelector />
        <AlarmRepeatSelector />
      </ScrollView>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 24,
    marginVertical: 32,
    marginHorizontal: 16,
  },
});
