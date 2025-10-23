'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';
import { getImagePath } from '@/utils/imagePath';

const ASICSection: React.FC = () => {
  const t = useTranslation();
  return (
    <section className="asic-section bg-gradient-to-br from-cyan-50 to-blue-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div 
          className="container flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-start w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Main Header Section */}
          <motion.div 
            className="section-heading flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-start w-full text-center"
            variants={staggerItem}
          >
            <h2 className="section-title text-gray-900 font-bold leading-tight" 
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 'clamp(2.5rem, 6vw, 3.75rem)' }}>
              {t.asic.title}
            </h2>
            <p className="description text-gray-900 leading-relaxed max-w-6xl" 
               style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)', lineHeight: 'clamp(1.5rem, 3vw, 1.75rem)' }}>
              {t.asic.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < t.asic.description.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </motion.div>

          {/* Three Cards Section */}
          <motion.div 
            className="section2 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 w-full"
            variants={staggerItem}
          >
            {/* ASIC & Hashpower Card */}
            <motion.div 
              className="asic-hashpower bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Title Section - Fixed Height */}
              <div className="title-section flex items-center justify-center h-16 sm:h-20 mb-6 sm:mb-8 flex-shrink-0">
                <h3 className="text-blue-600 font-semibold text-center line-clamp-2 px-2" 
                    style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', lineHeight: 'clamp(1.75rem, 4.5vw, 2.25rem)' }}>
                  {t.asic.cards.hashpower.title}
                </h3>
              </div>
              
              {/* Image Section - Fixed Height */}
              <div className="image-section flex items-center justify-center h-40 sm:h-48 mb-6 sm:mb-8 flex-shrink-0">
                <img 
                  className="w-full max-w-[200px] sm:max-w-[240px] h-auto object-contain" 
                  src={getImagePath("/images/group0.svg")} 
                  alt="ASIC & Hashpower"
                />
              </div>
              
              {/* Description Section - Flexible Height with Overflow Handling */}
              <div className="description-section flex-1 flex items-start overflow-hidden">
                <div className="text-gray-800 leading-relaxed w-full overflow-y-auto max-h-[200px] sm:max-h-[250px] pr-2 break-words overflow-wrap-anywhere word-break-keep-all" 
                     style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', lineHeight: '1.5' }}>
                  {t.asic.cards.hashpower.description}
                </div>
              </div>
            </motion.div>

            {/* Merge Mining Card */}
            <motion.div 
              className="mergermining bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Title Section - Fixed Height */}
              <div className="title-section flex items-center justify-center h-16 sm:h-20 mb-6 sm:mb-8 flex-shrink-0">
                <h3 className="text-blue-600 font-semibold text-center line-clamp-2 px-2" 
                    style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', lineHeight: 'clamp(1.75rem, 4.5vw, 2.25rem)' }}>
                  {t.asic.cards.mergeMining.title}
                </h3>
              </div>
              
              {/* Image Section - Fixed Height */}
              <div className="image-section flex items-center justify-center h-40 sm:h-48 mb-6 sm:mb-8 flex-shrink-0">
                <div className="flex flex-col gap-3 sm:gap-4 items-center justify-center w-full max-w-[280px]">
                  <div className="flex flex-row items-end justify-between w-full">
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-390.png")} alt="Coin 1" />
                    <div className="relative">
                      <img className="w-8 h-8 sm:w-10 sm:h-10" src={getImagePath("/images/layer-20.svg")} alt="Dogecoin" />
                    </div>
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-400.png")} alt="Coin 2" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-410.png")} alt="Coin 3" />
                  </div>
                  <div className="flex flex-row items-center justify-between w-full">
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-430.png")} alt="Coin 4" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-440.png")} alt="Coin 5" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-420.png")} alt="Coin 6" />
                    <img className="w-8 h-8 sm:w-10 sm:h-10 object-cover" src={getImagePath("/images/image-450.png")} alt="Coin 7" />
                  </div>
                </div>
              </div>
              
              {/* Description Section - Flexible Height with Overflow Handling */}
              <div className="description-section flex-1 flex items-start overflow-hidden">
                <div className="text-gray-800 leading-relaxed w-full overflow-y-auto max-h-[200px] sm:max-h-[250px] pr-2 break-words overflow-wrap-anywhere word-break-keep-all" 
                     style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', lineHeight: '1.5' }}>
                  {t.asic.cards.mergeMining.description}
                </div>
              </div>
            </motion.div>

            {/* Hashpower Reward Card */}
            <motion.div 
              className="hashpowerreward bg-white rounded-2xl sm:rounded-3xl border border-gray-200 p-6 sm:p-8 flex flex-col shadow-lg hover:shadow-xl transition-all duration-300 h-full min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]"
              variants={staggerItem}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              {/* Title Section - Fixed Height */}
              <div className="title-section flex items-center justify-center h-16 sm:h-20 mb-6 sm:mb-8 flex-shrink-0">
                <h3 className="text-blue-600 font-semibold text-center line-clamp-2 px-2" 
                    style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)', lineHeight: 'clamp(1.75rem, 4.5vw, 2.25rem)' }}>
                  {t.asic.cards.hashpowerReward.title}
                </h3>
              </div>
              
              {/* Image Section - Fixed Height */}
              <div className="image-section flex items-center justify-center h-40 sm:h-48 mb-6 sm:mb-8 flex-shrink-0">
                <img 
                  className="w-full max-w-[200px] sm:max-w-[240px] h-auto object-contain" 
                  src={getImagePath("/images/graphic-card0.svg")} 
                  alt="Hashpower Reward"
                />
              </div>
              
              {/* Description Section - Flexible Height with Overflow Handling */}
              <div className="description-section flex-1 flex items-start overflow-hidden">
                <div className="text-gray-800 leading-relaxed w-full overflow-y-auto max-h-[200px] sm:max-h-[250px] pr-2 break-words overflow-wrap-anywhere word-break-keep-all" 
                     style={{ fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)', lineHeight: '1.5' }}>
                  {t.asic.cards.hashpowerReward.description}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ASICSection;