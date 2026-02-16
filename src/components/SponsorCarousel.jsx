import { useState, useEffect, useRef } from 'react'

const SLIDE_COUNT = 6
const AUTO_PLAY_MS = 4000

function SponsorCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ).current

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDE_COUNT)
    }, AUTO_PLAY_MS)
    return () => clearInterval(t)
  }, [paused, prefersReducedMotion])

  return (
    <div
      className="sponsor-carousel w-full max-w-2xl lg:max-w-3xl flex-shrink-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusWithin={() => setPaused(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false) }}
    >
      <div className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
        {/* Piste des slides */}
        <div className="relative aspect-[3/1] sm:aspect-[4/1] min-h-[60px] sm:min-h-[72px] overflow-hidden">
          <div
            className="flex h-full transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ width: `${SLIDE_COUNT * 100}%`, transform: `translateX(-${(current / SLIDE_COUNT) * 100}%)` }}
          >
            {Array.from({ length: SLIDE_COUNT }, (_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full flex items-center justify-center px-4"
                style={{ width: `${100 / SLIDE_COUNT}%` }}
              >
                <span className="text-white/90 text-sm sm:text-base font-medium">
                  Partenaire {i + 1}
                </span>
                <span className="text-white/60 text-xs sm:text-sm ml-2 hidden sm:inline">
                  (emplacement partenaire {i + 1})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-1.5 py-2 px-2">
          {Array.from({ length: SLIDE_COUNT }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'bg-white w-6'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SponsorCarousel
