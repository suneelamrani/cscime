'use client';

import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      'We had the absolute pleasure of working with Carolyn to find our dream home in Aurora. Coming from mid-town Toronto, the country market was completely new to us, but Carolyn got us up to speed on everything we needed to know right away. She is thoughtful, exceptionally knowledgeable, and above all, deeply reliable. We highly recommend her expertise to anyone looking for their next country estate.',
    author: 'Aurora',
  },
  {
    quote:
      'Carolyn brings an unmatched level of care and sophistication to luxury real estate. Her deep understanding of rural properties and attention to every detail made our selling process seamless and rewarding. She is an absolute professional from start to finish.',
    author: 'King City',
  },
  {
    quote:
      'From our initial consultation to closing day, Carolyn guided us with genuine dedication and invaluable local knowledge. Her modern approach and calm guidance turned what could have been a stressful transition into an exciting journey.',
    author: 'Caledon',
  },
];

export default function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="testimonials"
      className="relative w-full py-16 sm:py-24 md:py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: "url('/assets/slide-1.webp')" }}
    >
      {/* Left Navigation Arrow */}
      <button
        type="button"
        className="testimonial-prev absolute left-[8vw] top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center text-white/90 hover:text-white transition-opacity cursor-pointer p-3 select-none"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-9 h-5"
          viewBox="0 0 44 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.8523 1.39111L2.0679 9.17551L9.8523 16.9599"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M42.8091 9.16982H3.3245"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Full Width Swiper: Carousel spans full width, card is dead center */}
      <div className="w-full">
        {!mounted ? (
          <div className="w-full flex justify-center items-center px-4 sm:px-16 md:px-24">
            <div className="max-w-full w-[350px] min-w-[56%] mx-auto bg-[#eae6db] p-12 text-center shadow-lg">
              <h2 className="text-xl sm:text-2xl md:text-[26px] font-medium tracking-[.13em] uppercase mb-[4%]">
                WHAT PEOPLE ARE SAYING
              </h2>
              <p className="text-sm sm:text-base font-normal my-4 leading-[1.8em]">
                "{testimonials[0].quote}"
              </p>
              <p className="text-base tracking-[0.13em]">
                — {testimonials[0].author}
              </p>
            </div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Autoplay]}
            speed={800}
            slidesPerView={1}
            autoplay={{
              delay: 6500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              prevEl: '.testimonial-prev',
              nextEl: '.testimonial-next',
            }}
            className="w-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full !flex !justify-center !items-center px-4 sm:px-16 md:px-24"
              >
                <div className="max-w-full w-[350px] min-w-[56%] mx-auto bg-[#eae6db] p-12 text-center shadow-lg">
                  <h2 className="text-xl sm:text-2xl md:text-[26px] font-medium text-black tracking-[.13em] uppercase mb-[4%]">
                    WHAT PEOPLE ARE SAYING
                  </h2>

                  <p className="text-sm sm:text-base font-normal my-4 leading-[1.8em] text-black">
                    "{item.quote}"
                  </p>

                  <p className="text-base tracking-[0.13em] text-black">
                    — {item.author}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Right Navigation Arrow */}
      <button
        type="button"
        className="testimonial-next absolute right-[8vw] top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center text-white/90 hover:text-white transition-opacity cursor-pointer p-3 select-none"
        aria-label="Next testimonial"
      >
        <svg
          className="w-10 sm:h-5"
          viewBox="0 0 44 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.19088 9.16982H40.6755"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile Arrow Controls (visible on small screens) */}
      <div className="flex sm:hidden justify-center items-center gap-8 mt-6 relative z-20">
        <button
          type="button"
          className="testimonial-prev flex items-center justify-center text-white p-2 cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg
            className="w-10 h-4"
            viewBox="0 0 44 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.8523 1.39111L2.0679 9.17551L9.8523 16.9599"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M42.8091 9.16982H3.3245"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          className="testimonial-next flex items-center justify-center text-white p-2 cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg
            className="w-10 h-4"
            viewBox="0 0 44 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.1477 1.39111L41.9321 9.17551L34.1477 16.9599"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.19088 9.16982H40.6755"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
