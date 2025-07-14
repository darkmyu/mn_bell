import ThemeStack from '@/components/theme/theme-stack';
import { useAlarmCreateForm } from '@/hooks/forms/alarm';
import { FormProvider } from 'react-hook-form';

export default function AlarmFormLayout() {
  const methods = useAlarmCreateForm();

  return (
    <FormProvider {...methods}>
      <ThemeStack />
    </FormProvider>
  );
}
