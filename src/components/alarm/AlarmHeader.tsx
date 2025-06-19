import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native-unistyles';

function AlarmHeader() {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.date}>2025-05-16</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: '100%',
    backgroundColor: 'gray',
  },
  date: {
    fontSize: 15,
    fontFamily: theme.fonts.bold,
    color: theme.colors.content,
  },
}));

export default AlarmHeader;
