'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Check, Calendar, TrendingUp, Star, Infinity, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

// Type definition for product plan
interface ProductPlan {
  id: string;
  title: string;
  status?: string | null; // Optional status property
  description: string;
  features: string[];
  buttonText: string;
  buttonActive: boolean;
  color: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  bestValue: boolean;
}

const ProductPricingSection: React.FC = () => {
  const t = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Color combinations from Business Benefits section
  const colors = [
    '#8A63D2',                  // Purple
    '#48D1CC',                  // Teal
    'rgba(138, 99, 210, 0.7)'   // Purple with 70% opacity
  ];

  const productPlans: ProductPlan[] = [
    {
      id: '1year',
      title: t.productPricing.plans.oneYear.title,
      status: t.productPricing.plans.oneYear.status,
      description: t.productPricing.plans.oneYear.description,
      features: t.productPricing.plans.oneYear.features,
      buttonText: t.productPricing.plans.oneYear.buttonText,
      buttonActive: false,
      color: colors[0], // Purple
      icon: Calendar,
      bestValue: false
    },
    {
      id: '2year',
      title: t.productPricing.plans.twoYear.title,
      status: t.productPricing.plans.twoYear.status,
      description: t.productPricing.plans.twoYear.description,
      features: t.productPricing.plans.twoYear.features,
      buttonText: t.productPricing.plans.twoYear.buttonText,
      buttonActive: false,
      color: colors[1], // Teal
      icon: TrendingUp,
      bestValue: false
    },
    {
      id: '3year',
      title: t.productPricing.plans.threeYear.title,
      status: null,
      description: t.productPricing.plans.threeYear.description,
      features: t.productPricing.plans.threeYear.features,
      buttonText: t.productPricing.plans.threeYear.buttonText,
      buttonActive: true,
      color: colors[0], // Purple
      icon: Star,
      bestValue: true
    },
    {
      id: 'unlimited',
      title: t.productPricing.plans.unlimited.title,
      status: t.productPricing.plans.unlimited.status,
      description: t.productPricing.plans.unlimited.description,
      features: t.productPricing.plans.unlimited.features,
      buttonText: t.productPricing.plans.unlimited.buttonText,
      buttonActive: false,
      color: colors[2], // Purple with opacity
      icon: Infinity,
      bestValue: false
    }
  ];

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Carousel navigation functions
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1;
      return next >= productPlans.length ? productPlans.length - 1 : next;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const previous = prev - 1;
      return previous < 0 ? 0 : previous;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch handlers for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;
    
    // Left swipe (next slide)
    if (distance > minSwipeDistance && currentSlide < productPlans.length - 1) {
      nextSlide();
    }
    // Right swipe (previous slide)
    else if (distance < -minSwipeDistance && currentSlide > 0) {
      prevSlide();
    }
    
    // Reset touch positions
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Product Plan Card Component
  const ProductPlanCard = ({ plan, index }: { plan: ProductPlan, index: number }) => (
    <motion.div
      className="relative w-full max-w-[300px] mx-auto h-full"
      variants={staggerItem}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Best Value Badge */}
      {plan.bestValue && (
        <div 
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1.5 rounded-lg shadow-lg rotate-3"
          style={{ backgroundColor: '#8A63D2' }}
        >
          <span className="text-xs font-bold text-white whitespace-nowrap">
            {t.productPricing.bestValue}
          </span>
        </div>
      )}

      {/* Card */}
      <div 
        className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 flex flex-col relative shadow-lg hover:shadow-xl transition-all duration-300 group w-full h-full min-h-[520px]"
        style={{ borderTopColor: plan.color, borderTopWidth: '3px' }}
      >
        {/* Header */}
        <div className="flex flex-col gap-5 flex-shrink-0">
          {/* Product Icon */}
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300"
            style={{ borderColor: plan.color, backgroundColor: `${plan.color}15` }}
          >
            <plan.icon 
              className="w-8 h-8"
              style={{ color: plan.color }}
            />
          </div>
          
          {/* Title and Status */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="text-gray-900 text-left font-semibold text-2xl">
                {plan.title}
              </h3>
              {plan.status && (
                <div 
                  className="px-3 py-1 rounded-lg"
                  style={{ backgroundColor: plan.color }}
                >
                  <span className="text-xs font-semibold text-white">
                    {plan.status}
                  </span>
                </div>
              )}
            </div>
            <p className="text-gray-600 text-left text-sm">
              {plan.description}
            </p>
          </div>
        </div>

        {/* Features - Flexible content area */}
        <div className="flex flex-col gap-3 flex-grow my-6">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-2">
              <Check className="w-4 h-4 flex-shrink-0" style={{ color: plan.color }} />
              <span className="text-gray-700 text-left text-sm">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button - Fixed at bottom */}
        <div className="flex-shrink-0 mt-auto">
          <button
            className={`w-full py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all duration-300 ${
              plan.buttonActive
                ? 'text-white shadow-lg hover:shadow-xl'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
            style={plan.buttonActive 
              ? { backgroundColor: plan.color, borderColor: plan.color } 
              : { borderColor: plan.color }
            }
          >
            {plan.buttonText}
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="py-20 px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div
          className="max-w-[1440px] mx-auto flex flex-col gap-20 items-center justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div 
            className="section-heading flex flex-col gap-2 items-center justify-start text-center"
            variants={staggerItem}
          >
            <h2 className="text-gray-900 text-center font-bold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight">
              {t.productPricing.title}
            </h2>
            <p className="text-gray-600 text-center text-base sm:text-lg leading-7 max-w-4xl">
              {t.productPricing.description}
            </p>
          </motion.div>

          {/* Product Plans */}
          <motion.div 
            className="w-full"
            variants={staggerItem}
          >
            {/* Desktop Layout */}
            <div className="hidden md:flex flex-col lg:flex-row gap-5 items-stretch justify-center">
              {productPlans.map((plan, index) => (
                <ProductPlanCard key={plan.id} plan={plan} index={index} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="md:hidden relative w-full">
              {/* Simple Card Display - Show one card at a time */}
              <div 
                className="relative w-full min-h-[500px] flex items-center justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Current Card */}
                <div 
                  className="w-full max-w-[320px] mx-auto px-4"
                  key={`card-${currentSlide}`}
                >
                  <ProductPlanCard plan={productPlans[currentSlide]} index={currentSlide} />
                </div>

                {/* Navigation Buttons - Always show both, but disable when needed */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-40 border border-gray-200 ${
                    currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                  }`}
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                
                <button
                  onClick={nextSlide}
                  disabled={currentSlide === productPlans.length - 1}
                  className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-40 border border-gray-200 ${
                    currentSlide === productPlans.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-100'
                  }`}
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              {/* Dot Indicators */}
              <div className="flex justify-center mt-4 gap-3">
                {productPlans.map((_, index) => (
                  <div
                    key={index}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-4 h-4 bg-blue-500' 
                        : 'w-4 h-4 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPricingSection;
