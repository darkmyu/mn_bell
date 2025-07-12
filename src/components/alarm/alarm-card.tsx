import Toggle from '@/components/common/toggle';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { StyleSheet, useUnistyles } from 'react-native-unistyles';

function AlarmCard() {
  const { theme } = useUnistyles();
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.content}>
          <View style={styles.topic}>
            <FontAwesome6 name="bowl-food" size={14} color={theme.colors.primary} />
            <Text style={styles.subject}>식사</Text>
          </View>
          <Text style={styles.time}>08:00</Text>
        </View>
        <Toggle value={isActive} onValueChange={(value) => setIsActive(value)} />
      </View>
      <View style={styles.tags}>
        <View style={styles.tag}>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <Text style={styles.label}>매일</Text>
        </View>
        <View style={styles.tag}>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <Text style={styles.label}>아카나</Text>
        </View>
        <View style={styles.tag}>
          <Feather name="calendar" size={14} color={theme.colors.content} />
          <Text style={styles.label}>20g</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    gap: 12,
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.gray1,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    gap: 4,
  },
  topic: {
    flexDirection: 'row',
    gap: 4,
  },
  subject: {
    fontSize: 12,
    fontFamily: theme.fonts.bold,
    color: theme.colors.primary,
  },
  time: {
    fontSize: 32,
    fontFamily: theme.fonts.bold,
    color: theme.colors.content,
  },
  tags: {
    flexDirection: 'row',
    gap: 8,
  },
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  label: {
    color: theme.colors.content,
    fontFamily: theme.fonts.semiBold,
  },
}));

export default AlarmCard;
