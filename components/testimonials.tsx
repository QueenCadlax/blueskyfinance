"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'

const TESTIMONIALS = [
  {
    quote:
      'BlueSky helped me when I needed it most. The team made the process quick and friendly, and I walked out with a smile.',
    name: 'Sipho M.',
    place: 'Lydenburg',
    image: '/customer-1.png',
  },
  {
    quote:
      'WhatsApp made everything easy. I applied in minutes and had my loan approved the same day.',
    name: 'Nomsa K.',
    place: 'Lydenburg',
    image: '/customer-2.png',
  },
  {
    quote:
      'Clear fees, no surprises, and a staff member who explained everything carefully. I’m already telling friends about BlueSky.',
    name: 'Pieter L.',
    place: 'Lydenburg',
    image: '/customer-3.png',
  },
  {
    quote:
      'The BlueSky Financial Services team was professional and genuinely helpful. They guided me through every step clearly and confidently.',
    name: 'Thandi M.',
    place: 'Lydenburg',
    image: '/placeholder-user.jpg',
  },
  {
    quote:
      'BlueSky made the whole process straightforward and easy. The staff were very helpful and kept everything clear from start to finish.',
    name: 'Riaan V.',
    place: 'Lydenburg',
    image: '/placeholder-user.jpg',
  },
  {
    quote:
      'They made the whole process smooth and stress-free. I’d recommend BlueSky to anyone who needs a fast loan.',
    name: 'Zanele S.',
    place: 'Lydenburg',
    image: '/placeholder-user.jpg',
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
    }, 6000)

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
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50 px-4 py-16 sm:px-6 lg:px-8 lg:py-24" aria-label="Customer testimonials">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.12),transparent_60%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-[radial-gradient(circle_at_bottom,rgba(249,115,22,0.08),transparent_60%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading eyebrow="What Our Customers Say" title="Trusted by borrowers across Lydenburg" />

        <div className="relative mt-12 overflow-hidden rounded-[2.5rem] border border-slate-200/70 bg-orange-50/90 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] sm:p-8">
          <div
            className="flex w-[300%] transition-transform duration-700 ease-out sm:w-auto"
            style={{
              transform: `translateX(-${index * 100}%)`,
              transition: shouldReduceMotion ? 'none' : 'transform 0.7s ease',
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="min-h-[320px] w-full shrink-0 px-3 py-6 sm:px-6 sm:py-8 lg:px-10">
                <div className="mx-auto flex h-full max-w-4xl flex-col justify-between rounded-[2rem] bg-slate-50 p-8 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.12)] ring-1 ring-slate-200/80">
                  <div>
                    <div className="flex flex-col gap-3 text-orange-500">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1 text-orange-400">
                          {Array.from({ length: 5 }).map((_, starIndex) => (
                            <Star key={starIndex} className="h-4 w-4 text-orange-400 fill-current" aria-hidden="true" />
                          ))}
                        </div>
                        <span className="rounded-full bg-orange-100 px-3 py-1 text-[10px] uppercase tracking-[0.35em] text-orange-700 shadow-sm">
                          Verified customer
                        </span>
                      </div>
                      <blockquote className="mt-2 text-xl leading-9 text-slate-900 sm:text-2xl">
                        “{t.quote}”
                      </blockquote>
                    </div>
                  </div>
                  <figcaption className="mt-10 flex items-center gap-4 border-t border-slate-200/70 pt-6">
                    <Image src={t.image} alt={t.name} width={56} height={56} className="h-14 w-14 rounded-full object-cover" />
                    <div>
                      <p className="text-base font-semibold text-slate-950">{t.name}</p>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500">{t.place}</p>
                    </div>
                  </figcaption>
                </div>
              </article>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 sm:px-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="pointer-events-auto rounded-full border border-slate-200/90 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="pointer-events-auto rounded-full border border-slate-200/90 bg-white/90 p-2 text-slate-900 shadow-sm transition hover:bg-slate-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 w-12 rounded-full transition-all ${i === index ? 'bg-orange-500 shadow-[0_0_0_6px_rgba(251,146,60,0.18)]' : 'bg-slate-200/80 hover:bg-slate-300'}`}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-pressed={i === index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
