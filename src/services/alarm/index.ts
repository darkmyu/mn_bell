import { AlarmInsert, AlarmSchema, alarms } from '@/db/schema';
import { useDatabaseContext } from '@/hooks/useDatabaseContext';
import { eq } from 'drizzle-orm';

export const useAlarmService = () => {
  const db = useDatabaseContext();

  const getAlarms = async (): Promise<AlarmSchema[]> => {
    return await db.select().from(alarms);
  };

  const getAlarm = async (id: number): Promise<AlarmSchema> => {
    const result = await db.select().from(alarms).where(eq(alarms.id, id));
    return result[0];
  };

  const createAlarm = async (
    alarm: Omit<AlarmInsert, 'id' | 'isActive' | 'createdAt' | 'updatedAt'>,
  ): Promise<AlarmSchema> => {
    const result = await db.insert(alarms).values(alarm).returning();
    return result[0];
  };

  const updateAlarm = async (
    id: number,
    alarm: Partial<Omit<AlarmInsert, 'id' | 'createdAt' | 'updatedAt'>>,
  ): Promise<AlarmSchema> => {
    const updatedAlarm = {
      ...alarm,
      updatedAt: new Date().toISOString(),
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
