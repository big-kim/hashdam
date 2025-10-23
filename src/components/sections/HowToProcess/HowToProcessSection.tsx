'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { UserPlus, CreditCard, Share2, Zap, Wallet, ArrowRight, CheckCircle } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

const HowToProcessSection: React.FC = () => {
  const t = useTranslation();

  // Business Benefits Section color scheme
  const colors = [
    'rgba(138, 99, 210, 0.7)', // #8A63D2 at 70% opacity
    '#48D1CC',                  // #48D1CC at 100% opacity
    '#8A63D2'                   // #8A63D2 at 100% opacity
  ];

  const processSteps = [
    {
      id: 1,
      step: "Step 1",
      title: t.process.steps.signup.title,
      description: t.process.steps.signup.description,
      icon: UserPlus,
      color: colors[0]
    },
    {
      id: 2,
      step: "Step 2",
      title: t.process.steps.purchase.title,
      description: t.process.steps.purchase.description,
      icon: CreditCard,
      color: colors[1]
    },
    {
      id: 3,
      step: "Step 3",
      title: t.process.steps.distribute.title,
      description: t.process.steps.distribute.description,
      icon: Share2,
      color: colors[2]
    },
    {
      id: 4,
      step: "Step 4",
      title: t.process.steps.mining.title,
      description: t.process.steps.mining.description,
      icon: Zap,
      color: colors[0]
    },
    {
      id: 5,
      step: "Step 5",
      title: t.process.steps.withdraw.title,
      description: t.process.steps.withdraw.description,
      icon: Wallet,
      color: colors[1]
    }
  ];

  return (
    <section className="how-to-process-section bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div
          className="container flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center justify-start w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div
            className="header flex flex-col gap-3 sm:gap-4 md:gap-6 items-center justify-start w-full text-center"
            variants={staggerItem}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {t.process.title}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-4xl">
              {t.process.description}
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div 
            className="process-steps w-full max-w-6xl"
            variants={staggerItem}
          >
            <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                const isLast = index === processSteps.length - 1;
                
                return (
                  <motion.div
                    key={step.id}
                    className="step-container relative"
                    variants={staggerItem}
                  >
                    {/* Step Card */}
                    <motion.div
                      className="step-card bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        {/* Icon */}
                        <div 
                          className="icon-container w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: step.color }}
                        >
                          <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>

                        {/* Content */}
                        <div className="content flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <span 
                              className="step-number text-xs font-semibold px-2.5 py-1 rounded-md uppercase tracking-wide inline-block w-fit"
                              style={{ 
                                backgroundColor: step.color,
                                color: 'white'
                              }}
                            >
                              {step.step}
                            </span>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>

                        {/* Arrow for larger screens */}
                        {!isLast && (
                          <div className="hidden lg:flex items-center justify-center w-10 h-10 flex-shrink-0">
                            <ArrowRight className="w-5 h-5 text-gray-300" />
                          </div>
                        )}
                      </div>
                    </motion.div>

                    {/* Connecting Line for mobile */}
                    {!isLast && (
                      <div className="flex lg:hidden justify-center py-3">
                        <div className="w-0.5 h-6 bg-gray-200 rounded-full"></div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToProcessSection;