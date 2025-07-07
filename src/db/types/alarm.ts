import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
import * as z from 'zod/v4';
import { alarms } from '../schema';

export const AlarmRepeatKey = {
  DAILY: 'DAILY',
  WEEKLY: 'WEEKLY',
  MONTHLY: 'MONTHLY',
} as const;

export const AlarmRepeatValue = {
  DAILY: '매일',
  WEEKLY: '매주',
  MONTHLY: '매월',
} as const;

export const AlarmCategoryKey = {
  FOOD: 'FOOD',
  WALK: 'WALK',
} as const;

export const AlarmCategoryValue = {
  FOOD: '식사',
  WALK: '산책',
} as const;

export const alarmSelectSchema = createSelectSchema(alarms);
export const alarmInsertSchema = createInsertSchema(alarms);
export const alarmCreateSchema = alarmInsertSchema.omit({ id: true, isActive: true, createdAt: true, updatedAt: true });
export const alarmUpdateSchema = alarmInsertSchema.omit({ id: true, createdAt: true, updatedAt: true });

export type Alarm = z.infer<typeof alarmSelectSchema>;
export type AlarmCreate = z.infer<typeof alarmCreateSchema>;
export type AlarmUpdate = z.infer<typeof alarmUpdateSchema>;
export type AlarmRepeat = (typeof AlarmRepeatKey)[keyof typeof AlarmRepeatKey];
export type AlarmCategory = (typeof AlarmCategoryKey)[keyof typeof AlarmCategoryKey];
