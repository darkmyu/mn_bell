import AlarmRepeatSelector from '@/components/alarm/AlarmRepeatSelector';
import AlarmSummary from '@/components/alarm/AlarmSummary';
import AlarmTimeSelector from '@/components/alarm/AlarmTimeSelector';
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
        <AlarmSummary />
        <AlarmTimeSelector />
        <AlarmRepeatSelector />

        <Button
          title="Toggle Theme"
          onPress={() => UnistylesRuntime.setTheme(UnistylesRuntime.themeName === 'light' ? 'dark' : 'light')}
        />
      </View>
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
