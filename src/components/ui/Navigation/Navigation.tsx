'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/Button/Button';
import { RippleEffect } from '@/components/ui/RippleEffect';
import LanguageButton from '@/components/ui/LanguageButton';
import { useTranslation } from '@/hooks/useTranslation';
import { menuItemHover, menuItemTap } from '@/lib/animations';

interface NavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
  showSectionNavigation?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ 
  activeSection = '', 
  onSectionClick,
  showSectionNavigation = true 
}) => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslation();

  // 강제 네비게이션 고정을 위한 스크롤 감지
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const forceNavFixed = () => {
      // 모든 네비게이션 요소 찾기
      const navElements = document.querySelectorAll('.navbar, nav.navbar, [class*="navbar"]');
      navElements.forEach((navElement) => {
        const element = navElement as HTMLElement;
        // 강제로 위치 고정
        element.style.position = 'fixed';
        element.style.top = '0px';
        element.style.left = '0px';
        element.style.right = '0px';
        element.style.width = '100%';
        element.style.zIndex = '9999';
        element.style.transform = 'translate3d(0, 0, 0)';
        element.style.webkitTransform = 'translate3d(0, 0, 0)';
        element.style.backfaceVisibility = 'hidden';
        element.style.webkitBackfaceVisibility = 'hidden';
        element.style.willChange = 'transform';
        element.style.margin = '0';
        element.style.padding = '0';
      });
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // 스크롤할 때마다 네비게이션 강제 고정
      forceNavFixed();
    };

    // 초기 실행 및 주기적 실행
    forceNavFixed();
    handleScroll();
    
    // 주기적으로 네비게이션 위치 확인 및 강제 고정
    const intervalId = setInterval(forceNavFixed, 100);
    
    window.addEventListener('scroll', handleScroll, { passive: false });
    window.addEventListener('resize', forceNavFixed);
    window.addEventListener('orientationchange', forceNavFixed);
    
    return () => {
      clearInterval(intervalId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', forceNavFixed);
      window.removeEventListener('orientationchange', forceNavFixed);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      // Navigate to homepage with section anchor
      router.push(`/#${sectionId}`);
    }
    setMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    router.push('/');
  };

  return (
    <motion.nav 
      className={`navbar fixed top-0 left-0 w-full h-16 lg:h-20 z-[9999] transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg border-b border-gray-100' 
          : 'bg-white shadow-sm'
      }`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        WebkitTransform: 'translate3d(0, 0, 0)',
        transform: 'translate3d(0, 0, 0)',
        WebkitBackfaceVisibility: 'hidden',
        backfaceVisibility: 'hidden'
      }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28 h-full">
        <div className="left-nav flex items-center justify-between gap-2 lg:gap-8 h-full">
          {/* Logo */}
          <motion.div 
            className="full-logo flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
            onClick={navigateToHome}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
              <Image
                src="/images/group-4273188750.svg"
                alt="HashDam Icon"
                width={28}
                height={32}
                className="w-full h-auto"
                unoptimized
              />
            </div>
            <div className="logo flex items-center justify-center h-8 sm:h-9 lg:h-10">
              <Image
                src="/images/hash-dam0.svg"
                alt="HashDam"
                width={136}
                height={16}
                className="h-auto w-24 sm:w-28 lg:w-[136px]"
                unoptimized
              />
            </div>
          </motion.div>

          {/* Desktop Navigation Menu */}
          {showSectionNavigation && (
            <div className="nav-group hidden xl:flex items-center gap-2 overflow-hidden">
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'about' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('about')}
                whileHover={activeSection !== 'about' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.about}</span>
                {activeSection === 'about' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'features' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('features')}
                whileHover={activeSection !== 'features' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.features}</span>
                {activeSection === 'features' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'calculator' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('calculator')}
                whileHover={activeSection !== 'calculator' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.calculator}</span>
                {activeSection === 'calculator' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'applications' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('applications')}
                whileHover={activeSection !== 'applications' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.applications}</span>
                {activeSection === 'applications' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'process' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('process')}
                whileHover={activeSection !== 'process' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.process}</span>
                {activeSection === 'process' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'products' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('products')}
                whileHover={activeSection !== 'products' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.products}</span>
                {activeSection === 'products' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <motion.div 
                className={`nav-item px-3 py-2 flex items-center gap-1 cursor-pointer relative rounded-md ${
                  activeSection === 'pricing' ? 'text-primary-600 bg-primary-50' : 'text-neutral-900'
                }`}
                onClick={() => scrollToSection('pricing')}
                whileHover={activeSection !== 'pricing' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
                <span className="font-semibold text-sm leading-5">{t.nav.pricing}</span>
                {activeSection === 'pricing' && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600 rounded-full"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: 1, scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </motion.div>
              <Link href="/site" passHref>
                <motion.div 
                  className="nav-item px-3 py-2 flex items-center gap-1 cursor-pointer rounded-md text-neutral-900"
                  whileHover={menuItemHover}
                  whileTap={menuItemTap}
                >
                  <span className="font-semibold text-sm leading-5">{t.nav.site}</span>
                </motion.div>
              </Link>
            </div>
          )}

          {/* Mobile Menu Button & Language Button */}
          <div className="xl:hidden flex items-center gap-2">
            {/* Language Button for Mobile */}
            <LanguageButton className="md:hidden" />
            <motion.button
              className="flex items-center justify-center w-10 h-10 rounded-md text-neutral-900 hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-current rounded-full transition-transform duration-300 ease-in-out origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) rotate(45deg)'
                      : 'translate(-50%, -50%) translateY(-6px)'
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-current rounded-full transition-all duration-300 ease-in-out origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) scaleX(0)'
                      : 'translate(-50%, -50%)',
                    opacity: mobileMenuOpen ? 0 : 1
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-current rounded-full transition-transform duration-300 ease-in-out origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) rotate(-45deg)'
                      : 'translate(-50%, -50%) translateY(6px)'
                  }}
                />
              </div>
            </motion.button>
          </div>

          {/* Desktop Auth Buttons & Language Button */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4 flex-shrink-0">
            <LanguageButton className="mr-2" />
            <RippleEffect 
              className="hidden bg-white border-2 border-[#00aaff] rounded-md px-4 py-2 lg:px-6 lg:py-3 flex items-center justify-center shadow-md hover:bg-primary-50 transition-colors"
              rippleColor="rgba(0, 170, 255, 0.3)"
            >
              <span className="text-primary-600 font-semibold text-sm lg:text-base">{t.nav.signUp}</span>
            </RippleEffect>
            <RippleEffect 
              className="hidden bg-primary-600 border-2 border-primary-600 rounded-md px-4 py-2 lg:px-6 lg:py-3 flex items-center justify-center shadow-md hover:bg-primary-700 transition-colors"
              rippleColor="rgba(255, 255, 255, 0.3)"
            >
              <span className="text-white font-semibold text-sm lg:text-base">{t.nav.logIn}</span>
            </RippleEffect>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`xl:hidden fixed top-16 lg:top-20 left-0 w-full bg-white shadow-lg border-b border-gray-100 z-[9998] ${
          mobileMenuOpen ? 'block' : 'hidden'
        }`}
        style={{
          position: 'fixed',
          top: '64px', // h-16 = 64px
          left: 0,
          right: 0,
          zIndex: 9998,
          WebkitTransform: 'translate3d(0, 0, 0)',
          transform: 'translate3d(0, 0, 0)',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden'
        }}
        initial={{ opacity: 0, y: -20 }}
        animate={mobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 py-4">
          {showSectionNavigation && (
            <div className="space-y-2 mb-4">
              <motion.button 
                onClick={() => scrollToSection('about')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'about' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'about' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.about}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('features')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'features' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'features' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.features}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('calculator')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'calculator' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'calculator' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.calculator}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('applications')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'applications' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'applications' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.applications}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('process')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'process' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'process' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.process}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('products')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'products' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'products' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.products}
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('pricing')}
                className={`block w-full text-left px-4 py-3 font-semibold text-base rounded-md ${
                  activeSection === 'pricing' ? 'bg-primary-50 text-primary-600' : 'text-neutral-900'
                }`}
                whileHover={activeSection !== 'pricing' ? menuItemHover : {}}
                whileTap={menuItemTap}
              >
{t.nav.pricing}
              </motion.button>
              <Link href="/site" passHref>
                <motion.div 
                  className="block px-4 py-3 text-neutral-900 font-semibold text-base rounded-md cursor-pointer"
                  whileHover={menuItemHover}
                  whileTap={menuItemTap}
                  onClick={() => setMobileMenuOpen(false)}
                >
{t.nav.site}
                </motion.div>
              </Link>
            </div>
          )}

          {/* Mobile Auth Buttons - Hidden for now, can be used later */}
          <div className="pt-4 space-y-3 border-t border-gray-200 hidden">
            {/* Language Button removed - now in top nav bar */}
            {/* Auth buttons hidden but preserved for future use */}
            <RippleEffect 
              className="w-full bg-white border-2 border-[#00aaff] rounded-md px-4 py-3 flex items-center justify-center shadow-md hover:bg-primary-50 transition-colors"
              rippleColor="rgba(0, 170, 255, 0.3)"
            >
              <span className="text-primary-600 font-semibold text-base">{t.nav.signUp}</span>
            </RippleEffect>
            <RippleEffect 
              className="w-full bg-primary-600 border-2 border-primary-600 rounded-md px-4 py-3 flex items-center justify-center shadow-md hover:bg-primary-700 transition-colors"
              rippleColor="rgba(255, 255, 255, 0.3)"
            >
              <span className="text-white font-semibold text-base">{t.nav.logIn}</span>
            </RippleEffect>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navigation;
