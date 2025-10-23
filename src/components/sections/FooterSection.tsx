'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { getImagePath } from '@/utils/imagePath';

const FooterSection: React.FC = () => {
  const t = useTranslation();
  
  return (
    <footer className="bg-black px-4 sm:px-6 lg:px-8 xl:px-28 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
      {/* Left Section */}
      <div className="flex flex-col gap-4 sm:gap-6 items-start w-full lg:w-auto">
        {/* Logo */}
        <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center px-1">
          <Image src={getImagePath("/images/group-4273188750.svg")}
            alt="HashDam Logo"
            width={33.5}
            height={38.68}
            className="object-contain w-full h-full"
            unoptimized
          />
        </div>

        {/* Links */}
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.downloadNow}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.license}
            </a>
          </div>
          <div className="flex flex-wrap gap-3 sm:gap-4 lg:gap-6">
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.about}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.features}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.pricing}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.news}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.help}
            </a>
            <a href="#" className="text-white text-sm sm:text-base font-normal hover:text-gray-300 transition-colors font-['Inter'] min-h-[44px] flex items-center">
              {t.footer.contact}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-gray-300 text-xs sm:text-sm font-normal font-['Inter'] mt-2 sm:mt-4">
          {t.footer.copyright}
        </div>
      </div>

      {/* Right Section - Download Badges */}
      <div className="flex flex-col gap-3 sm:gap-4 items-start w-full sm:w-auto lg:w-44 lg:flex-shrink-0">
        <div className="text-gray-300 text-base sm:text-lg font-medium font-['Inter']">
          {t.footer.getTheApp}
        </div>

        {/* App Store Badge */}
        <a href="#" className="w-[120px] sm:w-[135px] h-9 sm:h-10 relative overflow-hidden hover:opacity-80 transition-opacity">
          <Image src={getImagePath("/images/bg0.svg")}
            alt="App Store Background"
            width={135}
            height={40}
            className="absolute inset-0 w-full h-full object-cover"
            unoptimized
          />
          <Image src={getImagePath("/images/group0_01.svg")}
            alt="App Store Icon"
            width={18}
            height={22}
            className="absolute left-[10px] sm:left-[12px] top-[7px] sm:top-[9px] w-4 sm:w-[18px] h-5 sm:h-[22px]"
            unoptimized
          />
          <Image src={getImagePath("/images/text0.svg")}
            alt="App Store Text"
            width={75}
            height={25}
            className="absolute left-[36px] sm:left-[42px] top-[6px] sm:top-[8px] w-16 sm:w-[75px] h-5 sm:h-[25px]"
            unoptimized
          />
        </a>

        {/* Google Play Badge */}
        <a href="#" className="w-[120px] sm:w-[135px] h-9 sm:h-10 relative overflow-hidden hover:opacity-80 transition-opacity">
          <Image src={getImagePath("/images/bg1.svg")}
            alt="Google Play Background"
            width={135}
            height={40}
            className="absolute inset-0 w-full h-full object-cover"
            unoptimized
          />
          <Image src={getImagePath("/images/google-play-logo0.svg")}
            alt="Google Play Logo"
            width={23}
            height={26}
            className="absolute left-[8px] sm:left-[10px] top-[5px] sm:top-[7px] w-5 sm:w-[23px] h-6 sm:h-[26px]"
            unoptimized
          />
          <Image src={getImagePath("/images/text1.svg")}
            alt="Google Play Text"
            width={85}
            height={27}
            className="absolute left-[35px] sm:left-[41px] top-[5px] sm:top-[7px] w-[72px] sm:w-[85px] h-6 sm:h-[27px]"
            unoptimized
          />
        </a>
      </div>
    </footer>
  );
};

export default FooterSection;