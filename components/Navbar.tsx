'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'BUYER', href: '#buyers-sellers' },
    { name: 'SELLER', href: '#buyers-sellers' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CURRENT OFFERINGS', href: '#featured-listings' },
    { name: 'SOLD', href: '#featured-listings' },
    { name: 'BLOG', href: '#in-the-media' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5] transition-all duration-300">
        <div className={`px-[4vw] transition-all duration-300 ease-in-out ${isScrolled ? 'py-[1.5vw]' : 'py-[3vw] sm:py-[2.2vw]'}`}>
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="select-none"
            >
              <img src="/assets/logo.webp" alt="Logo" className='max-h-[15px] sm:max-h-[21px] block max-w-full w-auto transition-all duration-300' />
            </Link>

            <nav className="hidden xl:flex items-center gap-[1.8vw]">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveLink(link.name)}
                    className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 text-black hover:text-black font-normal ${isActive ? 'border-b border-neutral-900' : ''
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* Desktop CTA Button */}
              <Link
                href="#newsletter"
                className="ml-[1.8vw] border-[1.5px] border-[#000000Ed] px-[2.2em] py-[1.2em] text-[11px] tracking-[.14em] uppercase text-[#000000ed] hover:bg-[#000000ed] hover:text-white transition-all duration-300 font-normal"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </Link>
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="xl:hidden w-9 h-9 flex flex-col items-center justify-center gap-2.5"
            >
              <span className="w-full h-px bg-black"></span>
              <span className="w-full h-px bg-black"></span>
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#FAF8F5] flex flex-col justify-between py-[3vw] sm:py-[2.2vw] px-[4vw] animate-fadeIn overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              className="select-none"
            >
              <img src="/assets/logo.webp" alt="Logo" className='max-h-[15px] block max-w-full w-auto' />
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="w-9 h-9 flex items-center justify-center text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-9 h-9 stroke-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="square" strokeLinejoin="miter" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center py-10 sm:py-14">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.name);
                  setIsMenuOpen(false);
                }}
                className="text-[8.5vmin] font-normal leading-[1] tracking-[.1em] text-black py-[3vw] px-[5vw] uppercase hover:opacity-60 transition-opacity text-center"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex justify-center pb-4 pt-2">
            <Link
              href="#newsletter"
              onClick={() => setIsMenuOpen(false)}
              className="border border-[#4a5337] px-[2.2em] py-[1.2em] text-[1.2rem] tracking-[.14em] uppercase text-[#4a5337] hover:bg-neutral-900 hover:text-white transition-all text-center"
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
