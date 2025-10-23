import { CalculatorApiRequest, CalculatorApiResponse } from '@/lib/types/calculator';

const API_URL = 'https://api.pool.hashdam.com/hashdam';

export async function fetchCalculatorData(): Promise<CalculatorApiResponse> {
  try {
    const requestBody: CalculatorApiRequest = {
      method: 'profitCalculator'
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: CalculatorApiResponse = await response.json();
    
    if (data.code !== 0) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('Calculator API Error:', error);
    throw error;
  }
}

// Fallback data for development/testing when API is not available
export const mockCalculatorData: CalculatorApiResponse = {
  code: 0,
  data: {
    profit: {
      LTC: {
        megahash: "0.00000117655",
        price: "113.90333333"
      },
      DOGE: {
        megahash: "0.004429741317",
        price: "0.24074936"
      },
      BELLS: {
        megahash: "0.000000999747",
        price: "0.18621876"
      },
      LKY: {
        megahash: "0.000001352749",
        price: "0.24260123"
      },
      PEP: {
        megahash: "0.00499491995",
        price: "0.000402036"
      },
      JKC: {
        megahash: "0.000004348844",
        price: "0.04391086"
      },
      DINGO: {
        megahash: "0.00412308155",
        price: "0.00003955"
      },
      SHIC: {
        megahash: "0.031089384127",
        price: "0.00002377228"
      }
    },
    hashrate: {
      timestamp: Date.now(),
      hashRate24h: "0.96787702",
      hashRate1h: "0.97338647",
      hashRate10m: "0.95288776",
      efficiency: "96.78",
      reject: "0.38"
    }
  }
};