'use client'

import React, { useEffect, useRef } from 'react';
import { GrAggregate, GrAd, GrSecure } from "react-icons/gr";
import { IconType } from "react-icons"; // Import IconType from react-icons
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

type IconName = 'GrAggregate' | 'GrAd' | 'GrSecure';

interface FeatureAnimateProps {
  title: string;
  description: string;
  icon: IconName;
}

const iconMap: Record<IconName, IconType> = {
  GrAggregate,
  GrAd,
  GrSecure
};

const FeatureAnimate: React.FC<FeatureAnimateProps> = ({ title, description, icon }) => {

  const IconComponent = iconMap[icon];
  const border = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if (!border.current) return;
      const borderRect = border.current?.getBoundingClientRect();
      offsetX.set(e.x - borderRect.x);
      offsetY.set(e.y - borderRect.y);
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    }

  }, [])


  return (
    <div className='  px-5 py-10 text-center rounded-xl sm:flex-1 relative'>
      <motion.div
        ref={border}
        className='absolute inset-0 border-2 border-purple-400 rounded-xl sm:border-opacity-100 border-opacity-10'
        style={{
          maskImage: maskImage
        }}
      />
      <div className='mx-auto inline-flex h-14 w-14 border border-white/30 justify-center items-center rounded-lg'>
        <IconComponent className='text-[#A46EDB]' />
      </div>
      <h3 className='mt-6 font-bold'>{title}</h3>
      <p className='mt-2 text-white/70'>{description}</p>
    </div>
  );
};

export default FeatureAnimate;