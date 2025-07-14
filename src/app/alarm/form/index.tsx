import AlarmOptionsForm from '@/components/alarm/form/alarm-options-form';
import AlarmSummaryForm from '@/components/alarm/form/alarm-summary-form';
import AlarmTimeForm from '@/components/alarm/form/alarm-time-form';
import Button from '@/components/common/button';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

export default function AlarmFormScreen() {
  return (
    <>
      <FlatList
        data={[]}
        renderItem={null}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.form}>
            <AlarmSummaryForm />
            <AlarmTimeForm />
            <AlarmOptionsForm />
          </View>
        )}
      />
      <View style={styles.floating}>
        <Button title="저장하기" onPress={() => {}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  form: {
    gap: 16,
    paddingTop: 32,
    paddingBottom: 160,
    paddingHorizontal: 16,
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
