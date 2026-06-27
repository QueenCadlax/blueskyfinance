'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'

export function Founder() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-orange-50 to-orange-100 px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal className="flex justify-center">
        <MotionDiv
          hover
          delay={0.08}
          className="mx-auto grid w-full max-w-6xl items-center gap-8 overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white/95 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] sm:p-10 lg:grid-cols-[360px_1fr] lg:gap-14"
        >
          <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[2rem] bg-slate-900/5 ring-1 ring-slate-200/80">
            <Image
              src="/founder.png"
              alt="Mr Kenny Bongwe, Founder of BlueSky Financial Services"
              width={480}
              height={560}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <span className="inline-flex items-center justify-center rounded-full bg-orange-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-orange-700 shadow-sm ring-1 ring-orange-100">
              A Message From Our Founder
            </span>
            <Quote className="mx-auto mt-7 h-12 w-12 text-orange-400 lg:mx-0" aria-hidden="true" />
            <blockquote className="mx-auto mt-6 max-w-2xl text-xl font-semibold leading-8 text-slate-900 sm:text-2xl lg:mx-0">
              “At BlueSky Financial Services, we believe everyone deserves access to fair, responsible financial assistance when they need it most. Our commitment is to provide transparent lending solutions with professionalism, integrity and respect."
            </blockquote>
            <div className="mt-8">
              <p className="text-base font-semibold text-slate-950">Mr Kenny Bongwe</p>
              <p className="mt-1 text-sm uppercase tracking-[0.24em] text-orange-700">Founder, BlueSky Financial Services</p>
            </div>
          </div>
        </MotionDiv>
      </Reveal>
    </section>
  )
}
