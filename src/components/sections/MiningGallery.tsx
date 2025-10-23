'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from '@/hooks/useTranslation'
import { getImagePath } from '@/utils/imagePath'

interface GalleryLocation {
  name: string
  images: string[]
}

const galleryData: GalleryLocation[] = [
  {
    name: 'Sibu',
    images: [
      getImagePath('/images/gallery/photo-10.png'),
      getImagePath('/images/gallery/photo-11.png'),
      getImagePath('/images/gallery/photo-12.png'),
      getImagePath('/images/gallery/photo-13.png')
    ]
  },
  {
    name: 'Miri',
    images: [
      getImagePath('/images/gallery/photo-14.png'),
      getImagePath('/images/gallery/photo-15.png'),
      getImagePath('/images/gallery/photo-16.png'),
      getImagePath('/images/gallery/photo-17.png')
    ]
  },
  {
    name: 'A/S센터',
    images: [
      getImagePath('/images/gallery/photo-18.png'),
      getImagePath('/images/gallery/photo-19.png'),
      getImagePath('/images/gallery/photo-110.png'),
      getImagePath('/images/gallery/photo-111.png')
    ]
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const
    }
  }
}

export default function MiningGallery() {
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const t = useTranslation()

  const handleImageError = (imagePath: string) => {
    setImageErrors(prev => new Set(prev).add(imagePath))
  }

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-28">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            {t.site.gallery.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            {t.site.gallery.description}
          </p>
        </div>

        {/* Gallery Sections */}
        <div className="space-y-10 sm:space-y-12 md:space-y-16">
          {galleryData.map((location, locationIndex) => (
            <div key={location.name} className="space-y-4 sm:space-y-6">
              {/* Location Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-left">
                {location.name === 'Sibu' ? t.site.gallery.sibu : location.name === 'Miri' ? t.site.gallery.miri : t.site.gallery.asCenter}
              </h3>

              {/* Image Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
                {location.images.map((image, imageIndex) => (
                  <div
                    key={`${location.name}-${imageIndex}`}
                    className="group relative overflow-hidden rounded-lg transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[186/173]">
                      {!imageErrors.has(image) ? (
                        <Image
                          src={image}
                          alt={`${location.name} mining facility photo ${imageIndex + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          priority={locationIndex === 0 && imageIndex === 0}
                          onError={() => handleImageError(image)}
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                          <div className="text-center p-4">
                            <p className="text-gray-500 text-sm">{t.site.gallery.imageLoadError}</p>
                            <p className="text-gray-400 text-xs mt-2">{image}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Overlay on hover - Desktop only */}
                      <div className="hidden sm:flex absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 items-center justify-center pointer-events-none">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-white bg-opacity-90 rounded-full p-3">
                            <svg 
                              className="w-6 h-6 text-gray-600" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}