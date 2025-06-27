export const ALARM_REPEAT = {
  DAILY: '매일',
  WEEKLY: '매주',
  MONTHLY: '매월',
} as const;

export const ALARM_CATEGORY = {
  FOOD: '식사',
  WALK: '산책',
} as const;

export interface Alarm {
  id: string;
  time: Date;
  title?: string;
  repeat: AlarmRepeat;
  category?: AlarmCategory;
  isActive: boolean;
}

export type AlarmRepeat = (typeof ALARM_REPEAT)[keyof typeof ALARM_REPEAT];
export type AlarmCategory = (typeof ALARM_CATEGORY)[keyof typeof ALARM_CATEGORY];
