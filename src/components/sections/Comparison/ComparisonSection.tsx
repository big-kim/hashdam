'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { useTranslation } from '@/hooks/useTranslation';

const ComparisonSection: React.FC = () => {
  const t = useTranslation();
  return (
    <section className="comparison-section bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div 
          className="container flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-start w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div 
            className="section-heading flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-start w-full text-center"
            variants={staggerItem}
          >
            <h2 className="section-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl">
              {t.comparison.title}
            </h2>
            <div className="description text-sm sm:text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed">
              <span className="text-gray-900">
                {t.comparison.description.part1}{' '}
              </span>
              <span className="font-bold text-gray-900">
                {t.comparison.description.highlight1}
              </span>
              <span className="text-gray-900">
                {t.comparison.description.part2}
              </span>
              <br className="hidden sm:block" />
              <span className="text-gray-900">
                {t.comparison.description.part3}{' '}
              </span>
              <span className="font-bold text-blue-600">
                {t.comparison.description.highlight2}
              </span>
              <span className="text-gray-900">
                {t.comparison.description.part4}
              </span>
            </div>
          </motion.div>

          {/* Comparison Cards Container */}
          <motion.div 
            className="frame-1171275980 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full"
            variants={staggerItem}
          >
            {/* Two Cards Row */}
            <motion.div 
              className="frame-1171275951 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full"
              variants={staggerItem}
            >
              {/* Left Card - Traditional Method */}
              <motion.div 
                className="traditional-card bg-gray-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200 flex flex-col gap-6 sm:gap-8 items-center"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Card Header */}
                <div className="frame-1171275935 flex items-center gap-2 sm:gap-3 bg-blue-50 rounded-lg px-3 py-2">
                  <img
                    src="/images/discount0.svg"
                    alt="Discount icon"
                    width={32}
                    height={32}
                    className="discount w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-blue-700">
                    {t.comparison.cards.traditional.title}
                  </h3>
                </div>

                {/* Card Image */}
                <div className="image-container w-full max-w-[240px] h-[120px] sm:h-[160px] flex items-center justify-center">
                  <img
                    src="/images/online-shopping-discount-vouchers0.svg"
                    alt="Online shopping discount vouchers"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Card Description */}
                <div className="description2 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <div className="description">
                    <ol className="description-span">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-1">1.</span>
                        <span>{t.comparison.cards.traditional.points[0]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-1">2.</span>
                        <span>{t.comparison.cards.traditional.points[1]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 font-bold mt-1">3.</span>
                        <span>{t.comparison.cards.traditional.points[2]}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>

              {/* Right Card - New Alternative */}
              <motion.div 
                className="hashdam-card bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-blue-200 flex flex-col gap-6 sm:gap-8 items-center"
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Card Header */}
                <div className="frame-1171275934 flex items-center gap-2 sm:gap-3 bg-green-50 rounded-lg px-3 py-2">
                  <img
                    src="/images/graph0.svg"
                    alt="Graph icon"
                    width={32}
                    height={32}
                    className="graph w-6 h-6 sm:w-8 sm:h-8"
                  />
                  <h3 className="text-lg sm:text-xl font-bold text-green-700">
                    {t.comparison.cards.hashdam.title}
                  </h3>
                </div>

                {/* Card Image */}
                <div className="man-getting-financial-growth w-full max-w-[213px] h-[120px] sm:h-[160px] flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src="/images/clip-path-group0.svg"
                    alt="Man getting financial growth"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Card Description */}
                <div className="description3 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                  <div className="description">
                    <ol className="description-span">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-1">1.</span>
                        <span>{t.comparison.cards.hashdam.points[0]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-1">2.</span>
                        <span>{t.comparison.cards.hashdam.points[1]}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 font-bold mt-1">3.</span>
                        <span>{t.comparison.cards.hashdam.points[2]}</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Message */}
            <motion.div 
              className="description4 text-center text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-gray-800 max-w-4xl mx-auto leading-relaxed"
              variants={staggerItem}
            >
              <span className="text-gray-900">
                {t.comparison.bottomMessage.part1}{' '}
              </span>
              <span className="font-bold text-blue-600">
                {t.comparison.bottomMessage.highlight}
              </span>
              <span className="text-gray-900">
                {t.comparison.bottomMessage.part2}
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;