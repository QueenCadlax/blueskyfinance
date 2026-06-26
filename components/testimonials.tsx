"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const TESTIMONIALS = [
  {
    quote:
      'BlueSky helped me when I needed it most. The process was fast, friendly and very professional. I walked out with a smile.',
    name: 'Sipho M.',
    place: 'Lydenburg',
    image: '/customer-1.png',
  },
  {
    quote:
      'The WhatsApp service is amazing. I applied and got my loan on the same day without any hassle. Highly recommended.',
    name: 'Nomsa K.',
    place: 'Lydenburg',
    image: '/customer-2.png',
  },
  {
    quote:
      'Great service and transparent fees. No hidden surprises at all. I now happily refer my friends to BlueSky.',
    name: 'Pieter L.',
    place: 'Lydenburg',
    image: '/customer-3.png',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const count = TESTIMONIALS.length
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (isPaused || shouldReduceMotion) return

    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, 5000)
    return () => {
      if (timer.current) window.clearInterval(timer.current)
    }
  }, [count, isPaused, shouldReduceMotion])

  function prev() {
    setIndex((i) => (i - 1 + count) % count)
  }
  function next() {
    setIndex((i) => (i + 1) % count)
  }

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-label="Customer testimonials">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="What Our Customers Say" title="Trusted by our local community" />

        <div className="relative mt-10">
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${index * 100}%)`,
                transition: shouldReduceMotion ? 'none' : 'transform 0.6s ease',
              }}
            >
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="flex-shrink-0 w-full flex justify-center px-4">
                  <figure className="w-full max-w-3xl flex-shrink-0 rounded-2xl border border-border bg-card p-6 shadow-soft flex flex-col justify-between h-44 md:h-40">
                    <div>
                      <div className="flex gap-1 text-orange-400" aria-label="5 out of 5 stars">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star key={s} className="h-4 w-4 fill-current" aria-hidden="true" />
                        ))}
                      </div>
                      <blockquote className="mt-3 text-sm leading-relaxed text-foreground/80">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                    </div>
                    <figcaption className="mt-4 flex items-center gap-3">
                      <Image src={t.image} alt={t.name} width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                      <div>
                        <p className="font-semibold text-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.place}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md hover:bg-background"
          >
            <ChevronLeft className="h-5 w-5 text-foreground" />
          </button>

          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-md hover:bg-background"
          >
            <ChevronRight className="h-5 w-5 text-foreground" />
          </button>

          <div className="mt-4 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-8 rounded-full transition-all ${i === index ? 'bg-orange-400' : 'bg-border'}`}
                aria-label={`Go to slide ${i + 1}`}
                aria-pressed={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
