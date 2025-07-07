import { AlarmCreate, AlarmRepeatKey, alarmCreateSchema } from '@/db/types';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { useForm, useFormContext } from 'react-hook-form';

export const useAlarmCreateForm = () => {
  return useForm<AlarmCreate>({
    resolver: zodResolver(alarmCreateSchema),
    defaultValues: {
      time: dayjs().toString(),
      repeat: AlarmRepeatKey.DAILY,
    },
  });
};

export const useAlarmCreateFormContext = () => {
  return useFormContext<AlarmCreate>();
};
