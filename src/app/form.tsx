import AlarmMediaSelector from '@/components/alarm/AlarmMediaSelector';
import AlarmRepeatSelector from '@/components/alarm/AlarmRepeatSelector';
import AlarmSummary from '@/components/alarm/AlarmSummary';
import AlarmTimeSelector from '@/components/alarm/AlarmTimeSelector';
import Button from '@/components/common/Button';
import { useAlarmCreateForm } from '@/hooks/forms/alarm';
import React from 'react';
import { FormProvider } from 'react-hook-form';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

export default function FormScreen() {
  const methods = useAlarmCreateForm();

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>
          <AlarmSummary />
          <AlarmTimeSelector />
          <AlarmRepeatSelector />
          <AlarmMediaSelector />
        </ScrollView>
        <View style={styles.floating}>
          <Button title="저장하기" onPress={() => {}} />
        </View>
      </View>
    </FormProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    gap: 24,
    marginTop: 32,
    marginHorizontal: 16,
    paddingBottom: 160,
  },
  floating: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 16,
  },
});
