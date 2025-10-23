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
    if (typeof window === 'undefined') return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero-section relative w-full min-h-[90vh] bg-white overflow-hidden pt-16 lg:pt-20 pb-6 sm:pb-8 lg:pb-0">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={getImagePath("/images/Background.png")}
          alt="Hero background"
          width={1440}
          height={866}
          className="hidden lg:block w-full h-full object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-28 h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between h-full min-h-[calc(90vh-4rem)] lg:min-h-[calc(90vh-5rem)] gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start justify-center text-center lg:text-left space-y-6 lg:space-y-8 pt-8 lg:pt-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Shield Icon */}
            <motion.div 
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center"
              variants={staggerItem}
            >
              <Image
                src={getImagePath("/images/chield-light0.svg")}
                alt="Security shield"
                width={96}
                height={96}
                className="w-full h-full object-contain"
                unoptimized
              />
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              className="space-y-4 lg:space-y-6"
              variants={staggerItem}
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <TypingEffect
                  text={t.hero.title1}
                  speed={50}
                  className="block"
                  onComplete={() => setShowSecondLine(true)}
                />
                {showSecondLine && (
                  <TypingEffect
                    text={t.hero.title2}
                    speed={50}
                    className="block text-blue-600 mt-2"
                    onComplete={() => setShowThirdLine(true)}
                  />
                )}
              </h1>
              
              {showThirdLine && (
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {t.hero.description}
                </motion.p>
              )}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
              variants={staggerItem}
            >
              <Button
                variant="primary"
                size="lg"
                onClick={() => scrollToSection('calculator')}
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                <RippleEffect>
                  {t.hero.getStarted}
                </RippleEffect>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowComingSoonModal(true)}
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold"
              >
                {t.hero.apiDocument}
              </Button>
            </motion.div>

            {/* Essential Features */}
            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 pt-4"
              variants={staggerItem}
            >
              <div className="flex items-center gap-3">
                <Image
                  src={getImagePath("/images/essential-icon0.svg")}
                  alt="Essential feature"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  unoptimized
                />
                <span className="text-gray-700 font-medium">{t.hero.coinList}</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Image
                  src={getImagePath("/images/essential-icon0.svg")}
                  alt="Essential feature"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  unoptimized
                />
                <span className="text-gray-700 font-medium">{t.hero.packageInfo}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div 
            className="flex-1 flex items-center justify-center lg:justify-end relative"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Phone Container */}
              <motion.div 
                className="relative w-full aspect-[9/16] max-w-[320px] lg:max-w-[380px] mx-auto"
                animate={floatingAnimation}
              >
                {/* Phone Background */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-gray-900 to-black shadow-2xl"
                  style={{
                    backgroundImage: `url(${getImagePath('/images/i-phone-x0.png')})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Screen Content */}
                  <div className="absolute inset-4 rounded-[2rem] bg-white overflow-hidden">
                    <Image
                      src={getImagePath("/images/image-470.png")}
                      alt="App interface"
                      width={300}
                      height={600}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={pulseAnimation}
                >
                  <Image
                    src={getImagePath("/images/vector-90.svg")}
                    alt="Feature icon"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                    unoptimized
                  />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={enhancedPulseAnimation}
                >
                  <Image
                    src={getImagePath("/images/layer-20.svg")}
                    alt="Feature icon"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                    unoptimized
                  />
                </motion.div>
              </motion.div>

              {/* Cryptocurrency Icons */}
              <div className="absolute inset-0 pointer-events-none">
                {/* Floating crypto icons */}
                <motion.div 
                  className="absolute top-1/4 -left-8 w-12 h-12 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-390.png")} alt="LTC" width={48} height={48} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute top-1/3 -right-8 w-12 h-12 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.4
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-400.png")} alt="BELLS" width={48} height={48} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute bottom-1/3 -left-6 w-10 h-10 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-410.png")} alt="LKY" width={40} height={40} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute bottom-1/4 -right-6 w-10 h-10 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-430.png")} alt="PEP" width={40} height={40} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute top-2/3 left-1/4 w-8 h-8 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.0
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-440.png")} alt="JKC" width={32} height={32} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.2
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-420.png")} alt="DINGO" width={32} height={32} className="w-full h-full object-cover" unoptimized />
                </motion.div>

                <motion.div 
                  className="absolute bottom-1/2 left-1/3 w-8 h-8 rounded-full overflow-hidden shadow-lg"
                  animate={{
                    y: [0, -20, 0],
                    transition: {
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.4
                    }
                  }}
                >
                  <Image src={getImagePath("/images/image-450.png")} alt="SHIC" width={32} height={32} className="w-full h-full object-cover" unoptimized />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Coming Soon Modal */}
      <AnimatePresence>
        {showComingSoonModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComingSoonModal(false)}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.hero.comingSoon.title}</h3>
              <p className="text-gray-700 mb-6">{t.hero.comingSoon.message}</p>
              <Button
                variant="primary"
                onClick={() => setShowComingSoonModal(false)}
                className="w-full"
              >
                {t.hero.comingSoon.closeButton}
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;