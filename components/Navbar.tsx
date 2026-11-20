'use client';

import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'BUYER', href: '#buyers', id: 'buyers' },
    { name: 'SELLER', href: '#sellers', id: 'sellers' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'CURRENT OFFERINGS', href: '#current-offerings', id: 'current-offerings' },
    { name: 'SOLD', href: '#sold', id: 'sold' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  // Track scroll position to decrease header padding
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll spy to highlight active section in navbar
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60;

      if (isAtBottom) {
        setActiveLink('CONTACT');
        return;
      }

      const sections = [
        { id: 'contact', name: 'CONTACT' },
        { id: 'sold', name: 'SOLD' },
        { id: 'current-offerings', name: 'CURRENT OFFERINGS' },
        { id: 'about', name: 'ABOUT' },
        { id: 'sellers', name: 'SELLER' },
        { id: 'buyers', name: 'BUYER' },
        { id: 'home', name: 'HOME' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveLink(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Prevent background scrolling when mobile menu is open
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

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
    name: string
  ) => {
    e.preventDefault();
    setActiveLink(name);
    setIsMenuOpen(false);

    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '#home');
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const handleNewsletterClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById('newsletter');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#newsletter');
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5] transition-all duration-300">
        <div className={`px-[4vw] transition-all duration-300 ease-in-out ${isScrolled ? 'py-[1.5vw]' : 'py-[3vw] sm:py-[2.2vw]'}`}>
          <div className="flex items-center justify-between">
            {/* Mike Benedetto Logo Brand */}
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home', 'HOME')}
              className="select-none flex flex-col cursor-pointer"
            >
              <span className="text-lg sm:text-xl md:text-[23px] font-medium tracking-[0.24em] text-neutral-900 uppercase">
                MIKE BENEDETTO
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-neutral-500 uppercase font-medium">
                RE/MAX Premier — The OP Team
              </span>
            </a>

            <nav className="hidden xl:flex items-center gap-[1.8vw]">
              {navLinks.map((link) => {
                const isActive = activeLink === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.id, link.name)}
                    className={`text-xs tracking-[0.18em] uppercase transition-colors relative py-1 text-black hover:text-black font-normal cursor-pointer ${isActive ? 'border-b border-neutral-900' : ''
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              {/* Desktop CTA Button */}
              <a
                href="#newsletter"
                onClick={handleNewsletterClick}
                className="ml-[1.8vw] border-[1.5px] border-[#000000Ed] px-[2.2em] py-[1.2em] text-[11px] tracking-[.14em] uppercase text-[#000000ed] hover:bg-[#000000ed] hover:text-white transition-all duration-300 font-normal cursor-pointer"
              >
                SUBSCRIBE TO OUR NEWSLETTER
              </a>
            </nav>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="xl:hidden w-9 h-9 flex flex-col items-center justify-center gap-2.5 cursor-pointer"
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
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home', 'HOME')}
              className="select-none flex flex-col cursor-pointer"
            >
              <span className="text-lg font-medium tracking-[0.22em] text-neutral-900 uppercase">
                MIKE BENEDETTO
              </span>
              <span className="text-[9px] tracking-[0.18em] text-neutral-500 uppercase font-medium">
                RE/MAX Premier — The OP Team
              </span>
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="w-9 h-9 flex items-center justify-center text-black cursor-pointer"
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
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id, link.name)}
                className="text-[8.5vmin] font-normal leading-[1] tracking-[.1em] text-black py-[3vw] px-[5vw] uppercase hover:opacity-60 transition-opacity text-center cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex justify-center pb-4 pt-2">
            <a
              href="#newsletter"
              onClick={handleNewsletterClick}
              className="border border-[#4a5337] px-[2.2em] py-[1.2em] text-[1.2rem] tracking-[.14em] uppercase text-[#4a5337] hover:bg-neutral-900 hover:text-white transition-all text-center cursor-pointer font-medium"
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </a>
          </div>
        </div>
      )}
    </>
  );
}
