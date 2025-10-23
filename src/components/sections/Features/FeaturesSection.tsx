'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import Image from 'next/image'
import { useTranslation } from '@/hooks/useTranslation'

// Features data will be retrieved from translations

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
}

const FeaturesSection = () => {
  const t = useTranslation();
  
  // Create features array from translation data
  const features = [
    {
      id: 1,
      title: t.features.items.growth.title,
      image: '/images/growth-10.svg',
      description: t.features.items.growth.description
    },
    {
      id: 2,
      title: t.features.items.multiCoin.title,
      image: '/images/multi-coin-10.svg',
      description: t.features.items.multiCoin.description
    },
    {
      id: 3,
      title: t.features.items.realAsset.title,
      image: '/images/real-asset-10.svg',
      description: t.features.items.realAsset.description
    },
    {
      id: 4,
      title: t.features.items.continuousValue.title,
      image: '/images/continuous-value-10.svg',
      description: t.features.items.continuousValue.description
    },
    {
      id: 5,
      title: t.features.items.transparentData.title,
      image: '/images/transparent-data0.svg',
      description: t.features.items.transparentData.description
    },
    {
      id: 6,
      title: t.features.items.costEffective.title,
      image: '/images/cost-effective0.svg',
      description: t.features.items.costEffective.description
    },
    {
      id: 7,
      title: t.features.items.expandable.title,
      image: '/images/expandable0.svg',
      description: t.features.items.expandable.description
    },
    {
      id: 8,
      title: t.features.items.differentiatedExperience.title,
      image: '/images/differentiated-experience0.svg',
      description: t.features.items.differentiatedExperience.description
    },
    {
      id: 9,
      title: t.features.items.globalCompatibility.title,
      image: '/images/global-compatibility0.svg',
      description: t.features.items.globalCompatibility.description
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 mb-6">
            {t.features.title}
          </h2>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.features.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              {/* Image */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 relative group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-[clamp(1.25rem,3vw,1.5rem)] font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>

              {/* Description */}
              <div className="description text-[clamp(0.875rem,2vw,1rem)] text-gray-600 leading-relaxed text-center whitespace-pre-line">
                {feature.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
