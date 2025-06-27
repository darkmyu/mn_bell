import { Alarm } from '@/services/alarm/types';

export type AlarmCreateForm = Omit<Alarm, 'id' | 'isActive'>;
