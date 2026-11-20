'use client';

import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

export default function VideoTourSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  // Master HLS playlist containing both AAC Audio and 1080p Video
  const videoSrc =
    'https://video.squarespace-cdn.com/content/v1/5e9ec0c2838a310a9aea6e30/33c21fde-4039-482a-9f4b-5d73256413e6/playlist.m3u8';

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Enforce initial muted state so browser autoplay policy allows autoplay
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.volume = 1.0;
    video.setAttribute('muted', '');
    video.setAttribute('playsinline', '');
    video.setAttribute('autoplay', '');

    let hls: Hls | null = null;

    const startPlayback = () => {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn('Autoplay error:', err);
            video.muted = true;
            video.play().catch(() => { });
          });
      }
    };

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
        autoStartLoad: true,
      });

      hls.loadSource(videoSrc);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        startPlayback();
      });

      hls.on(Hls.Events.ERROR, (_event, data) => {
        if (data.fatal) {
          switch (data.type) {
            case Hls.ErrorTypes.NETWORK_ERROR:
              hls?.startLoad();
              break;
            case Hls.ErrorTypes.MEDIA_ERROR:
              hls?.recoverMediaError();
              break;
            default:
              hls?.destroy();
              break;
          }
        }
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', startPlayback);
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => { });
    } else {
      video.pause();
    }
  };

  const toggleMute = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    const newMuted = !video.muted;
    video.muted = newMuted;
    video.defaultMuted = newMuted;
    if (!newMuted) {
      video.volume = 1.0;
    }
    setIsMuted(newMuted);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (video.duration) {
      setDuration(video.duration);
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = progressBarRef.current;
    if (!video || !bar || !video.duration) return;
    const rect = bar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newPercent = Math.max(0, Math.min(1, clickX / rect.width));
    video.currentTime = newPercent * video.duration;
    setProgress(newPercent * 100);
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
    hideControlsTimeout.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;
    if (!document.fullscreenElement) {
      container.requestFullscreen?.().catch(() => { });
    } else {
      document.exitFullscreen?.().catch(() => { });
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section id="video-tour" className="w-full bg-[#FAF8F5] py-4 sm:py-8">
      <div className="w-full">
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[16/9] bg-neutral-900 overflow-hidden cursor-pointer group shadow-sm select-none"
          onClick={togglePlay}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={() => {
              if (videoRef.current) setDuration(videoRef.current.duration);
            }}
            onVolumeChange={() => {
              if (videoRef.current) {
                setIsMuted(videoRef.current.muted || videoRef.current.volume === 0);
              }
            }}
          />

          {/* Top-Right Quick Unmute / Mute Pill Button */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30">
            <button
              type="button"
              onClick={toggleMute}
              className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs tracking-widest uppercase font-medium backdrop-blur-md transition-all duration-300 shadow-md cursor-pointer ${isMuted
                ? 'bg-black/70 hover:bg-black/90 text-white border border-white/20'
                : 'bg-white/90 hover:bg-white text-neutral-900 border border-transparent'
                }`}
            >
              {isMuted ? (
                <>
                  <svg className="w-4 h-4 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </>
              )}
            </button>
          </div>

          {/* Center Floating Play/Pause Button Overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${!isPlaying || showControls ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <button
              type="button"
              aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/45 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-black/70 shadow-2xl pointer-events-auto cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                togglePlay();
              }}
            >
              {isPlaying ? (
                /* Pause Icon */
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-1.5 sm:w-2 h-6 sm:h-7 bg-white rounded-xs"></span>
                  <span className="w-1.5 sm:w-2 h-6 sm:h-7 bg-white rounded-xs"></span>
                </div>
              ) : (
                /* Play Icon */
                <svg className="w-7 h-7 sm:w-8 sm:h-8 fill-white translate-x-0.5" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
          </div>

          {/* Bottom Interactive Controls Bar */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 sm:p-6 flex flex-col gap-3 transition-opacity duration-300 ${!isPlaying || showControls ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Timeline Progress Scrubber */}
            <div
              ref={progressBarRef}
              onClick={handleSeek}
              className="w-full h-1.5 sm:h-2 hover:h-3 bg-white/25 rounded-full cursor-pointer transition-all relative overflow-hidden group/bar"
            >
              <div
                className="h-full bg-white transition-[width] duration-100 ease-linear rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Bottom Controls Row */}
            <div className="flex items-center justify-between text-white text-xs">
              {/* Left: Play/Pause button + Time */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                  className="p-1 hover:text-white/80 transition-colors cursor-pointer"
                >
                  {isPlaying ? (
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  )}
                </button>

                <span className="font-mono text-[11px] sm:text-xs text-white/90">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Right: Sound Toggle + Fullscreen */}
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                  className="p-1.5 hover:text-white/80 transition-colors flex items-center gap-1.5 cursor-pointer text-white"
                >
                  {isMuted ? (
                    <>
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                      </svg>
                    </>
                  ) : (
                    <>
                      <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={toggleFullscreen}
                  aria-label="Toggle Fullscreen"
                  className="p-1 hover:text-white/80 transition-colors cursor-pointer text-white"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
