'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, staggerItem } from '@/lib/animations'
import Image from 'next/image'
import FlipCard from '@/components/ui/FlipCard/FlipCard'
import { useTranslation } from '@/hooks/useTranslation'

const ApplicationsSection = () => {
  const t = useTranslation();
  // Mobile carousel state
  const [currentSlide, setCurrentSlide] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Create applications array from translation data
  const applications = [
    {
      id: 1,
      image: '/images/applications/frame-11712759796.png',
      title: t.applications.items.ecommerce.title,
      description: t.applications.items.ecommerce.description,
      gradient: 'from-amber-500/20 to-orange-500/20',
      iconBg: 'bg-gradient-to-br from-amber-500 to-orange-500',
      features: t.applications.items.ecommerce.features
    },
    {
      id: 2,
      image: '/images/applications/frame-11712759790.png',
      title: t.applications.items.nftGaming.title,
      description: t.applications.items.nftGaming.description,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      features: t.applications.items.nftGaming.features
    },
    {
      id: 3,
      image: '/images/applications/frame-11712759791.png',
      title: t.applications.items.education.title,
      description: t.applications.items.education.description,
      gradient: 'from-orange-500/20 to-red-500/20',
      iconBg: 'bg-gradient-to-br from-orange-500 to-red-500',
      features: t.applications.items.education.features
    },
    {
      id: 4,
      image: '/images/applications/frame-11712759792.png',
      title: t.applications.items.healthcare.title,
      description: t.applications.items.healthcare.description,
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconBg: 'bg-gradient-to-br from-green-500 to-emerald-500',
      features: t.applications.items.healthcare.features
    },
    {
      id: 5,
      image: '/images/applications/frame-11712759793.png',
      title: t.applications.items.finance.title,
      description: t.applications.items.finance.description,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconBg: 'bg-gradient-to-br from-blue-500 to-cyan-500',
      features: t.applications.items.finance.features
    },
    {
      id: 6,
      image: '/images/applications/frame-11712759794.png',
      title: t.applications.items.travel.title,
      description: t.applications.items.travel.description,
      gradient: 'from-rose-500/20 to-pink-500/20',
      iconBg: 'bg-gradient-to-br from-rose-500 to-pink-500',
      features: t.applications.items.travel.features
    },
    {
      id: 7,
      image: '/images/applications/frame-11712759795.png',
      title: t.applications.items.social.title,
      description: t.applications.items.social.description,
      gradient: 'from-emerald-500/20 to-teal-500/20',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-500',
      features: t.applications.items.social.features
    },
    {
      id: 8,
      image: '/images/applications/frame-11712759797.png',
      title: t.applications.items.mobility.title,
      description: t.applications.items.mobility.description,
      gradient: 'from-teal-500/20 to-cyan-500/20',
      iconBg: 'bg-gradient-to-br from-teal-500 to-cyan-500',
      features: t.applications.items.mobility.features
    },
    {
      id: 9,
      image: '/images/applications/frame-11712759798.png',
      title: t.applications.items.entertainment.title,
      description: t.applications.items.entertainment.description,
      gradient: 'from-indigo-500/20 to-purple-500/20',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-purple-500',
      features: t.applications.items.entertainment.features
    }
  ]

  // Mobile carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % applications.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + applications.length) % applications.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const minSwipeDistance = 50
    const swipeDistance = touchStartX.current - touchEndX.current

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }



  return (
    <section className="w-full relative py-24 px-4 sm:px-6 lg:px-28 overflow-hidden">
      {/* Background with gradient and floating elements */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-50/25 via-white to-blue-50/30" />
      
      {/* Decorative floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top center floating element */}
        <motion.div 
          className="absolute -top-32 left-1/4 w-[350px] h-[220px] bg-gradient-to-br from-cyan-100/35 to-teal-100/25 rounded-[120px] blur-[90px]" 
          animate={{
            y: [0, -25, 0],
            x: [0, 20, 0],
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Right side floating element */}
        <motion.div 
          className="absolute top-1/4 -right-20 w-[280px] h-[180px] bg-gradient-to-bl from-blue-100/30 to-indigo-100/25 rounded-[90px] blur-[70px]" 
          animate={{
            y: [0, 30, 0],
            x: [0, -15, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Left side floating element */}
        <motion.div 
          className="absolute top-1/2 -left-24 w-[320px] h-[200px] bg-gradient-to-tr from-sky-100/30 to-cyan-100/20 rounded-[100px] blur-[85px]" 
          animate={{
            y: [0, -20, 0],
            x: [0, 25, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        
        {/* Bottom floating element */}
        <motion.div 
          className="absolute -bottom-28 right-1/3 w-[300px] h-[190px] bg-gradient-to-t from-purple-100/25 to-blue-100/20 rounded-[80px] blur-[75px]" 
          animate={{
            y: [0, 25, 0],
            transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
          }}
        />
      </div>
       
       {/* Content with relative positioning */}
       <div className="relative z-10">
        <div className="max-w-[1440px] mx-auto">
        {/* Section Heading */}
        <motion.div 
          className="flex flex-col gap-2 items-center justify-start mb-16 lg:mb-24 max-w-[800px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-[#111827] text-center font-['Inter'] font-bold text-[32px] leading-[40px] sm:text-[40px] sm:leading-[50px] lg:text-[48px] lg:leading-[60px] tracking-[-0.025em]"
            variants={fadeInUp}
          >
            {t.applications.title}
          </motion.h2>
          <motion.div 
            className="description text-[#111827] text-center font-['Inter'] text-[16px] leading-[24px] lg:text-[18px] lg:leading-[28px] font-normal"
            variants={fadeInUp}
          >
            {t.applications.description.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < t.applications.description.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>

        {/* Mobile Carousel (below md) */}
        <div className="block md:hidden w-full">
          <motion.div 
            className="relative w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Carousel Container */}
            <div 
              className="relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {applications.map((app, index) => (
                  <div
                    key={app.id}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <motion.div
                      className="group relative w-full max-w-[300px] mx-auto h-[380px]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      whileHover={{ 
                        scale: 1.03,
                        y: -8,
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      <FlipCard
                        flipOnHover={true}
                        duration={0.8}
                        className="h-full touch-card"
                        backContent={
                          <div
                            className={`
                              relative overflow-hidden rounded-2xl h-full
                              bg-gradient-to-br ${app.gradient}
                              shadow-lg
                              transform-gpu flex flex-col items-center justify-center p-8
                            `}
                          >
                            {/* Back Content */}
                            <div className="flex flex-col items-center justify-center h-full p-8">
                              <div className={`rounded-full ${app.iconBg} flex items-center justify-center shadow-lg w-20 h-20 mb-6`}>
                                <div className="bg-white rounded-full opacity-90 w-10 h-10"></div>
                              </div>
                              
                              <div className="h-[60px] flex items-center justify-center mb-4">
                                <h3 className={`
                                  text-center font-['Inter'] font-bold text-[clamp(1.25rem,3vw,1.5rem)]
                                  bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} 
                                  bg-clip-text text-transparent
                                  line-clamp-2
                                `}>
                                  {app.title}
                                </h3>
                              </div>
                              
                              <div className="text-center flex-1 flex flex-col justify-center">
                                <p className="text-gray-800 font-['Inter'] text-sm font-medium mb-4">
                                  {t.applications.common.mainFeatures}
                                </p>
                                <ul className="text-gray-700 text-xs space-y-1 mb-6">
                                  {app.features.map((feature, featureIndex) => (
                                    <li key={featureIndex}>{feature}</li>
                                  ))}
                                </ul>
                              </div>
                              
                              <div>
                                <button className={`
                                  rounded-lg text-white font-semibold
                                  ${app.iconBg} hover:scale-105 transition-transform duration-200
                                  shadow-lg hover:shadow-xl text-xs px-6 py-3
                                `}>
                                  {t.applications.common.viewDetails}
                                </button>
                              </div>
                            </div>
                          </div>
                        }
                      >
                        {/* Front Card Container with Glass Effect */}
                        <div
                          className={`
                            relative overflow-hidden rounded-2xl h-full
                            bg-gradient-to-br ${app.gradient}
                            backdrop-blur-sm group-data-[flipped=true]:backdrop-blur-none
                            shadow-lg hover:shadow-2xl
                            transition-all duration-500 ease-out
                            transform-gpu flex flex-col
                          `}
                        >
                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 z-10">
                          <div className={`w-3 h-3 rounded-full ${app.iconBg} opacity-60 animate-pulse`}></div>
                        </div>
                        
                        {/* Floating Icon Badge */}
                        <div className="absolute -top-3 -right-3 z-20">
                          <div className={`
                            w-8 h-8 rounded-full ${app.iconBg} 
                            shadow-lg flex items-center justify-center
                            transform rotate-12 group-hover:rotate-0 
                            transition-transform duration-300
                          `}>
                            <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                          </div>
                        </div>

                        {/* Image Container */}
                        <div className="relative w-full overflow-hidden rounded-t-2xl h-[140px]">
                          <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                            <Image
                              src={app.image}
                              alt={app.title}
                              fill
                              className="object-cover transition-all duration-500 group-hover:brightness-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              {...(index < 3 ? { priority: true } : { loading: "lazy" })}
                              unoptimized
                              onError={(e) => {
                                console.log(`Failed to load image: ${app.image}`);
                                e.currentTarget.style.display = 'none';
                              }}
                            />
                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>

                        {/* Content Container */}
                        <div className="relative bg-white/80 backdrop-blur-sm group-data-[flipped=true]:backdrop-blur-none h-[240px] flex flex-col p-4">
                          {/* Title with Gradient Text */}
                          <div className="h-[50px] flex items-center justify-center">
                            <h3 
                              className={`
                                text-center font-['Inter'] font-bold text-[clamp(1.25rem,3vw,1.5rem)]
                                bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} 
                                bg-clip-text text-transparent
                                transform transition-transform duration-300 group-hover:scale-105
                                line-clamp-2
                              `}
                            >
                              {app.title}
                            </h3>
                          </div>
                          
                          {/* Description */}
                          <div className="h-[170px] flex items-start overflow-hidden">
                            <p className="text-[#374151] text-center font-['Inter'] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-relaxed line-clamp-6">
                              {app.description}
                            </p>
                          </div>

                          {/* Bottom Accent Line */}
                          <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                        </div>

                        {/* Shine Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                        </div>
                        </div>
                      </FlipCard>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              disabled={currentSlide === applications.length - 1}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/90 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dot Indicators */}
            <div className="flex justify-center mt-4 gap-3">
              {applications.map((_, index) => (
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
          </motion.div>
        </div>

        {/* Desktop Grid (md and above) */}
        <motion.div 
          className="hidden md:block w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-[1000px] mx-auto">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                className="group relative w-full max-w-[320px] mx-auto h-[380px]"
                variants={staggerItem}
                whileHover={{ 
                  scale: 1.03,
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <FlipCard
                  flipOnHover={true}
                  duration={0.8}
                  className="h-full touch-card"
                  backContent={
                    <div
                      className={`
                        relative overflow-hidden rounded-2xl h-full
                        bg-gradient-to-br ${app.gradient}
                        shadow-lg
                        transform-gpu flex flex-col items-center justify-center p-8
                      `}
                    >
                      {/* Back Content */}
                      <div className="flex flex-col items-center justify-center h-full p-8">
                        <div className={`rounded-full ${app.iconBg} flex items-center justify-center shadow-lg w-20 h-20 mb-6`}>
                          <div className="bg-white rounded-full opacity-90 w-10 h-10"></div>
                        </div>
                        
                        <div className="h-[60px] flex items-center justify-center mb-4">
                          <h3 className={`
                            text-center font-['Inter'] font-bold text-[clamp(1.25rem,3vw,1.5rem)]
                            bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} 
                            bg-clip-text text-transparent
                            line-clamp-2
                          `}>
                            {app.title}
                          </h3>
                        </div>
                        
                        <div className="text-center flex-1 flex flex-col justify-center">
                          <p className="text-gray-800 font-['Inter'] text-sm font-medium mb-4">
                            {t.applications.common.mainFeatures}
                          </p>
                          <ul className="text-gray-700 text-xs space-y-1 mb-6">
                            {app.features.map((feature, featureIndex) => (
                              <li key={featureIndex}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <button className={`
                            rounded-lg text-white font-semibold
                            ${app.iconBg} hover:scale-105 transition-transform duration-200
                            shadow-lg hover:shadow-xl text-xs px-6 py-3
                          `}>
                            {t.applications.common.viewDetails}
                          </button>
                        </div>
                      </div>
                    </div>
                  }
                >
                  {/* Front Card Container with Glass Effect */}
                  <div
                    className={`
                      relative overflow-hidden rounded-2xl h-full
                      bg-gradient-to-br ${app.gradient}
                      backdrop-blur-sm group-data-[flipped=true]:backdrop-blur-none
                      shadow-lg hover:shadow-2xl
                      transition-all duration-500 ease-out
                      transform-gpu flex flex-col
                    `}
                  >
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`w-3 h-3 rounded-full ${app.iconBg} opacity-60 animate-pulse`}></div>
                  </div>
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute -top-3 -right-3 z-20">
                    <div className={`
                      w-8 h-8 rounded-full ${app.iconBg} 
                      shadow-lg flex items-center justify-center
                      transform rotate-12 group-hover:rotate-0 
                      transition-transform duration-300
                    `}>
                      <div className="w-3 h-3 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full overflow-hidden rounded-t-2xl h-[140px]">
                    <div className="relative w-full h-full transform transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={app.image}
                        alt={app.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:brightness-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        {...(index < 3 ? { priority: true } : { loading: "lazy" })}
                        unoptimized
                        onError={(e) => {
                          console.log(`Failed to load image: ${app.image}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm group-data-[flipped=true]:backdrop-blur-none h-[240px] flex flex-col p-4">
                    {/* Title with Gradient Text */}
                    <div className="h-[50px] flex items-center justify-center">
                      <h3 
                        className={`
                          text-center font-['Inter'] font-bold text-[clamp(1.25rem,3vw,1.5rem)]
                          bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} 
                          bg-clip-text text-transparent
                          transform transition-transform duration-300 group-hover:scale-105
                          line-clamp-2
                        `}
                      >
                        {app.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <div className="h-[170px] flex items-start overflow-hidden">
                      <p className="text-[#374151] text-center font-['Inter'] text-[clamp(0.875rem,2vw,1rem)] font-normal leading-relaxed line-clamp-6">
                        {app.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${app.iconBg.replace('bg-gradient-to-br', '')} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  </div>
                  </div>
                </FlipCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

export default ApplicationsSection
