'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';

interface StatisticItem {
  icon: string;
  number: string;
  label: string;
}

const StatisticsSection: React.FC = () => {
  const t = useTranslation();
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({});

  const statisticsData: StatisticItem[] = [
    {
      icon: '/images/base-feature-icon0.svg',
      number: '24+',
      label: t.statistics.stats.miner
    },
    {
      icon: '/images/group0.svg',
      number: '305,300+',
      label: t.statistics.stats.totalHashpower
    },
    {
      icon: '/images/group1.svg',
      number: '205,123+',
      label: t.statistics.stats.distributedHashpower
    },
    {
      icon: '/images/group2.svg',
      number: '560+',
      label: t.statistics.stats.users
    }
  ];

  const handleImageError = (iconPath: string) => {
    setImageErrors(prev => ({ ...prev, [iconPath]: true }));
  };

  const FallbackIcon = ({ color = "#7C3AED" }: { color?: string }) => (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill={color} fillOpacity="0.1"/>
      <rect x="8" y="8" width="16" height="16" rx="4" fill={color}/>
    </svg>
  );

  return (
    <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-tl from-sky-50/25 via-white to-cyan-50/30"></div>
      
      {/* Floating Elements - 모바일에서 크기 조정 */}
      <div className="absolute top-8 sm:top-16 right-8 sm:right-16 w-16 sm:w-20 lg:w-28 h-16 sm:h-20 lg:h-28 bg-gradient-to-br from-cyan-100/40 to-sky-100/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-16 sm:top-32 left-8 sm:left-20 w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 bg-gradient-to-tl from-blue-100/50 to-cyan-100/30 rounded-full blur-lg animate-bounce"></div>
      <div className="absolute bottom-12 sm:bottom-24 left-1/3 w-14 sm:w-18 lg:w-24 h-14 sm:h-18 lg:h-24 bg-gradient-to-tr from-sky-100/35 to-purple-100/25 rounded-full blur-lg animate-pulse"></div>
      <div className="absolute bottom-8 sm:bottom-16 right-1/4 w-18 sm:w-24 lg:w-32 h-18 sm:h-24 lg:h-32 bg-gradient-to-bl from-purple-100/30 to-blue-100/25 rounded-full blur-xl animate-bounce"></div>
      
      {/* Content with relative positioning */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center">
            {/* Section Heading - 반응형 텍스트 크기 */}
            <div className="flex-1 lg:max-w-[592px] text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight tracking-tight">
                {t.statistics.title}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-900 leading-relaxed">
                {t.statistics.description}
              </p>
            </div>

            {/* Statistics Content - 반응형 그리드 */}
            <div className="flex-1 w-full">
              <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-lg mx-auto sm:max-w-none sm:grid-cols-2 lg:grid-cols-2">
                {statisticsData.map((stat, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 lg:p-5 rounded-lg hover:bg-white/50 transition-colors duration-200 text-center sm:text-left">
                    <div className="p-1.5 sm:p-2 flex-shrink-0">
                      {imageErrors[stat.icon] ? (
                        <FallbackIcon color={index === 0 ? "#7C3AED" : index === 1 ? "#1DB5BE" : index === 2 ? "#C4B5FD" : "#7C3AED"} />
                      ) : (
                        <Image
                          src={stat.icon}
                          alt={`${stat.label} icon`}
                          width={32}
                          height={32}
                          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 mx-auto sm:mx-0"
                          unoptimized
                          onError={() => handleImageError(stat.icon)}
                        />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm lg:text-base text-gray-900 break-words">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
