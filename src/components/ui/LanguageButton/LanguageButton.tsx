'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage, LANGUAGES } from '@/contexts/LanguageContext';
import styles from './LanguageButton.module.css';

interface LanguageButtonProps {
  className?: string;
}

// SVG 아이콘 컴포넌트들
const KoreanFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 38" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M39.6348 36.2035L42.592 31.8192L44.3458 33.0021L41.3885 37.3865L39.6348 36.2035Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M43.0645 31.1182L46.0217 26.7339L47.7755 27.9168L44.8182 32.3011L43.0645 31.1182Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M37.1797 34.5472L40.137 30.1628L41.8907 31.3457L38.9334 35.7301L37.1797 34.5472Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M40.6094 29.4617L43.5666 25.0774L45.3204 26.2603L42.3631 30.6446L40.6094 29.4617Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M34.7246 32.8918L37.6819 28.5074L39.4356 29.6904L36.4783 34.0747L34.7246 32.8918Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M38.1543 27.8053L41.1116 23.421L42.8653 24.6039L39.908 28.9883L38.1543 27.8053Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1.75373 26.7339L8.14143 36.204L6.3877 37.3869L0 27.9168L1.75373 26.7339Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M7.6385 30.1628L10.5958 34.5472L8.84203 35.7301L5.88477 31.3457L7.6385 30.1628Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.20881 25.0774L7.16608 29.4617L5.41235 30.6446L2.45508 26.2603L4.20881 25.0774Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.66389 23.421L13.0516 32.8912L11.2979 34.0741L4.91016 24.6039L6.66389 23.421Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M24.0909 30.1163C17.67 30.1163 12.4648 24.9069 12.4648 18.4808C12.4648 16.4055 13.0077 14.4572 13.9591 12.7701C13.5539 13.581 13.326 14.496 13.326 15.4642C13.326 18.7963 16.025 21.0665 19.3544 21.0665C20.7926 21.0665 21.9783 20.7779 23.0144 19.5058C23.0872 19.4088 23.1598 19.3133 23.2321 19.2195L23.449 18.9432C23.5212 18.8527 23.5933 18.764 23.6654 18.677L23.8818 18.4213C25.2538 16.8357 26.6558 15.8952 28.6122 15.8952C31.8227 15.8952 34.8476 17.638 34.4252 22.1438C34.276 23.736 33.7827 25.1867 32.7423 26.2379L32.7568 26.2377C30.628 28.6182 27.5343 30.1163 24.0909 30.1163Z" fill="#0047A0"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.6844 7.27014C30.1054 7.27014 35.3105 12.4795 35.3105 18.9056C35.3105 20.9809 34.7677 22.9293 33.8163 24.6163C34.2214 23.8054 34.4493 22.8904 34.4493 21.9222C34.4493 18.5901 31.7504 16.3199 28.421 16.3199C26.9828 16.3199 25.7971 16.6085 24.7609 17.8806C23.0874 20.113 21.5315 21.4912 19.1632 21.4912C15.9527 21.4912 12.9278 19.7484 13.3501 15.2426C13.4994 13.6504 13.9927 12.1998 15.0331 11.1486L15.0186 11.1487C17.1474 8.76826 20.2411 7.27014 23.6844 7.27014Z" fill="#CD2E3A"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M39.908 8.39807L42.8653 12.7824L41.1116 13.9653L38.1543 9.58098L39.908 8.39807Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M36.4783 3.31165L39.4356 7.69597L37.6819 8.87888L34.7246 4.49455L36.4783 3.31165Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M38.9334 1.65515L45.3211 11.1253L43.5674 12.3082L37.1797 2.83806L38.9334 1.65515Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M44.8182 5.08521L47.7755 9.46953L46.0217 10.6524L43.0645 6.26811L44.8182 5.08521Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M41.3885 -0.00012207L44.3458 4.38421L42.592 5.56711L39.6348 1.18278L41.3885 -0.00012207Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M4.91016 12.7818L11.2979 3.31165L13.0516 4.49455L6.66389 13.9647L4.91016 12.7818Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.45508 11.1253L8.84278 1.65515L10.5965 2.83806L4.20881 12.3082L2.45508 11.1253Z" fill="black"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 9.47015L6.3877 0L8.14143 1.18291L1.75373 10.6531L0 9.47015Z" fill="black"/>
  </svg>
);

