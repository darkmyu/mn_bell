import AlarmRepeatSelector from '@/components/alarm/AlarmRepeatSelector';
import AlarmTimePicker from '@/components/alarm/AlarmTimePicker';
import { useAlarmCreateForm } from '@/hooks/forms/alalrm';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { Button, View } from 'react-native';
import { StyleSheet, UnistylesRuntime } from 'react-native-unistyles';

export default function FormScreen() {
  const methods = useAlarmCreateForm();

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Button
          title="Toggle Theme"
          onPress={() => UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')}
        />
        <AlarmTimePicker />
        <AlarmRepeatSelector />
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    margin: 16,
  },
});
