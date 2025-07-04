import migrations from '@/drizzle/migrations';
import { drizzle } from 'drizzle-orm/expo-sqlite';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { useDrizzleStudio } from 'expo-drizzle-studio-plugin';
import { openDatabaseSync, SQLiteProvider } from 'expo-sqlite';
import { Suspense } from 'react';
import { ActivityIndicator } from 'react-native';

interface Props {
  children: React.ReactNode;
}

const DATABASE_NAME = 'mn_bell.db';

const expo = openDatabaseSync(DATABASE_NAME);
const db = drizzle(expo);

function DatabaseProvider({ children }: Props) {
  useMigrations(db, migrations);
  useDrizzleStudio(expo);

  return (
    <Suspense fallback={<ActivityIndicator size="large" />}>
      <SQLiteProvider databaseName={DATABASE_NAME} options={{ enableChangeListener: true }} useSuspense>
        {children}
      </SQLiteProvider>
    </Suspense>
  );
}

export default DatabaseProvider;
