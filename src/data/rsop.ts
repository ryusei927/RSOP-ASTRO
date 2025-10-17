// src/data/rsop.ts
export type RsopStop = {
  round: string;     // 例: "S1-#1"
  date: string;      // "2025-12-01"
  venue: string;     // 会場名
  link?: string;     // 詳細/エントリー
};

export const RSOP_STOPS: RsopStop[] = [
  { round: 'S1-#1', date: '2025-12-01', venue: '那覇 沖縄ポーカー連盟道場', link: '#' },
  { round: 'S1-#2', date: '2025-12-15', venue: '北谷 沖縄ポーカー連盟クラブ', link: '#' }
];