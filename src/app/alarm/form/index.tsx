import AlarmOptionsForm from '@/components/alarm/form/alarm-options-form';
import AlarmSummaryForm from '@/components/alarm/form/alarm-summary-form';
import AlarmTimeForm from '@/components/alarm/form/alarm-time-form';
import Button from '@/components/common/button';
import Spacer from '@/components/common/spacer';
import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native-unistyles';

export default function AlarmFormScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={null}
        renderItem={null}
        ListEmptyComponent={
          <View style={styles.form}>
            <AlarmSummaryForm />
            <AlarmTimeForm />
            <AlarmOptionsForm />
            <Spacer height={4000} />
          </View>
        }
      />
      <View style={styles.floating}>
        <Button title="저장하기" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
