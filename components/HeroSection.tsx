'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  '/assets/slide-1.webp',
  '/assets/slide-2.webp',
  '/assets/slide-3.webp',
  '/assets/slide-4.webp',
  '/assets/slide-5.webp',
  '/assets/slide-6.webp',
  '/assets/slide-7.webp',
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="home" className="w-full h-[65vh] sm:h-[75vh] lg:h-[79vh] relative overflow-hidden bg-neutral-950 scroll-mt-24">
      <span id="hero" className="sr-only" />
      {!mounted ? (
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[0]})` }}
          role="img"
          aria-label="Slide 1"
        />
      ) : (
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{
            crossFade: true,
          }}
          speed={1600}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          allowTouchMove={true}
          className="w-full h-full"
        >
          {slides.map((imageSrc, index) => (
            <SwiperSlide key={index} className="w-full h-full overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${imageSrc})` }}
                role="img"
                aria-label={`Slide ${index + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
