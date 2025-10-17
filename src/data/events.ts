// src/data/events.ts
export type Event = {
  date: string;      // YYYY-MM-DD
  title: string;
  venue?: string;
  link?: string;
};

export const EVENTS: Event[] = [
  { date: '2025-11-03', title: '初心者講習会（無料）', venue: '那覇道場', link: '#' },
  { date: '2025-11-15', title: '沖縄ポーカー連盟カップ S1 #3', venue: '北谷', link: '#' }
];