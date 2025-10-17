// src/data/stores.ts
export type Store = {
  name: string;
  area: '那覇' | '中部' | '北部' | '離島';
  address?: string;
  url?: string;
  phone?: string;
};

export const STORES: Store[] = [
  { name: '沖縄ポーカー連盟 那覇道場', area: '那覇', url: '#'},
  { name: '沖縄ポーカー連盟 北谷クラブ', area: '中部', url: '#'}
];