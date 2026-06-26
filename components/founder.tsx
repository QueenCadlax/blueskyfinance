'use client'

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'

export function Founder() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mx-auto">
        <MotionDiv hover delay={0.08} className="grid max-w-6xl items-center gap-8 rounded-3xl border border-border bg-card p-6 shadow-soft-lg sm:p-10 lg:grid-cols-[320px_1fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-xs overflow-hidden rounded-3xl">
          <Image
            src="/founder.png"
            alt="Mr Kenny Bongwe, Founder of BlueSky Financial Services"
            width={480}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
            Meet Our Founder
          </span>
          <Quote className="mt-5 h-9 w-9 text-gold-300" aria-hidden="true" />
          <blockquote className="mt-4 max-w-prose font-sans text-base sm:text-lg font-medium leading-relaxed text-slate-700 tracking-tight">
            "At BlueSky Financial Services, we believe everyone deserves access to fair, responsible financial assistance when they need it most. Our commitment is to provide transparent lending solutions with professionalism, integrity and respect."
          </blockquote>
          <div className="mt-5">
            <p className="text-sm font-medium text-foreground">Mr Kenny Bongwe</p>
            <p className="mt-1 text-sm text-muted-foreground">Founder, BlueSky Financial Services</p>
          </div>
        </div>
</MotionDiv>
      </Reveal>
    </section>
  )
}
