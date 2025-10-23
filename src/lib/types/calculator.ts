// HashDam API Types for Calculator
export interface ProfitData {
  megahash: string;
  price: string;
}

export interface HashRateData {
  timestamp: number;
  hashRate24h: string;
  hashRate1h: string;
  hashRate10m: string;
  efficiency: string;
  reject: string;
}

export interface CalculatorApiResponse {
  code: number;
  message?: string;
  data?: {
    profit: {
      LTC: ProfitData;
      DOGE: ProfitData;
      BELLS: ProfitData;
      LKY: ProfitData;
      PEP: ProfitData;
      JKC: ProfitData;
      DINGO: ProfitData;
      SHIC: ProfitData;
    };
    hashrate: HashRateData;
  };
}

export interface CalculatorApiRequest {
  method: 'profitCalculator';
}

export interface CoinProfit {
  symbol: string;
  name: string;
  amount: number;
  usdtValue: number;
  color: string;
  bgColor: string;
  textColor: string;
}

export interface CalculatedProfit {
  totalUSDT: number;
  dailyUSDT: number;
  monthlyUSDT: number;
  coins: CoinProfit[];
}