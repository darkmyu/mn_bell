export const AlarmRepeat = {
  DAILY: '매일',
  WEEKLY: '매주',
  MONTHLY: '매월',
} as const;

export const AlarmCategory = {
  FOOD: '식사',
  WALK: '산책',
} as const;

export interface Alarm {
  id: string;
  time: Date;
  title?: string;
  repeat: AlarmRepeatType;
  category?: AlarmCategoryType;
  isActive: boolean;
}

export type AlarmRepeatType = (typeof AlarmRepeat)[keyof typeof AlarmRepeat];
export type AlarmCategoryType = (typeof AlarmCategory)[keyof typeof AlarmCategory];
