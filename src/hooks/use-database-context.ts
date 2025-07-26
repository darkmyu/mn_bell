import * as schema from '@/db/schema';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useSQLiteContext } from 'expo-sqlite';

export const useDatabaseContext = () => {
  const db = useSQLiteContext();
  const drizzleDb = drizzle(db, { schema });

  return drizzleDb;
};
