import dayjs from 'dayjs';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const alarms = sqliteTable('alarms', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  time: text('time').notNull(),
  title: text('title'),
  repeat: text('repeat', { enum: ['DAILY', 'WEEKLY', 'MONTHLY'] })
    .notNull()
    .default('DAILY'),
  category: text('category', { enum: ['FOOD', 'WALK'] }),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().default(dayjs().toISOString()),
  updatedAt: text('updated_at').notNull().default(dayjs().toISOString()),
});

export type AlarmSchema = typeof alarms.$inferSelect;
export type AlarmInsert = typeof alarms.$inferInsert;
