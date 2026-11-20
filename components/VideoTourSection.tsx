'use client';

import React, { useEffect, useRef } from 'react';

export default function VideoTourSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Explicitly set DOM muted properties so all modern browsers permit autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        console.warn('Autoplay error:', error);
      });
    }
  }, []);

  return (
    <section id="video-tour" className="w-full bg-[#FAF8F5] py-4 sm:py-8">
      <div className="w-full">
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] bg-black overflow-hidden shadow-sm">
          <video
            ref={videoRef}
            src="/assets/video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}
