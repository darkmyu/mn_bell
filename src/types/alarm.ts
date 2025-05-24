export interface Alarm {
  id: string;
  time: string;
  topic: AlarmTopic;
}

export const ALARM_TOPICS = {
  FOOD: '식사',
} as const;

export type AlarmTopic = (typeof ALARM_TOPICS)[keyof typeof ALARM_TOPICS];
