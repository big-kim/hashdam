'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button, RippleEffect, TypingEffect } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';
import { getImagePath } from '@/utils/imagePath';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, staggerItem, floatingAnimation, hoverScale, hoverLift, pulseAnimation, enhancedPulseAnimation, mobileScrollContainer, mobileScrollItem, mobileContentFloat, mobileContentPulse, menuItemHover, menuItemTap } from '@/lib/animations';

const HeroSection: React.FC = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [showThirdLine, setShowThirdLine] = useState(false);
  const [showComingSoonModal, setShowComingSoonModal] = useState(false);
  const t = useTranslation();

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
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
    if (typeof window === 'undefined') return;

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

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section relative w-full min-h-[90vh] bg-white overflow-hidden pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-0">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={getImagePath("/images/background.png")}
          alt="Hero background"
          width={1440}
          height={866}
          className="hidden lg:block w-full h-full object-cover"
          priority
          unoptimized
        />
        {/* Mobile background - simple white */}
        <div className="lg:hidden absolute inset-0 bg-white" />
      </div>



      {/* Main Container */}
      <div className="container relative w-full max-w-[1440px] mx-auto px-3 sm:px-6 md:px-8 lg:px-28 pt-12 sm:pt-16 md:pt-20 lg:pt-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-[100px]">
        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-8 items-center lg:items-center lg:justify-between">
          {/* Content */}
          <motion.div 
            className="content flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-5 w-full lg:w-[600px] lg:pt-8 lg:ml-8 lg:mr-6 relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            {/* Header Content */}
            <motion.div 
              className="frame-1171275935 flex flex-col gap-4 sm:gap-5 lg:gap-6 w-full"
              variants={staggerItem}
            >
              {/* Badge */}
              <motion.div 
                className="frame-1171275934 border border-borders-secondary rounded-sm px-2 py-1 sm:px-3 sm:py-1.5 pl-1.5 sm:pl-2 flex items-center gap-1 sm:gap-1.5 w-fit mx-auto sm:mx-0"
                variants={fadeInUp}
                whileHover={hoverScale}
              >
                <Image
                  src={getImagePath("/images/chield-light0.svg")}
                  alt="Shield icon"
                  width={24}
                  height={24}
                  className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5"
                  unoptimized
                />
                <span className="text-text-link font-semibold text-responsive-small leading-normal whitespace-nowrap">
                  {t.hero.badge}
                </span>
              </motion.div>

              {/* Header */}
              <motion.div 
                className="header flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 w-full text-center sm:text-left"
                variants={fadeInUp}
              >
                <motion.h1 
                  className="font-display font-bold tracking-tight text-responsive-hero"
                  variants={staggerItem}
                >
                  <span className="block">
                    <TypingEffect 
                        text={t.hero.title1}
                        speed={100}
                        delay={500}
                        className="text-neutral-900"
                        onComplete={() => setShowSecondLine(true)}
                        showCursor={false}
                      />
                  </span>
                  {showSecondLine && (
                    <span className="block text-primary-600">
                      <TypingEffect 
                        text={t.hero.title2}
                        speed={100}
                        delay={200}
                        onComplete={() => setShowThirdLine(true)}
                        showCursor={false}
                      />
                    </span>
                  )}
                  {showThirdLine && (
                    <span className="block text-neutral-900">
                      <TypingEffect 
                        text={t.hero.title3}
                        speed={100}
                        delay={200}
                        showCursor={true}
                        cursorChar="|"
                      />
                    </span>
                  )}
                </motion.h1>
                <p className="text-neutral-700 font-normal text-responsive-body w-full px-0.5 sm:px-0">
                  {t.hero.description}
                </p>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="ct-as flex flex-row items-center justify-center lg:justify-start gap-[15px] w-full px-0.5 sm:px-0"
              variants={fadeInUp}
            >
              <motion.div
                className="w-auto"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 170, 255, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                animate={enhancedPulseAnimation}
              >
                <RippleEffect 
                  rippleColor="rgba(255, 255, 255, 0.4)"
                  className="button bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-lg inline-flex"
                  onClick={() => setShowComingSoonModal(true)}
                >
                  <div className="button-base px-[15px] py-2 sm:py-3 md:py-4 flex items-center justify-center gap-1 sm:gap-2">
                    <span className="text-white font-semibold text-sm sm:text-responsive-body leading-normal">{t.hero.getStarted}</span>
                  </div>
                </RippleEffect>
              </motion.div>
              <motion.div
                className="w-auto"
                whileHover={{ scale: 1.05, borderColor: "#0066cc" }}
                whileTap={{ scale: 0.95 }}
              >
                <RippleEffect 
                  rippleColor="rgba(0, 170, 255, 0.3)"
                  className="button2 border-2 border-text-link rounded-lg hover:bg-primary-50 transition-colors inline-flex"
                >
                  <div className="button-base px-[10px] py-2 sm:py-3 md:py-4 flex items-center justify-center gap-1 sm:gap-2">
                    <Image
                      src={getImagePath("/images/essential-icon0.svg")}
                      alt="Essential icon"
                      width={24}
                      height={24}
                      className="flex-shrink-0 w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6"
                      unoptimized
                    />
                    <span className="text-text-link font-semibold text-sm sm:text-responsive-body leading-normal">{t.hero.apiDocument}</span>
                  </div>
                </RippleEffect>
              </motion.div>
            </motion.div>

            {/* Feature Badges */}
            <motion.div 
              className="frame-1171275937 flex flex-col gap-2 sm:gap-2.5 lg:gap-3 w-full px-0.5 sm:px-0"
              variants={fadeInUp}
            >
              <motion.div 
                className="frame-1171275930 border border-borders-secondary rounded-md px-1.5 py-2 flex items-center justify-center w-fit mx-auto sm:mx-0"
                whileHover={hoverLift}
              >
                <span className="text-text-link font-medium text-responsive-small leading-normal text-center">
                  {t.hero.coinList}
                </span>
              </motion.div>
              <motion.div 
                  className="frame-1171275936 flex flex-col sm:flex-row items-center sm:items-start gap-1.5 sm:gap-2 lg:gap-3 w-full"
                variants={staggerItem}
              >
                <motion.div 
                  className="frame-1171275931 border border-borders-secondary rounded-md px-1.5 py-2 flex items-center justify-center w-fit sm:w-auto mx-auto sm:mx-0"
                  whileHover={hoverLift}
                >
                  <span className="text-text-link font-medium text-responsive-small leading-normal text-center whitespace-nowrap">
                    {t.hero.packageInfo}
                  </span>
                </motion.div>
                <motion.div 
                  className="frame-1171275933 border border-borders-secondary rounded-md px-1.5 py-2 flex items-center justify-center w-fit sm:w-auto mx-auto sm:mx-0"
                  whileHover={hoverLift}
                >
                  <span className="text-text-link font-medium text-responsive-small leading-normal text-center whitespace-nowrap">
                    {t.hero.transparencyInfo}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Mobile Preview - iPhone 디자인 기반 */}
          <motion.div 
            className="frame-1171275946 w-full lg:w-auto flex items-center justify-center lg:justify-end relative flex-shrink-0 mx-auto lg:mx-0 mt-4 sm:mt-6 md:mt-8 lg:mt-0 lg:mt-[42px] lg:-ml-[220px]"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="mobile relative overflow-hidden"
              style={{
                width: 'clamp(280px, 25vw, 360px)',
                height: 'clamp(560px, 50vw, 720px)',
                background: 'transparent',
                borderRadius: '42px',
                clipPath: 'inset(0% 0.8% 0% 0.8% round 42px)',
                isolation: 'isolate',
                WebkitClipPath: 'inset(0% 0.8% 0% 0.8% round 42px)',
                boxShadow: '0 35px 70px rgba(0, 0, 0, 0.35), 0 20px 40px rgba(0, 0, 0, 0.25), 0 10px 20px rgba(0, 0, 0, 0.15)',
                transform: 'perspective(1000px) rotateX(5deg)',
                transformStyle: 'preserve-3d'
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 2,
                boxShadow: '0 45px 90px rgba(0, 0, 0, 0.4), 0 25px 50px rgba(0, 0, 0, 0.3), 0 15px 30px rgba(0, 0, 0, 0.2)',
                transition: { duration: 0.3 }
              }}
              animate={{
                y: [0, -10, 0],
                transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            >
              {/* Mobile Content */}
              <motion.div 
                className="frame-1171275947 absolute bg-white w-[87.21%] h-[94.42%] right-[6.54%] left-[6.25%] bottom-[2.77%] top-[2.81%] overflow-hidden rounded-[35px]"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={mobileScrollContainer}
              >
                {/* Mining Image */}
                <motion.div 
                  className="frame-1171275948 absolute bg-white rounded-[15px] shadow-[4px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden"
                  style={{
                    width: 'clamp(180px, 20vw, 230px)',
                    height: 'clamp(104px, 11.5vw, 132px)',
                    left: 'clamp(18px, 2.5vw, 22px)',
                    top: 'clamp(100px, 13vw, 125px)'
                  }}
                  variants={mobileScrollItem}
                  animate={mobileContentFloat}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.15)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={getImagePath("/images/image-470.png")}
                    alt="Mining visualization"
                    width={221}
                    height={134}
                    className="absolute left-0 top-0 w-full h-full object-cover"
                    unoptimized
                    onError={(e) => e.currentTarget.style.display = 'none'}
                  />
                </motion.div>

                {/* App Title */}
                <motion.h2 
                  className="hashreward absolute text-[#065780] font-['Montserrat'] font-bold leading-[20px]"
                  style={{
                    left: 'clamp(18px, 2.5vw, 22px)',
                    top: 'clamp(62px, 8.5vw, 78px)',
                    fontSize: 'clamp(14px, 2vw, 18px)'
                  }}
                  variants={mobileScrollItem}
                  whileHover={{ scale: 1.05, color: "#0891b2" }}
                >
                  Hashreward
                </motion.h2>
                <motion.p 
                  className="hi-hashdam absolute text-black font-['NicoMoji'] leading-[20px] font-normal"
                  style={{
                    left: 'clamp(18px, 2.5vw, 22px)',
                    top: 'clamp(44px, 6vw, 56px)',
                    fontSize: 'clamp(10px, 1.4vw, 12px)'
                  }}
                  variants={mobileScrollItem}
                  whileHover={{ scale: 1.1, color: "#374151" }}
                >
                  Hi Hashdam
                </motion.p>

                {/* HashPower Distribution */}
                <motion.h3 
                  className="hash-power-distribution absolute text-[#3b4cca] font-['Montserrat'] font-semibold leading-[20px]"
                  style={{
                    left: 'clamp(70px, 9vw, 88px)',
                    top: 'clamp(242px, 31vw, 302px)',
                    fontSize: 'clamp(13px, 1.8vw, 16px)'
                  }}
                  variants={mobileScrollItem}
                  animate={mobileContentPulse}
                  whileHover={{ scale: 1.1, color: "#4f46e5" }}
                >
                  HashPower Distribution
                </motion.h3>

                {/* HashPower Stats */}
                <motion.div 
                  className="frame-1171275686 absolute flex flex-col gap-[5px] items-start justify-start"
                  style={{
                    left: 'clamp(10px, 1.5vw, 12px)',
                    top: 'clamp(275px, 35vw, 344px)',
                    width: 'clamp(220px, 24vw, 287px)'
                  }}
                  variants={mobileScrollItem}
                  animate={mobileContentFloat}
                >
                  <h4 className="hash-power text-[#111110] font-['WorkSans'] font-semibold w-full relative" style={{ fontSize: 'clamp(14px, 2vw, 18px)' }}>Hash Power</h4>
                  <motion.div 
                    className="frame-1171275667 bg-[#fff7e6] rounded-[10px] px-[10px] py-0 flex flex-col gap-1 items-start justify-center w-full shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    style={{ height: 'clamp(68px, 9vw, 84px)' }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="frame-1171275664 w-full relative" style={{ height: 'clamp(20px, 2.5vw, 24px)' }}>
                      <span className="absolute right-0 top-0 text-[#111110] font-['Inter'] font-semibold leading-[22px]" style={{ fontSize: 'clamp(11px, 1.5vw, 14px)' }}>254 Mh/s</span>
                      <span className="absolute left-0 top-0 text-[#111110] font-['Inter'] font-semibold leading-[22px]" style={{ fontSize: 'clamp(11px, 1.5vw, 14px)' }}>Hashpool</span>
                    </div>
                    <div className="frame-1171275665 w-full relative" style={{ height: 'clamp(16px, 2vw, 19px)' }}>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#292826] font-['Inter'] tracking-[-0.025em]" style={{ fontSize: 'clamp(10px, 1.3vw, 12px)' }}>248 Mh/s</span>
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#292826] font-['Inter'] tracking-[-0.025em]" style={{ fontSize: 'clamp(10px, 1.3vw, 12px)' }}>24H Hashrate</span>
                    </div>
                    <div className="frame-1171275666 w-full relative" style={{ height: 'clamp(16px, 2vw, 19px)' }}>
                      <span className="absolute right-0 top-1/2 -translate-y-1/2 text-[#292826] font-['Inter'] tracking-[-0.025em]" style={{ fontSize: 'clamp(10px, 1.3vw, 12px)' }}>0.5%</span>
                      <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[#292826] font-['Inter'] tracking-[-0.025em]" style={{ fontSize: 'clamp(10px, 1.3vw, 12px)' }}>Reject Rate</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Vector Graphic */}
                <motion.div 
                  className="absolute overflow-visible"
                  style={{
                    left: 'clamp(24px, 4vw, 36px)',
                    top: 'clamp(155px, 20vw, 195px)',
                    width: 'clamp(190px, 24vw, 235px)',
                    height: 'clamp(105px, 13vw, 130px)'
                  }}
                  variants={mobileScrollItem}
                  animate={mobileContentFloat}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 2,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={getImagePath("/images/vector-90.svg")}
                    alt="Chart visualization"
                    width={212}
                    height={117}
                    className="w-full h-full"
                    unoptimized
                  />
                </motion.div>

                {/* Mining Profit Section */}
                <motion.div 
                  className="frame-1171275950 absolute flex flex-col gap-[10px] items-center justify-start"
                  style={{
                    left: 'clamp(10px, 1.5vw, 12px)',
                    top: 'clamp(383px, 49vw, 479px)',
                    width: 'clamp(230px, 30vw, 288px)'
                  }}
                  variants={mobileScrollItem}
                  animate={mobileContentFloat}
                >
                  <h4 className="mining-profit text-[#3b4cca] text-center font-['Montserrat'] font-semibold leading-[20px] w-full" style={{ fontSize: 'clamp(13px, 1.8vw, 16px)' }}>
                    Mining Profit
                  </h4>
                  <motion.div 
                    className="mining-coin bg-[#eefcff] rounded-[5px] p-[10px] flex flex-col items-start justify-between w-full shadow-[2px_4px_4px_0px_rgba(0,0,0,0.25)]"
                    style={{ height: 'clamp(98px, 12.5vw, 122px)' }}
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)" }}
                  >
                    <motion.div 
                      className="frame-1171275943 flex items-end justify-between w-full"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-390.png")} alt="LTC" width={38} height={38} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                      <motion.div 
                        className="dogecoin-badge bg-[#ba9f33] rounded-[47.27px] relative"
                        style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }}
                        variants={staggerItem}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        <Image
                          src={getImagePath("/images/layer-20.svg")}
                          alt="DOGE"
                          width={29}
                          height={29}
                          className="absolute w-auto h-auto"
                          style={{ left: 'clamp(4.2px, 0.6vw, 5.2px)', top: 'clamp(3.6px, 0.5vw, 4.5px)' }}
                          unoptimized
                        />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-400.png")} alt="BELLS" width={38} height={38} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-410.png")} alt="LKY" width={38} height={39} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(35px, 4.6vw, 43px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                    </motion.div>
                    <motion.div 
                      className="frame-1171275944 flex items-end justify-between w-full"
                      initial="hidden"
                      animate="visible"
                      variants={staggerContainer}
                    >
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-430.png")} alt="PEP" width={38} height={38} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-440.png")} alt="JKC" width={35} height={35} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 39px)', height: 'clamp(34px, 4.5vw, 39px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-420.png")} alt="DINGO" width={38} height={38} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                      <motion.div variants={staggerItem}>
                        <Image src={getImagePath("/images/image-450.png")} alt="SHIC" width={38} height={38} className="flex-shrink-0 object-cover" style={{ width: 'clamp(34px, 4.5vw, 42px)', height: 'clamp(34px, 4.5vw, 42px)' }} unoptimized onError={(e) => e.currentTarget.style.display = 'none'} />
                      </motion.div>
                    </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>

              {/* iPhone X Frame */}
              <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                style={{
                  backgroundImage: `url(${getImagePath("/images/i-phone-x0.png")})`,
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  clipPath: 'inset(0% 0.8% 0% 0.8% round 42px)',
                  WebkitClipPath: 'inset(0% 0.8% 0% 0.8% round 42px)',
                  borderRadius: '42px'
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoonModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[10001]" onClick={() => setShowComingSoonModal(false)}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 max-w-md mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.hero.comingSoon.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t.hero.comingSoon.message}
                </p>
                <button
                  onClick={() => setShowComingSoonModal(false)}
                  className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  {t.hero.comingSoon.closeButton}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;