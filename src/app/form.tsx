import AlarmTimePicker from '@/components/alarm/AlarmTimePicker';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

export default function FormScreen() {
  return (
    <View style={styles.container}>
      <AlarmTimePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
