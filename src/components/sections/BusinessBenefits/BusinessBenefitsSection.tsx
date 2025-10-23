'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Zap, Globe, Award, RefreshCw, Cpu } from 'lucide-react'
import { useTranslation } from '@/hooks/useTranslation'

const BusinessBenefitsSection = () => {
  const t = useTranslation();
  
  // Color combinations as specified
  const colors = [
    'rgba(138, 99, 210, 0.7)', // #8A63D2 at 70% opacity
    '#48D1CC',                  // #48D1CC at 100% opacity  
    '#8A63D2'                   // #8A63D2 at 100% opacity
  ]

  // Metrics data from original
  const metrics = [
    { value: '+34%', label: t.businessBenefits.metrics.loyaltyIndex.label, description: t.businessBenefits.metrics.loyaltyIndex.description, icon: TrendingUp, color: colors[0] },
    { value: '3+', label: t.businessBenefits.metrics.newRevenue.label, description: t.businessBenefits.metrics.newRevenue.description, icon: DollarSign, color: colors[1] },
    { value: '-45%', label: t.businessBenefits.metrics.operationalEfficiency.label, description: t.businessBenefits.metrics.operationalEfficiency.description, icon: Zap, color: colors[2] },
    { value: '↗', label: t.businessBenefits.metrics.brandValue.label, description: t.businessBenefits.metrics.brandValue.description, icon: Globe, color: colors[0] }
  ]

  // Main benefits from original
  const benefits = [
    {
      title: t.businessBenefits.benefits.salesGrowth.title,
      description: t.businessBenefits.benefits.salesGrowth.description,
      features: t.businessBenefits.benefits.salesGrowth.features,
      icon: TrendingUp,
      color: colors[0]
    },
    {
      title: t.businessBenefits.benefits.newRevenueModel.title,
      description: t.businessBenefits.benefits.newRevenueModel.description,
      features: t.businessBenefits.benefits.newRevenueModel.features,
      icon: DollarSign,
      color: colors[1]
    },
    {
      title: t.businessBenefits.benefits.costReduction.title,
      description: t.businessBenefits.benefits.costReduction.description,
      features: t.businessBenefits.benefits.costReduction.features,
      icon: Zap,
      color: colors[2]
    },
    {
      title: t.businessBenefits.benefits.brandESG.title,
      description: t.businessBenefits.benefits.brandESG.description,
      features: t.businessBenefits.benefits.brandESG.features,
      icon: Globe,
      color: colors[0]
    }
  ]

  // Additional features from original
  const additionalFeatures = [
    {
      title: t.businessBenefits.additionalFeatures.realValue.title,
      description: t.businessBenefits.additionalFeatures.realValue.description,
      icon: Award,
      color: colors[1]
    },
    {
      title: t.businessBenefits.additionalFeatures.virtuous.title,
      description: t.businessBenefits.additionalFeatures.virtuous.description,
      icon: RefreshCw,
      color: colors[2]
    },
    {
      title: t.businessBenefits.additionalFeatures.easyIntegration.title,
      description: t.businessBenefits.additionalFeatures.easyIntegration.description,
      icon: Cpu,
      color: colors[0]
    }
  ]

  // Dashboard metrics from original
  const dashboardMetrics = [
    { label: t.businessBenefits.dashboardMetrics.dailyReward, value: t.businessBenefits.dashboardMetrics.dailyRewardValue, change: '+12%', color: colors[0] },
    { label: t.businessBenefits.dashboardMetrics.apiIntegration, value: t.businessBenefits.dashboardMetrics.apiIntegrationValue, change: '+8%', color: colors[1] },
    { label: t.businessBenefits.dashboardMetrics.settlementReport, value: t.businessBenefits.dashboardMetrics.settlementReportValue, change: '+23%', color: colors[2] }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {t.businessBenefits.heroTitle}
          </h2>
          <div className="description text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t.businessBenefits.heroDescription}
          </div>
        </motion.div>

        {/* Side-by-side Layout: Title on Left, Metrics on Right */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          {/* Left Side - Title and Description */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-black">
              {t.businessBenefits.mainTitle.split('\n').map((line, index) => (
                <span key={index}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed whitespace-pre-line">
              {t.businessBenefits.mainDescription}
            </p>
          </motion.div>

          {/* Right Side - Metrics Cards */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300"
                  style={{ borderTopColor: metric.color, borderTopWidth: '3px' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: metric.color }}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600 mb-1">{metric.label}</div>
                  <div className="text-xs text-gray-500">{metric.description}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.businessBenefits.benefitsTitle}
          </h2>
          <div className="description text-lg text-gray-600 mx-auto">
            {t.businessBenefits.benefitsDescription}
          </div>
        </motion.div>

        {/* Main Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border-2 group-hover:scale-110 transition-transform duration-300"
                  style={{ borderColor: benefit.color }}
                >
                  <IconComponent className="w-8 h-8" style={{ color: benefit.color }} />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                    {benefit.description}
                  </p>
                </div>
                
                <div className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="text-sm text-gray-600 flex items-start">
                      <span className="mr-2">·</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Section Title - 왜 해시리워드인가? */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left mt-20 mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-900">{t.businessBenefits.whyHashRewardTitle}</span>
          </h2>
        </motion.div>

        {/* Additional Features and Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                >
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: feature.color }}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Dashboard Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <div className="grid grid-cols-1 gap-6 mb-6">
              {dashboardMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 flex items-center justify-between"
                >
                  <span className="font-medium text-gray-900">{metric.label}</span>
                  <span 
                    className="font-bold text-lg px-3 py-1 rounded-lg text-white"
                    style={{ backgroundColor: metric.color }}
                  >
                    {metric.value}
                  </span>
                </motion.div>
              ))}
            </div>
            
            <div className="text-xs text-gray-500 text-center border-t pt-4">
              {t.businessBenefits.dashboardNote}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default BusinessBenefitsSection