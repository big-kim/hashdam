'use client';

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { fetchCalculatorData, mockCalculatorData } from '@/lib/api/calculator';
import { CalculatorApiResponse, CoinProfit, CalculatedProfit } from '@/lib/types/calculator';
import { useTranslation } from '@/hooks/useTranslation';

const CalculatorSection: React.FC = () => {
  const t = useTranslation();
  const [hashPower, setHashPower] = useState<number>(1000);
  const [calculatorData, setCalculatorData] = useState<CalculatorApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Fetch API data on component mount
  useEffect(() => {
    const loadCalculatorData = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchCalculatorData();
        setCalculatorData(data);
      } catch (err) {
        console.warn('API fetch failed, using mock data:', err);
        setError('Using demo data - API unavailable');
        setCalculatorData(mockCalculatorData);
      } finally {
        setIsLoading(false);
      }
    };

    loadCalculatorData();
  }, []);

  // Calculate profits based on hash power and API data
  const calculateProfit = useCallback((): CalculatedProfit => {
    if (!calculatorData?.data) {
      return {
        totalUSDT: 0,
        dailyUSDT: 0,
        monthlyUSDT: 0,
        coins: []
      };
    }

    const { profit } = calculatorData.data;
    const coins: CoinProfit[] = [];
    let totalDailyUSDT = 0;

    // Define coin colors and names with new color scheme
    const colorScheme = [
      { bgColor: 'rgba(138, 99, 210, 0.7)', textColor: 'text-white' }, // #8A63D2 with 70% opacity
      { bgColor: '#48D1CC', textColor: 'text-white' }, // #48D1CC with 100% opacity  
      { bgColor: '#8A63D2', textColor: 'text-white' } // #8A63D2 with 100% opacity
    ];

    const coinConfig = {
      LTC: { name: 'Litecoin', ...colorScheme[0] },
      DOGE: { name: 'Dogecoin', ...colorScheme[1] },
      BELLS: { name: 'Bellscoin', ...colorScheme[2] },
      LKY: { name: 'Lucky', ...colorScheme[0] },
      PEP: { name: 'Pepecoin', ...colorScheme[1] },
      JKC: { name: 'Junkcoin', ...colorScheme[2] },
      DINGO: { name: 'Dingo', ...colorScheme[0] },
      SHIC: { name: 'Shicoin', ...colorScheme[1] }
    };

    // Calculate profit for each coin
    Object.entries(profit).forEach(([symbol, data]) => {
      const megahash = parseFloat(data.megahash);
      const price = parseFloat(data.price);
      const amount = hashPower * megahash;
      const usdtValue = amount * price;
      
      totalDailyUSDT += usdtValue;
      
      coins.push({
        symbol,
        name: coinConfig[symbol as keyof typeof coinConfig]?.name || symbol,
        amount,
        usdtValue,
        color: coinConfig[symbol as keyof typeof coinConfig]?.textColor || colorScheme[0].textColor,
        bgColor: coinConfig[symbol as keyof typeof coinConfig]?.bgColor || colorScheme[0].bgColor,
        textColor: coinConfig[symbol as keyof typeof coinConfig]?.textColor || colorScheme[0].textColor
      });
    });

    return {
      totalUSDT: totalDailyUSDT,
      dailyUSDT: totalDailyUSDT,
      monthlyUSDT: totalDailyUSDT * 30,
      coins: coins.sort((a, b) => b.usdtValue - a.usdtValue) // Sort by USDT value descending
    };
  }, [calculatorData, hashPower]);

  const profit = calculateProfit();

  // Handle slider drag with mouse
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    e.preventDefault();
    document.body.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const newValue = Math.round(1 + percentage * 9999); // 1-10000 range
    setHashPower(newValue);
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = '';
  }, []);

  // Handle slider drag with touch
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    e.preventDefault();
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const touch = e.touches[0];
    const rect = sliderRef.current.getBoundingClientRect();
    const percentage = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width));
    const newValue = Math.round(1 + percentage * 9999);
    setHashPower(newValue);
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Event listeners for drag functionality
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  return (
    <section 
      className="calculator-section py-8 sm:py-12 md:py-16 lg:py-20"
      style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div 
          className="container flex flex-col gap-8 sm:gap-12 md:gap-16 lg:gap-24 items-center justify-start w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div 
            className="header flex flex-col gap-2 sm:gap-3 md:gap-4 items-center justify-start w-full text-center"
            variants={staggerItem}
          >
            <h2 
              className="font-bold text-gray-900 leading-tight"
              style={{ 
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                lineHeight: 'clamp(2.5rem, 6vw, 3.75rem)',
                letterSpacing: '-0.025em'
              }}
            >
              {t.calculator.title}
            </h2>
            <p 
              className="text-gray-900 max-w-4xl leading-relaxed"
              style={{ 
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                lineHeight: 'clamp(1.5rem, 3vw, 1.75rem)'
              }}
            >
              {t.calculator.description}
            </p>
            {error && (
              <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg max-w-md mx-auto text-sm">
                {error}
              </div>
            )}
          </motion.div>

          {/* Calculator Container */}
          <motion.div 
            className="calculator-container w-full max-w-7xl"
            variants={staggerItem}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
              {/* Control Section */}
              <motion.div 
                className="control-section bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200 relative"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Loading Overlay */}
                {isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-80 rounded-2xl sm:rounded-3xl flex items-center justify-center z-10">
                    <div className="flex items-center space-x-3">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                      <span className="text-gray-600 font-medium">{t.calculator.loadingText}</span>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-6 sm:gap-8 md:gap-12">
                  {/* Hash Power Control */}
                  <div className="hash-power-control">
                    <label className="block text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">
                      {t.calculator.hashPowerLabel}
                    </label>
                    
                    {/* Custom Draggable Slider */}
                    <div className="slider-container relative mb-6">
                      <div 
                        ref={sliderRef}
                        className="slider-track relative w-full h-6 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full cursor-pointer select-none"
                        onClick={(e) => {
                          if (isDragging) return;
                          const rect = e.currentTarget.getBoundingClientRect();
                          const percentage = (e.clientX - rect.left) / rect.width;
                          const newValue = Math.round(1 + percentage * 9999);
                          setHashPower(Math.max(1, Math.min(10000, newValue)));
                        }}
                      >
                        {/* Progress Track */}
                        <motion.div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 rounded-full"
                          style={{ width: `${((hashPower - 1) / 9999) * 100}%` }}
                          animate={{ 
                            background: isDragging 
                              ? 'linear-gradient(to right, #3b82f6, #06b6d4, #10b981)' 
                              : 'linear-gradient(to right, #60a5fa, #3b82f6, #06b6d4)'
                          }}
                          transition={{ duration: 0.2 }}
                        />
                        
                        {/* Custom Draggable Thumb */}
                        <motion.div
                          className={`absolute w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full shadow-lg cursor-grab select-none ${
                            isDragging ? 'cursor-grabbing' : 'hover:cursor-grab'
                          }`}
                          style={{ 
                            left: `${((hashPower - 1) / 9999) * 100}%`,
                            top: 'calc(50% - 15px)',
                            transform: `translateY(-50%) translateX(-${((hashPower - 1) / 9999) * 50}%)`,
                          }}
                          onMouseDown={handleMouseDown}
                          onTouchStart={handleTouchStart}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 1.1 }}
                          animate={{ 
                            scale: isDragging ? 1.15 : 1,
                            boxShadow: isDragging 
                              ? '0 12px 30px rgba(59, 130, 246, 0.6), 0 0 0 4px rgba(59, 130, 246, 0.2)' 
                              : '0 6px 20px rgba(59, 130, 246, 0.4)'
                          }}
                          transition={{ duration: 0.2 }}
                        />
                      </div>
                      
                      {/* Range Labels */}
                      <div className="flex justify-between text-sm text-gray-600 mt-3">
                        <span>1</span>
                        <span>10,000</span>
                      </div>
                    </div>
                    
                    {/* Current Value Display */}
                    <div className="flex justify-between items-center">
                      <div className="current-value">
                        <motion.span 
                          className="text-xl sm:text-2xl font-semibold text-blue-700"
                          animate={{ scale: isDragging ? 1.05 : 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          {hashPower.toLocaleString()}Mh/s
                        </motion.span>
                      </div>
                      <div className="range-info text-gray-600">
                        <span className="text-sm">1~10,000</span>
                      </div>
                    </div>
                  </div>

                  {/* Monthly Profit Display */}
                  <motion.div 
                    className="monthly-profit bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 sm:p-6 border border-blue-200"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-sm sm:text-base font-semibold text-gray-700">
                        {t.calculator.monthlyProfitLabel}
                      </span>
                      <motion.span 
                        className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600"
                        key={profit.monthlyUSDT}
                        initial={{ scale: 1.1, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        ${profit.monthlyUSDT.toFixed(4)} USDT
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Statistics */}
                  <div className="statistics-container">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">
                      {t.calculator.miningStatsTitle}
                    </h4>
                    <div className="statistics grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      <motion.div 
                        className="stat-item bg-white rounded-lg p-3 sm:p-4 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 shadow-md"
                        style={{ borderTopColor: 'rgba(138, 99, 210, 0.7)', borderTopWidth: '3px' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="stat-label text-xs sm:text-sm text-gray-600 mb-1">
                          {t.calculator.stats.hashrate24h}
                        </div>
                        <div className="stat-value text-sm sm:text-base font-bold text-gray-900">
                          {calculatorData?.data?.hashrate?.efficiency ? 
                            `${(hashPower * (parseFloat(calculatorData.data.hashrate.efficiency) / 100)).toFixed(1)}Mh/s` : 
                            `${(hashPower * 0.9493).toFixed(1)}Mh/s`
                          }
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="stat-item bg-white rounded-lg p-3 sm:p-4 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 shadow-md"
                        style={{ borderTopColor: '#48D1CC', borderTopWidth: '3px' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="stat-label text-xs sm:text-sm text-gray-600 mb-1">
                          {t.calculator.stats.reject}
                        </div>
                        <div className="stat-value text-sm sm:text-base font-bold text-gray-900">
                          {calculatorData?.data?.hashrate?.reject ? 
                            `${calculatorData.data.hashrate.reject}%` : 
                            '0.38%'
                          }
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="stat-item bg-white rounded-lg p-3 sm:p-4 border border-gray-100 text-center hover:shadow-lg transition-all duration-300 shadow-md"
                        style={{ borderTopColor: '#8A63D2', borderTopWidth: '3px' }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="stat-label text-xs sm:text-sm text-gray-600 mb-1">
                          {t.calculator.stats.efficiency}
                        </div>
                        <div className="stat-value text-sm sm:text-base font-bold text-gray-900">
                          {calculatorData?.data?.hashrate?.efficiency ? 
                            `${calculatorData.data.hashrate.efficiency}%` : 
                            '96.78%'
                          }
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Results Section */}
              <motion.div 
                className="results-section bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-gray-200"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex flex-col gap-6 sm:gap-8">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                      {t.calculator.coinDailyExampleTitle}
                    </h3>
                    <div className="text-sm text-gray-600">
                      {t.calculator.dailyLabel}: ${profit.dailyUSDT.toFixed(4)} USDT
                    </div>
                  </div>

                  {/* Coin List */}
                  <div className="coin-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 sm:gap-4">
                    {profit.coins.map((coin, index) => {
                      // Define color scheme for accents
                      const colors = ['rgba(138, 99, 210, 0.7)', '#48D1CC', '#8A63D2'];
                      const accentColor = colors[index % colors.length];
                      
                      return (
                        <motion.div 
                          key={coin.symbol}
                          className="coin-item bg-white rounded-lg p-3 sm:p-4 border border-gray-100 transition-all duration-300 hover:shadow-lg shadow-md"
                          style={{ borderLeftColor: accentColor, borderLeftWidth: '4px' }}
                          whileHover={{ scale: 1.02 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="coin-info">
                              <div className="coin-name font-semibold text-sm sm:text-base text-gray-900">
                                {coin.symbol}
                              </div>
                              <div className="coin-full-name text-xs text-gray-600">
                                {coin.name}
                              </div>
                              <div className="coin-amount text-xs sm:text-sm text-gray-500">
                                {coin.amount.toFixed(8)} {coin.symbol}
                              </div>
                            </div>
                            <div className="coin-value text-right">
                              <div className="usdt-value text-sm sm:text-base font-semibold text-gray-900">
                                ${coin.usdtValue.toFixed(6)}
                              </div>
                              <div className="text-xs text-gray-600">USDT</div>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>


            </div>
          </motion.div>


        </motion.div>
      </div>

      {/* Custom Slider Styles */}
      <style jsx>{`
        .slider-input::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1b70e5;
          border: 2px solid #009fbd;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(27, 112, 229, 0.4);
          transition: all 0.2s ease;
        }
        
        .slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(27, 112, 229, 0.6);
        }
        
        .slider-input::-webkit-slider-thumb:active {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(27, 112, 229, 0.8);
        }
        
        .slider-input::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #1b70e5;
          border: 2px solid #009fbd;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(27, 112, 229, 0.4);
          transition: all 0.2s ease;
        }
        
        .slider-input::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 16px rgba(27, 112, 229, 0.6);
        }
        
        .slider-input::-moz-range-thumb:active {
          transform: scale(1.2);
          box-shadow: 0 8px 20px rgba(27, 112, 229, 0.8);
        }
      `}</style>
    </section>
  );
};

export default CalculatorSection;
