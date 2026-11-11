import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

interface PhotoSliderProps {
  photos: string[];
  title: string;
}

const getImagePath = (path: string) => {
  if (path.startsWith('http')) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
};

export const PhotoSlider: React.FC<PhotoSliderProps> = ({ photos, title }) => {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!photos || photos.length === 0) {
    return null;
  }

  const prev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prevIdx) => (prevIdx - 1 + photos.length) % photos.length);
  };

  const next = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrent((prevIdx) => (prevIdx + 1) % photos.length);
  };

  // Keyboard navigation for lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    },
    [lightboxOpen, photos.length]
  );

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, handleKeyDown]);

  return (
    <>
      <div 
        onClick={() => setLightboxOpen(true)}
        className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-zinc-950/60 aspect-[16/10] group my-3 shadow-lg cursor-pointer select-none"
      >
        <img
          src={getImagePath(photos[current])}
          alt={`${title} - Photo ${current + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-105"
        />

        {/* Hover zoom hint overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-mono border border-white/20 shadow-xl">
            <ZoomIn size={14} className="text-moonstone" />
            <span>Click to enlarge</span>
          </div>
        </div>

        {/* Counter Badge */}
        {photos.length > 1 && (
          <div className="absolute top-2.5 right-2.5 z-10 text-[10px] font-mono tracking-widest px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white/90 border border-white/10">
            {current + 1} / {photos.length}
          </div>
        )}

        {/* Navigation Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 backdrop-blur-sm border border-white/10 z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 opacity-80 group-hover:opacity-100 backdrop-blur-sm border border-white/10 z-10"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {photos.length > 1 && (
          <div className="absolute bottom-2.5 left-0 right-0 flex items-center justify-center gap-1.5 z-10">
            {photos.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(idx);
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  current === idx ? 'w-5 bg-moonstone shadow-[0_0_8px_rgba(224,231,255,0.6)]' : 'w-1.5 bg-white/40'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* High-Resolution Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-between p-4 sm:p-6 animate-fadeIn"
        >
          {/* Lightbox Header Bar */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-5xl flex items-center justify-between text-white py-2 z-10"
          >
            <div className="flex items-center gap-3 truncate pr-4">
              <h4 className="text-sm sm:text-base font-semibold text-white truncate font-poppins">
                {title}
              </h4>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-moonstone shrink-0">
                {current + 1} of {photos.length}
              </span>
            </div>
            
            <button
              onClick={() => setLightboxOpen(false)}
              aria-label="Close Lightbox"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors border border-white/10 shrink-0"
            >
              <X size={20} />
            </button>
          </div>

          {/* Lightbox Center Image Stage */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-auto min-h-0"
          >
            <img
              src={getImagePath(photos[current])}
              alt={`${title} - Large Preview`}
              className="max-w-full max-h-[78vh] object-contain rounded-xl shadow-2xl border border-white/10 select-none transition-all duration-300"
            />

            {/* Prev/Next buttons inside Lightbox */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 border border-white/20 shadow-xl"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/70 hover:bg-moonstone hover:text-zinc-950 text-white flex items-center justify-center transition-all duration-300 border border-white/20 shadow-xl"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Footer Thumbnails / Indicator */}
          {photos.length > 1 && (
            <div 
              onClick={(e) => e.stopPropagation()} 
              className="flex items-center gap-2 max-w-full overflow-x-auto py-2 px-4 rounded-2xl bg-zinc-900/80 border border-white/10 backdrop-blur-md z-10"
            >
              {photos.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-12 h-9 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                    current === idx 
                      ? 'border-moonstone scale-105 shadow-[0_0_10px_rgba(224,231,255,0.4)]' 
                      : 'border-transparent opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={getImagePath(p)} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PhotoSlider;