const AmericanFlag = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 86 45" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H85.5V3.46875H0V0ZM0 6.92813H85.5V10.3969H0V6.92813ZM0 13.8469H85.5V17.3156H0V13.8469ZM0 20.7656H85.5V24.2344H0V20.7656ZM0 27.7031H85.5V31.1531H0V27.7031ZM0 34.6125H85.5V38.0813H0V34.6125ZM0 41.5312H85.5V45H0V41.5312Z" fill="#BD3D44"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 3.46875H85.5V6.92813H0V3.46875ZM0 10.3875H85.5V13.8469H0V10.3875ZM0 17.3063H85.5V20.775H0V17.3063ZM0 24.2344H85.5V27.7031H0V24.2344ZM0 31.1531H85.5V34.6219H0V31.1531ZM0 38.0719H85.5V41.5406H0V38.0719Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M0 0H34.2V24.2344H0V0Z" fill="#192F5D"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M2.84922 1.03125L3.16797 1.99688H4.16172L3.35547 2.5875L3.66484 3.55313L2.84922 2.95313L2.04297 3.54375L2.34297 2.5875L1.52734 1.99688H2.54922L2.84922 1.03125ZM8.54922 1.03125L8.85859 1.99688H9.87109L9.05547 2.5875L9.35547 3.55313L8.54922 2.95313L7.73359 3.54375L8.04297 2.5875L7.23672 1.99688H8.23047L8.54922 1.03125ZM14.2492 1.03125L14.5586 1.99688H15.5617L14.7555 2.5875L15.0648 3.55313L14.2492 2.95313L13.4336 3.54375L13.743 2.5875L12.9273 1.99688H13.9398L14.2492 1.03125ZM19.9492 1.03125L20.2586 1.99688H21.2711L20.4555 2.5875L20.7648 3.55313L19.9492 2.95313L19.1336 3.54375L19.4523 2.5875L18.6273 1.99688H19.6305L19.9492 1.03125ZM25.6492 1.03125L25.9586 1.99688H26.9617L26.1555 2.5875L26.4648 3.55313L25.6492 2.95313L24.8336 3.54375L25.143 2.5875L24.3367 1.99688H25.3398L25.6492 1.03125ZM31.3492 1.03125L31.6586 1.99688H32.6711L31.8461 2.5875L32.1648 3.55313L31.3492 2.95313L30.5336 3.54375L30.8523 2.5875L30.0273 1.99688H31.0398L31.3492 1.03125ZM5.69922 3.46875L6.00859 4.425H7.03047L6.21484 5.00625L6.51484 5.97188L5.71797 5.38125L4.90234 5.97188L5.19297 5.00625L4.40547 4.425H5.40859L5.69922 3.46875ZM11.3992 3.46875L11.718 4.425H12.7211L11.8961 5.00625L12.2148 5.97188L11.3992 5.38125L10.5836 5.97188L10.893 5.00625L10.0773 4.425H11.0898L11.3992 3.46875ZM17.0992 3.46875L17.4086 4.425H18.4211L17.6055 5.00625L17.9148 5.97188L17.0992 5.38125L16.2836 5.97188L16.593 5.00625L15.7867 4.425H16.7805L17.0992 3.46875ZM22.7992 3.46875L23.118 4.425H24.1211L23.2961 5.00625L23.6148 5.97188L22.7992 5.38125L21.993 5.97188L22.293 5.00625L21.4773 4.425H22.4992L22.7992 3.46875ZM28.4992 3.46875L28.8086 4.425H29.8211L29.0055 5.00625L29.3148 5.97188L28.4992 5.38125L27.6836 5.97188L27.993 5.00625L27.1867 4.425H28.1898L28.4992 3.46875ZM2.84922 5.86875L3.16797 6.84375H4.16172L3.35547 7.43438L3.66484 8.39063L2.84922 7.8L2.04297 8.39063L2.34297 7.43438L1.52734 6.84375H2.54922L2.84922 5.86875ZM8.54922 5.86875L8.85859 6.84375H9.87109L9.05547 7.43438L9.35547 8.39063L8.54922 7.8L7.73359 8.39063L8.04297 7.425L7.23672 6.83438H8.23047L8.54922 5.86875ZM14.2492 5.86875L14.5586 6.83438H15.5617L14.7555 7.425L15.0648 8.38125L14.2492 7.79063L13.4336 8.38125L13.743 7.41563L12.9273 6.825H13.9398L14.2492 5.86875ZM19.9492 5.86875L20.2586 6.83438H21.2711L20.4555 7.425L20.7648 8.38125L19.9492 7.79063L19.1336 8.38125L19.4523 7.41563L18.6273 6.825H19.6305L19.9492 5.86875ZM25.6492 5.86875L25.9586 6.83438H26.9617L26.1555 7.425L26.4648 8.38125L25.6492 7.79063L24.8336 8.38125L25.143 7.41563L24.3367 6.825H25.3398L25.6492 5.86875ZM31.3492 5.86875L31.6586 6.83438H32.6711L31.8461 7.425L32.1648 8.38125L31.3492 7.79063L30.5336 8.38125L30.8523 7.41563L30.0273 6.825H31.0398L31.3492 5.86875ZM5.69922 8.30625L6.00859 9.2625H7.03047L6.21484 9.85313L6.52422 10.8188L5.70859 10.2188L4.89297 10.8094L5.20234 9.85313L4.39609 9.2625H5.39922L5.69922 8.30625ZM11.3992 8.30625L11.718 9.2625H12.7211L11.8961 9.85313L12.2148 10.8188L11.3992 10.2188L10.5836 10.8094L10.893 9.85313L10.0773 9.2625H11.0898L11.3992 8.30625ZM17.0992 8.30625L17.4086 9.2625H18.4211L17.6055 9.85313L17.9148 10.8188L17.0992 10.2188L16.2836 10.8094L16.593 9.85313L15.7867 9.2625H16.7805L17.0992 8.30625ZM22.7992 8.30625L23.118 9.2625H24.1211L23.3055 9.85313L23.6148 10.8188L22.7992 10.2188L21.993 10.8094L22.293 9.85313L21.4773 9.2625H22.4992L22.7992 8.30625ZM28.4992 8.30625L28.8086 9.2625H29.8211L29.0055 9.85313L29.3148 10.8188L28.4992 10.2188L27.6836 10.8094L27.993 9.85313L27.1867 9.2625H28.1898L28.4992 8.30625ZM2.84922 10.7344L3.16797 11.6906H4.16172L3.35547 12.2813L3.66484 13.2469L2.84922 12.6469L2.04297 13.2375L2.34297 12.2813L1.52734 11.6906H2.54922L2.84922 10.7344ZM8.54922 10.7344L8.85859 11.6906H9.87109L9.05547 12.2813L9.35547 13.2375L8.54922 12.6469L7.73359 13.2375L8.04297 12.2813L7.23672 11.6906H8.23047L8.54922 10.7344ZM14.2492 10.7344L14.5586 11.6906H15.5617L14.7555 12.2813L15.0648 13.2469L14.2492 12.6469L13.4336 13.2375L13.743 12.2813L12.9273 11.6906H13.9398L14.2492 10.7344ZM19.9492 10.7344L20.2586 11.6906H21.2711L20.4555 12.2813L20.7648 13.2469L19.9492 12.6469L19.1336 13.2375L19.4523 12.2813L18.6273 11.6906H19.6305L19.9492 10.7344ZM25.6492 10.7344L25.9586 11.6906H26.9617L26.1555 12.2813L26.4648 13.2469L25.6492 12.6469L24.8336 13.2375L25.143 12.2813L24.3367 11.6906H25.3398L25.6492 10.7344ZM31.3492 10.7344L31.6586 11.6906H32.6711L31.8461 12.2813L32.1648 13.2469L31.3492 12.6469L30.5336 13.2375L30.843 12.2813L30.018 11.6906H31.0305L31.3492 10.7344ZM5.69922 13.1531L6.00859 14.1188H7.03047L6.21484 14.7L6.52422 15.6656L5.70859 15.0656L4.89297 15.6656L5.20234 14.7L4.39609 14.1094H5.39922L5.69922 13.1531ZM11.3992 13.1531L11.718 14.1188H12.7211L11.8961 14.7L12.2148 15.6656L11.3992 15.0656L10.5836 15.6656L10.893 14.7L10.0773 14.1094H11.0898L11.3992 13.1531ZM17.0992 13.1531L17.4086 14.1188H18.4211L17.6055 14.7L17.9148 15.6656L17.0992 15.0656L16.2836 15.6656L16.593 14.7L15.7867 14.1094H16.7805L17.0992 13.1531ZM22.7992 13.1531L23.118 14.1188H24.1211L23.3055 14.7L23.6148 15.6656L22.7992 15.0656L21.993 15.6656L22.293 14.7L21.4773 14.1094H22.4992L22.7992 13.1531ZM28.4992 13.1531L28.8086 14.1188H29.8211L29.0055 14.7L29.3148 15.6656L28.4992 15.0656L27.6836 15.6656L27.993 14.7L27.1867 14.1094H28.1898L28.4992 13.1531ZM2.84922 15.5719L3.16797 16.5375H4.16172L3.35547 17.1281L3.66484 18.075L2.84922 17.4938L2.04297 18.075L2.34297 17.1188L1.52734 16.5281H2.54922L2.84922 15.5719ZM8.54922 15.5719L8.85859 16.5375H9.87109L9.05547 17.1281L9.36484 18.075L8.54922 17.4938L7.73359 18.075L8.05234 17.1188L7.23672 16.5281H8.23047L8.54922 15.5719ZM14.2492 15.5719L14.5586 16.5375H15.5617L14.7555 17.1281L15.0648 18.075L14.2492 17.4938L13.4336 18.075L13.743 17.1188L12.9273 16.5281H13.9398L14.2492 15.5719ZM19.9492 15.5719L20.2586 16.5375H21.2711L20.4555 17.1281L20.7648 18.075L19.9492 17.4938L19.1336 18.075L19.4523 17.1188L18.6273 16.5281H19.6305L19.9492 15.5719ZM25.6492 15.5719L25.9586 16.5375H26.9617L26.1555 17.1281L26.4648 18.075L25.6492 17.4938L24.8336 18.075L25.143 17.1188L24.3367 16.5281H25.3398L25.6492 15.5719ZM31.3492 15.5719L31.6586 16.5375H32.6711L31.8461 17.1281L32.1648 18.075L31.3492 17.4938L30.5336 18.075L30.8523 17.1188L30.0273 16.5281H31.0398L31.3492 15.5719ZM5.69922 18L6.00859 18.9563H7.03047L6.21484 19.5469L6.52422 20.5125L5.70859 19.9125L4.89297 20.5031L5.20234 19.5469L4.39609 18.9563H5.39922L5.69922 18ZM11.3992 18L11.718 18.9563H12.7211L11.8961 19.5469L12.2148 20.5125L11.3992 19.9125L10.5836 20.5031L10.893 19.5469L10.0773 18.9563H11.0898L11.3992 18ZM17.0992 18L17.4086 18.9563H18.4211L17.6055 19.5469L17.9148 20.5125L17.0992 19.9125L16.2836 20.5031L16.593 19.5469L15.7867 18.9563H16.7805L17.0992 18ZM22.7992 18L23.118 18.9563H24.1211L23.3055 19.5469L23.6148 20.5125L22.7992 19.9125L21.993 20.5031L22.293 19.5469L21.4773 18.9563H22.4992L22.7992 18ZM28.4992 18L28.8086 18.9563H29.8211L29.0055 19.5469L29.3148 20.5125L28.4992 19.9125L27.6836 20.5031L27.993 19.5469L27.1867 18.9563H28.1898L28.4992 18ZM2.84922 20.4281L3.16797 21.3844H4.16172L3.35547 21.975L3.66484 22.9313L2.84922 22.3406L2.04297 22.9313L2.34297 21.9656L1.52734 21.375H2.54922L2.84922 20.4281ZM8.54922 20.4281L8.85859 21.3844H9.87109L9.05547 21.975L9.36484 22.9313L8.54922 22.3406L7.73359 22.9313L8.05234 21.9656L7.23672 21.375H8.23047L8.54922 20.4281ZM14.2492 20.4281L14.5586 21.3844H15.5617L14.7742 21.975L15.0836 22.9313L14.268 22.3406L13.4523 22.9313L13.7617 21.9656L12.9461 21.375H13.9586L14.2492 20.4281ZM19.9492 20.4281L20.2586 21.3844H21.2711L20.4555 21.975L20.7648 22.9313L19.9492 22.3406L19.1336 22.9313L19.4523 21.9656L18.6273 21.375H19.6305L19.9492 20.4281ZM25.6492 20.4281L25.9586 21.3844H26.9617L26.1555 21.975L26.4648 22.9313L25.6492 22.3406L24.8336 22.9313L25.143 21.9656L24.3367 21.375H25.3398L25.6492 20.4281ZM31.3492 20.4281L31.6586 21.3844H32.6711L31.8461 21.975L32.1648 22.9313L31.3492 22.3406L30.5336 22.9313L30.8523 21.9656L30.0273 21.375H31.0398L31.3492 20.4281Z" fill="white"/>
  </svg>
);

