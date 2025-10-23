// HashDam API 타입 정의
export interface CoinProfitData {
  megahash: string;  // 1 Mh/s 기준 수량
  price: string;     // 코인 가격
}

export interface ProfitData {
  LTC: CoinProfitData;
  DOGE: CoinProfitData;
  BELLS: CoinProfitData;
  LKY: CoinProfitData;
  PEP: CoinProfitData;
  JKC: CoinProfitData;
  DINGO: CoinProfitData;
  SHIC: CoinProfitData;
}

export interface HashrateData {
  timestamp: number;
  hashRate24h: string;
  hashRate1h: string;
  hashRate10m: string;
  efficiency: string;
  reject: string;
}

export interface HashDamApiResponse {
  code: number;
  message?: string;
  data?: {
    profit: ProfitData;
    hashrate: HashrateData;
  };
}
