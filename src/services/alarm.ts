import { Alarm } from '@/types/alarm';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ALARM_STORAGE_KEY = 'alarm_storage_key';

export const setAlarms = async (alarms: Alarm[]): Promise<void> => {
  try {
    const json = JSON.stringify(alarms);
    await AsyncStorage.setItem(ALARM_STORAGE_KEY, json);
  } catch (e) {
    throw e;
  }
};

export const getAlarms = async (): Promise<Alarm[]> => {
  try {
    const json = await AsyncStorage.getItem(ALARM_STORAGE_KEY);

    return json !== null ? JSON.parse(json) : [];
  } catch (e) {
    throw e;
  }
};
