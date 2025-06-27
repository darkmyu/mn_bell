import { Alarm } from '@/services/alarm/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { v4 as uuidv4 } from 'uuid';

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

export const getAlarm = async (id: string): Promise<Alarm | null> => {
  try {
    const alarms = await getAlarms();
    return alarms.find((alarm) => alarm.id === id) ?? null;
  } catch (e) {
    throw e;
  }
};

export const createAlarm = async (request: Omit<Alarm, 'id' | 'isActive'>): Promise<Alarm> => {
  try {
    const alarms = await getAlarms();
    const alarm: Alarm = { ...request, id: uuidv4(), isActive: true };

    await setAlarms([...alarms, alarm]);
    return alarm;
  } catch (e) {
    throw e;
  }
};

export const updateAlarm = async (id: string, request: Partial<Omit<Alarm, 'id'>>): Promise<Alarm> => {
  try {
    const alarms = await getAlarms();
    const updatedAlarms = alarms.map((alarm) => (alarm.id === id ? { ...alarm, ...request } : alarm));

    await setAlarms(updatedAlarms);

    const alarm = updatedAlarms.find((alarm) => alarm.id === id);
    if (!alarm) throw new Error('Alarm not found');

    return alarm;
  } catch (e) {
    throw e;
  }
};

export const deleteAlarm = async (id: string): Promise<void> => {
  try {
    const alarms = await getAlarms();
    const updatedAlarms = alarms.filter((alarm) => alarm.id !== id);

    await setAlarms(updatedAlarms);
  } catch (e) {
    throw e;
  }
};
