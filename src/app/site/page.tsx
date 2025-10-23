'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { fadeInUp, staggerContainer, staggerItem, floatingAnimation, hoverScale, hoverLift, pulseAnimation, enhancedPulseAnimation, mobileScrollContainer, mobileScrollItem, mobileContentFloat, mobileContentPulse, menuItemHover, menuItemTap } from '@/lib/animations'
import { CTASection, FooterSection } from '@/components/sections'
import { Button, RippleEffect, TypingEffect } from '@/components/ui'
import { useTranslation } from '@/hooks/useTranslation'
import MiningGallery from '@/components/sections/MiningGallery'
import { getImagePath } from '@/utils/imagePath'


const MiningSitePage = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslation();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined') return;
    
    // Navigate to homepage with section anchor
    router.push(`/#${sectionId}`);
    setMobileMenuOpen(false); // Close mobile menu after click
  };

  // Scroll detection for sticky header
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    // IntersectionObserver 지원 확인
    if (!window.IntersectionObserver) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = ['about', 'comparison', 'features', 'asic', 'calculator', 'applications', 'business', 'process', 'products', 'statistics', 'pricing', 'contact'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <motion.nav 
        className={`navbar fixed top-0 left-0 w-full h-16 lg:h-20 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white shadow-lg border-b border-gray-100' 
            : 'bg-white shadow-sm lg:shadow-none'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28 h-full">
          <div className="left-nav flex items-center justify-between gap-2 lg:gap-8 h-full">
            {/* Logo */}
            <motion.div 
              className="full-logo flex items-center gap-1.5 flex-shrink-0 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  router.push('/');
                }
              }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
                <Image src={getImagePath("/images/group-4273188750.svg")}
                  alt="HashDam Icon"
                  width={28}
                  height={32}
                  className="w-full h-auto"
                  unoptimized
                />
              </div>
              <div className="logo flex items-center justify-center h-8 sm:h-9 lg:h-10">
                <Image src={getImagePath("/images/hash-dam0.svg")}
                  alt="HashDam"
                  width={136}
                  height={16}
                  className="h-auto w-24 sm:w-28 lg:w-[136px]"
                  unoptimized
                />
              </div>
            </motion.div>

            {/* Desktop Navigation Menu */}
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

            {/* Desktop Auth Buttons */}
            <div className="hidden md:hidden items-center gap-2 lg:gap-4 flex-shrink-0">
              <RippleEffect 
                className="bg-white border border-[#00aaff] rounded-sm px-4 py-2 flex items-center justify-center shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] hover:bg-primary-50 transition-colors"
                rippleColor="rgba(0, 170, 255, 0.3)"
              >
                <span className="text-primary-600 font-medium text-sm leading-5 whitespace-nowrap">{t.nav.signUp}</span>
              </RippleEffect>
              <RippleEffect 
                className="bg-white border border-[#00aaff] rounded-sm px-4 py-2 flex items-center justify-center shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)] hover:bg-primary-50 transition-colors"
                rippleColor="rgba(0, 170, 255, 0.3)"
              >
                <span className="text-primary-600 font-medium text-sm leading-5 whitespace-nowrap">{t.nav.signIn}</span>
              </RippleEffect>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-neutral-900 rounded transition-all duration-300 origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) rotate(45deg)'
                      : 'translate(-50%, -50%) translateY(-6px)'
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-neutral-900 rounded transition-all duration-300 origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) scaleX(0)'
                      : 'translate(-50%, -50%)'
                  }}
                />
                <span
                  className="absolute left-1/2 top-1/2 block h-0.5 w-full bg-neutral-900 rounded transition-all duration-300 origin-center"
                  style={{
                    transform: mobileMenuOpen
                      ? 'translate(-50%, -50%) rotate(-45deg)'
                      : 'translate(-50%, -50%) translateY(6px)'
                  }}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          style={{ top: '64px' }}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen ? 'max-h-[calc(100vh-64px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ top: '64px' }}
        >
          <div className="px-4 py-6 space-y-1 max-h-[calc(100vh-64px)] overflow-y-auto">
            {/* Mobile Navigation Links */}
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

            {/* Mobile Auth Buttons */}
            <div className="hidden pt-4 space-y-3 border-t border-gray-200 mt-4">
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
                <span className="text-white font-semibold text-base">{t.nav.signIn}</span>
              </RippleEffect>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-[907px] lg:h-[907px] flex items-center justify-center overflow-hidden pt-28 sm:pt-32 md:pt-36 lg:pt-20 bg-white"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 w-full h-full">
          {/* Sky Blue Blur Effect - Enhanced */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-bl from-[#5DADE2] via-[#5DADE2]/60 to-transparent rounded-full blur-3xl opacity-50"></div>
          {/* Background SVG */}
          <Image src={getImagePath("/images/mining-site/bg0.svg")}
            alt="Background"
            width={1440}
            height={752}
            className="absolute top-0 left-0 w-full h-auto object-cover"
                  unoptimized
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <motion.div 
            className="flex flex-col gap-2 items-center justify-center mb-8 lg:mb-16 px-4"
            variants={staggerItem}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-[48px] leading-tight lg:leading-[60px] font-bold text-[#111827] text-center tracking-[-0.025em] max-w-[892px]"
              variants={fadeInUp}
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              {t.site.title}
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg lg:text-[18px] leading-relaxed lg:leading-[28px] text-[#111827] text-center max-w-[892px]"
              variants={fadeInUp}
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {t.site.description}
            </motion.p>
          </motion.div>

          {/* Partner Cards Section */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 lg:gap-[31px] items-center justify-center px-[10px] py-[10px] w-full"
            variants={staggerContainer}
          >
            {/* BITYOU Card */}
            <motion.div 
              className="bg-white rounded-[10px] border border-[rgba(59,76,202,0.2)] p-[8px] flex flex-col gap-[16px] items-center justify-flex-start w-full max-w-[291px] lg:w-[291px] h-[304px] shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[4px_4px_8px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-flex-start">
                <h3 className="text-[26px] leading-[46px] font-bold text-[#2472b1] text-center w-[266px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.site.bityou.title}
                </h3>
                <div className="bg-[#fafafa] rounded-[16px] border border-[#a9a9a9] p-[12px] flex items-center justify-center w-[192px] h-[144px] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)]">
                   <Image
                     src={getImagePath("/images/mining-site/bityou-logo-20.png")}
                     alt="BITYOU Logo"
                     width={151}
                     height={32}
                     className="object-cover"
                   />
                 </div>
              </div>
              <p className="text-[14px] leading-[22px] text-[#111827] text-center w-[273px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.site.bityou.description}
              </p>
            </motion.div>

            {/* HashDam Card */}
            <motion.div 
              className="bg-white rounded-[10px] border border-[rgba(59,76,202,0.2)] p-[8px] flex flex-col gap-[16px] items-center justify-flex-start w-full max-w-[292px] lg:w-[292px] h-[304px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-flex-start">
                <h3 className="text-[26px] leading-[46px] font-bold text-[#2472b1] text-center w-[266px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.site.hashdam.title}
                </h3>
                <div className="bg-[#fafafa] rounded-[16px] border border-[#a9a9a9] p-[12px] flex items-center justify-center w-[192px] h-[144px] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)]">
                   <div className="flex items-center gap-[5px]">
                     <div className="flex items-center justify-center w-[32px] h-[32px] p-[2px]">
                       <Image src={getImagePath("/images/mining-site/group-4273188750.svg")}
                         alt="HashDam Icon"
                         width={26.6}
                         height={30.4}
                         className="object-contain"
                  unoptimized
                       />
                     </div>
                     <div className="rounded-[4px] p-[4px] flex items-center justify-center h-[32px]">
                       <Image src={getImagePath("/images/mining-site/hash-dam1.svg")}
                         alt="HashDam Logo"
                         width={124.3}
                         height={14.4}
                         className="object-contain"
                  unoptimized
                       />
                     </div>
                   </div>
                 </div>
              </div>
              <p className="text-[14px] leading-[22px] text-[#111827] text-center w-[273px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.site.hashdam.description}
              </p>
            </motion.div>

            {/* MCOM Card */}
            <motion.div 
              className="bg-white rounded-[10px] border border-[rgba(59,76,202,0.2)] p-[8px] flex flex-col gap-[16px] items-center justify-flex-start w-full max-w-[291px] lg:w-[291px] h-[304px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-[6px_6px_8px_0px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-105"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="flex flex-col gap-[16px] items-center justify-flex-start">
                <h3 className="text-[26px] leading-[46px] font-bold text-[#2472b1] text-center w-[266px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                  {t.site.mcom.title}
                </h3>
                <div className="bg-[#fafafa] rounded-[16px] border border-[#a9a9a9] p-[12px] flex items-center justify-center w-[192px] h-[144px] shadow-[2px_2px_2px_0px_rgba(0,0,0,0.25)]">
                   <div className="relative w-[142px] h-[142px] flex items-center justify-center">
                     <Image
                       src={getImagePath("/images/mining-site/whats-app-2025-07-02-19-45-08-44249603-10.png")}
                       alt="MCOM Logo"
                       width={120}
                       height={120}
                       className="object-cover absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                     />
                   </div>
                 </div>
              </div>
              <p className="text-[14px] leading-[22px] text-[#071039] text-center w-[273px]" style={{ fontFamily: 'Inter, sans-serif' }}>
                {t.site.mcom.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div 
            className="text-center mt-8"
            variants={fadeInUp}
          >
            <p className="text-[18px] leading-[28px] font-semibold text-[#111827]" style={{ fontFamily: 'Inter, sans-serif' }}>
              {t.site.partnership}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mining Company Section */}
      <motion.section 
        className="py-20 bg-gray-50"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            variants={staggerItem}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.site.miningCompany.title}</h2>
            <p className="text-xl text-gray-600">
              {t.site.miningCompany.description}
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center"
            variants={staggerContainer}
          >
            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center w-full max-w-[280px] h-[200px] flex flex-col justify-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={getImagePath("/images/mining-site/book-fill0.svg")}
                  alt="License"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <p className="text-gray-700 font-medium text-sm leading-tight">{t.site.miningCompany.license}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center w-full max-w-[280px] h-[200px] flex flex-col justify-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={getImagePath("/images/mining-site/atom-fill0.svg")}
                  alt="Environment"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <p className="text-gray-700 font-medium text-sm leading-tight">{t.site.miningCompany.environment}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center w-full max-w-[280px] h-[200px] flex flex-col justify-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={getImagePath("/images/mining-site/dimond-alt-fill0.svg")}
                  alt="Compliance"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <p className="text-gray-700 font-medium text-sm leading-tight">{t.site.miningCompany.compliance}</p>
            </motion.div>

            <motion.div 
              className="bg-white rounded-2xl p-8 shadow-lg text-center w-full max-w-[280px] h-[200px] flex flex-col justify-center"
              variants={staggerItem}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Image src={getImagePath("/images/mining-site/book-fill4.svg")}
                  alt="Transparency"
                  width={32}
                  height={32}
                  unoptimized
                />
              </div>
              <p className="text-gray-700 font-medium text-sm leading-tight">{t.site.miningCompany.transparency}</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Gallery Section */}
      <MiningGallery />

      {/* CTA Section */}
      <CTASection />
      
      {/* Footer Section */}
      <FooterSection />
    </div>
  )
}

export default MiningSitePage
