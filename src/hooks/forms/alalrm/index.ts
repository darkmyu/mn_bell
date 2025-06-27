import { ALARM_CATEGORY, ALARM_REPEAT } from '@/services/alarm/types';
import { zodResolver } from '@hookform/resolvers/zod';
import dayjs from 'dayjs';
import { useForm, useFormContext } from 'react-hook-form';
import * as z from 'zod/v4';
import { AlarmCreateForm } from './types';

export const useAlarmCreateForm = () => {
  return useForm<AlarmCreateForm>({
    resolver: zodResolver(
      z.object({
        time: z.date(),
        title: z.string().optional(),
        repeat: z.enum(ALARM_REPEAT),
        category: z.enum(ALARM_CATEGORY).optional(),
      }),
    ),
    defaultValues: {
      time: dayjs().toDate(),
      repeat: ALARM_REPEAT.DAILY,
    },
  });
};

export const useAlarmCreateFormContext = () => {
  return useFormContext<AlarmCreateForm>();
};
