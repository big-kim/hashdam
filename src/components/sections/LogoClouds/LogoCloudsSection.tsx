'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { getImagePath } from '@/utils/imagePath';

const LogoCloudsSection: React.FC = () => {
  return (
    <section className="logo-clouds-section bg-white py-3 sm:py-4 md:py-6">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-28">
        <motion.div 
          className="container flex flex-col gap-4 sm:gap-5 md:gap-6 items-center justify-start w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
        >
          {/* Top Divider */}
          <div className="divider w-full h-px relative">
            <Image src={getImagePath("/images/logo-cloud/divider0.svg")}
              alt=""
              width={1216}
              height={1}
              className="w-full h-px"
              unoptimized
            />
          </div>

          {/* Logos */}
          <div className="logos py-3 sm:py-4 md:py-6 flex flex-row flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 w-full overflow-hidden">
            {/* Logo 1 */}
            <motion.div 
              className="flex-shrink-0 hover-scale"
              variants={staggerItem}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <Image src={getImagePath("/images/logo-cloud/group0.svg")}
                alt="Partner logo 1"
                width={77}
                height={24}
                className="w-auto h-5 sm:h-5 md:h-6 object-contain"
                unoptimized
              />
            </motion.div>

            {/* Logo 2 */}
            <motion.div 
              className="flex-shrink-0 hover-scale"
              variants={staggerItem}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <Image src={getImagePath("/images/logo-cloud/group1.svg")}
                alt="Partner logo 2"
                width={106}
                height={24}
                className="w-auto h-5 sm:h-5 md:h-6 object-contain"
                unoptimized
              />
            </motion.div>

            {/* Logo 3 - Combined */}
            <motion.div 
              className="frame-1171276072 flex flex-row gap-1 items-center justify-start flex-shrink-0 hover-scale"
              variants={staggerItem}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <Image
                src={getImagePath("/images/logo-cloud/image-560.png")}
                alt="Partner logo 3 icon"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
              />
              <Image
                src={getImagePath("/images/logo-cloud/image-550.png")}
                alt="Partner logo 3 text"
                width={118}
                height={14}
                className="w-auto h-4 sm:h-3.5 md:h-4 object-contain"
              />
            </motion.div>

            {/* Logo 4 */}
            <motion.div 
              className="flex-shrink-0 hover-scale"
              variants={staggerItem}
              whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
            >
              <Image
                src={getImagePath("/images/logo-cloud/image-540.png")}
                alt="Partner logo 4"
                width={151}
                height={24}
                className="w-auto h-5 sm:h-5 md:h-6 object-contain"
              />
            </motion.div>
          </div>

          {/* Bottom Divider */}
          <div className="divider2 w-full h-px relative">
            <Image src={getImagePath("/images/logo-cloud/divider1.svg")}
              alt=""
              width={1216}
              height={1}
              className="w-full h-px"
              unoptimized
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoCloudsSection;
