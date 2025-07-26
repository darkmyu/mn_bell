import { alarms } from '@/db/schema';
import { Alarm, AlarmCreate, AlarmUpdate } from '@/db/types/alarm';
import { useDatabaseContext } from '@/hooks/use-database-context';
import dayjs from 'dayjs';
import { eq } from 'drizzle-orm';

export const useAlarmService = () => {
  const db = useDatabaseContext();

  const getAlarms = async (): Promise<Alarm[]> => {
    return await db.select().from(alarms);
  };

  const getAlarm = async (id: number): Promise<Alarm> => {
    const result = await db.select().from(alarms).where(eq(alarms.id, id));
    return result[0];
  };

  const createAlarm = async (alarm: AlarmCreate): Promise<Alarm> => {
    const result = await db.insert(alarms).values(alarm).returning();
    return result[0];
  };

  const updateAlarm = async (id: number, alarm: AlarmUpdate): Promise<Alarm> => {
    const updatedAlarm = {
      ...alarm,
      updatedAt: dayjs().toString(),
    };

    const result = await db.update(alarms).set(updatedAlarm).where(eq(alarms.id, id)).returning();
    return result[0];
  };

  const deleteAlarm = async (id: number): Promise<void> => {
    await db.delete(alarms).where(eq(alarms.id, id));
  };

  return {
    getAlarms,
    getAlarm,
    createAlarm,
    updateAlarm,
    deleteAlarm,
  };
};
