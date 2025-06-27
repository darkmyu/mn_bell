import AlarmTimePicker from '@/components/alarm/AlarmTimePicker';
import { useAlarmCreateForm } from '@/hooks/forms/alalrm';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function FormScreen() {
  const methods = useAlarmCreateForm();

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <AlarmTimePicker />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
