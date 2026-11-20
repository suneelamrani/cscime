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
      'We had the absolute pleasure of working with Mike to find our dream estate home in King City. Mike got us up to speed on everything we needed to know right away. He is thoughtful, exceptionally knowledgeable about the local market, and above all, deeply reliable. We highly recommend his expertise to anyone looking for their next luxury home.',
    author: 'King City',
  },
  {
    quote:
      'Mike brings an unmatched level of care and sophistication to real estate. His deep understanding of luxury properties in Vaughan and attention to every detail made our selling process seamless and rewarding. He is a consummate professional from start to finish.',
    author: 'Vaughan',
  },
  {
    quote:
      'From our initial consultation to closing day, Mike guided us with genuine dedication, strategic negotiation, and invaluable market knowledge. His modern approach and calm guidance turned our transition into an exceptional experience.',
    author: 'Kleinburg',
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
        className="testimonial-prev absolute left-3 sm:left-6 md:left-10 lg:left-14 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center text-white/90 hover:text-white transition-opacity cursor-pointer p-3 select-none"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-10 h-4 sm:w-12 sm:h-5"
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
                  <h2 className="text-xl sm:text-2xl md:text-[26px] font-medium tracking-[.13em] uppercase mb-[4%]">
                    WHAT PEOPLE ARE SAYING
                  </h2>

                  <p className="text-sm sm:text-base font-normal my-4 leading-[1.8em]">
                    "{item.quote}"
                  </p>

                  <p className="text-base tracking-[0.13em]">
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
        className="testimonial-next absolute right-3 sm:right-6 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 z-20 hidden sm:flex items-center justify-center text-white/90 hover:text-white transition-opacity cursor-pointer p-3 select-none"
        aria-label="Next testimonial"
      >
        <svg
          className="w-10 h-4 sm:w-12 sm:h-5"
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
          className="testimonial-prev flex items-center justify-center text-white/90 hover:text-white p-2 cursor-pointer"
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
          className="testimonial-next flex items-center justify-center text-white/90 hover:text-white p-2 cursor-pointer"
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
