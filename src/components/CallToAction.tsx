'use client'
import Helix from '../assets/images/helix2.png'
import Emostar from '../assets/images/emojistar.png'
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {


  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end']
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);



  return (
    <div className="bg-black text-white py-[72px] sm:py-32 overflow-clip " ref={containerRef}>
      <div className="container max-w-xl relative">
        <motion.div
          style={{
            translateY
          }}
        >
          <Image
            src={Helix}
            alt={"helix"}
            className='absolute top-6 left-[calc(100%+36px)] z-50'
          />
        </motion.div>
        <motion.div
          style={{
            translateY
          }}
        >
          <Image
            src={Emostar}
            alt={"emostar"}
            className='absolute -top-[100px] right-[calc(100%+24px)]'
          />
        </motion.div>

        <h2 className='text-center font-bold text-5xl sm:max-w-[648px] mx-auto sm:text-6xl tracking-tighter'>
          Get instant access
        </h2>
        <div className=' mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
        </div>

        <form className="mt-10 flex flex-col max-w-96 mx-auto sm:flex-row gap-2.5">
          <input
            type="email"
            placeholder="email"
            className="h-12 bg-white/20 rounded-lg px-5 sm:flex-1"
          />
          <button className="bg-white text-black py-3 px-5 rounded-lg font-medium">Get access</button>
        </form>

      </div>
    </div>
  );
};