const LanguageButton: React.FC<LanguageButtonProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 언어 정보 매핑
  const languageInfo = {
    ko: {
      name: 'Korean',
      FlagComponent: KoreanFlag
    },
    en: {
      name: 'English',
      FlagComponent: AmericanFlag
    }
  };

  const availableLanguages = [
    { code: 'ko', ...languageInfo.ko },
    { code: 'en', ...languageInfo.en }
  ];

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as any);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* 메인 버튼 - 데스크톱 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-b from-[#00AAFF] to-[#0088DD] rounded-lg border border-[#0077CC] shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.22),inset_0px_-2px_0.3px_0px_rgba(0,66,125,0.18),0px_2px_5px_0px_rgba(0,136,221,0.17)] hover:shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.22),inset_0px_-2px_0.3px_0px_rgba(0,66,125,0.18),0px_4px_8px_0px_rgba(0,136,221,0.25)] transition-all duration-200 min-w-[120px]"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="text-white text-xs font-medium">Language</span>
        <motion.svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* 메인 버튼 - 모바일 */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.mobileButton} flex md:hidden items-center justify-center bg-gradient-to-b from-[#00AAFF] to-[#0088DD] rounded border border-[#0077CC] shadow-[inset_0px_1px_0.5px_0px_rgba(255,255,255,0.22),inset_0px_-1px_0.3px_0px_rgba(0,66,125,0.18),0px_2px_4px_0px_rgba(0,136,221,0.17)] active:shadow-[inset_0px_1px_2px_0px_rgba(0,66,125,0.3)] transition-all duration-200`}
        whileTap={{ scale: 0.95 }}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className={`${styles.mobileButtonText} text-white font-medium`}>
          Language
        </span>
        <motion.svg
          className={`${styles.mobileButtonIcon} text-white`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      {/* 드롭다운 메뉴 - 데스크톱 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="hidden md:block absolute top-full left-0 mt-2 w-full min-w-[160px] bg-white border border-gray-200 rounded-lg shadow-[0px_4px_16px_0px_rgba(0,0,0,0.12)] z-50 overflow-hidden"
          >
            {availableLanguages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-[#E6F7FF] hover:to-[#CCF0FF] transition-all duration-150 border-b border-gray-100 last:border-b-0 ${
                  language === lang.code ? 'bg-gradient-to-r from-[#E6F7FF] to-[#CCF0FF]' : ''
                }`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-6 h-6 flex-shrink-0">
                  <lang.FlagComponent className="w-full h-full object-contain" />
                </div>
                <span className="text-sm font-medium text-gray-800">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1 }}
                    className="ml-auto"
                  >
                    <svg className="w-4 h-4 text-[#00AAFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 드롭다운 메뉴 - 모바일 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="block md:hidden absolute top-full left-0 mt-1 w-full min-w-[140px] bg-white border border-gray-200 rounded-md shadow-[0px_4px_12px_0px_rgba(0,0,0,0.15)] z-[10000] overflow-hidden"
          >
            {availableLanguages.map((lang, index) => (
              <motion.button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full flex items-center gap-2 px-3 py-2.5 text-left active:bg-gradient-to-r active:from-[#E6F7FF] active:to-[#CCF0FF] transition-all duration-100 border-b border-gray-100 last:border-b-0 ${
                  language === lang.code ? 'bg-gradient-to-r from-[#E6F7FF] to-[#CCF0FF]' : ''
                }`}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="relative w-5 h-5 flex-shrink-0">
                  <lang.FlagComponent className="w-full h-full object-contain" />
                </div>
                <span className="text-xs font-medium text-gray-800">{lang.name}</span>
                {language === lang.code && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto"
                  >
                    <svg className="w-3.5 h-3.5 text-[#00AAFF]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageButton;

