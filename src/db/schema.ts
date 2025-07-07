import dayjs from 'dayjs';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const alarms = sqliteTable('alarms', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  time: text('time').notNull(),
  title: text('title'),
  repeat: text('repeat', { enum: ['DAILY', 'WEEKLY', 'MONTHLY'] }).notNull(),
  category: text('category', { enum: ['FOOD', 'WALK'] }),
  isActive: integer('is_active', { mode: 'boolean' }).notNull().default(true),
  createdAt: text('created_at').notNull().default(dayjs().toString()),
  updatedAt: text('updated_at').notNull().default(dayjs().toString()),
});
