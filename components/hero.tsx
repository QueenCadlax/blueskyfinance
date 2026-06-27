"use client"

import Image from 'next/image'
import { MapPin, MessageCircle, ShieldCheck } from 'lucide-react'
import { LinkButton } from '@/components/link-button'
import { LoanCalculator } from '@/components/loan-calculator'
import { OpenStatus } from '@/components/open-status'
import {
  COMPANY,
  DEFAULT_WA_MESSAGE,
  formatRand,
  waLink,
} from '@/lib/site'
import { motion, useReducedMotion } from 'framer-motion'
import { MotionDiv } from './motion'

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-secondary pt-16"
      aria-label="Hero"
    >
      {/* Mobile / tablet hero image appears above the copy */}
      <div className="relative z-0 lg:hidden h-[420px] sm:h-[480px]">
        <Image
          src="/hero 4.png"
          alt="A friendly BlueSky Financial Services consultant standing outside a modern branch in Lydenburg"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_20%] sm:object-[65%_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-50/95 via-sky-50/80 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(240,249,255,0.96),rgba(226,242,255,0.24)_35%,transparent_80%)]" />
      </div>

      {/* Desktop background image stays behind the hero content */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/hero 4.png"
          alt="A friendly BlueSky Financial Services consultant standing outside a modern branch in Lydenburg"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_15%] sm:object-[62%_14%] md:object-[55%_15%] lg:object-[50%_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/10 to-background/6 md:via-background/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent md:from-background/30" />
      </div>

      <MotionDiv x={-18} delay={0.05} className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <OpenStatus />
          </div>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            A Helping Hand
            <br />
            <span className="text-primary">You Can Count On</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-foreground sm:text-lg">
            Quick, transparent loans from{' '}
            <span className="font-semibold text-primary">
              {formatRand(COMPANY.loanMin)} to {formatRand(COMPANY.loanMax)}
            </span>{' '}
            with fast approvals and local Lydenburg support.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.div
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : undefined}
              whileTap={!shouldReduceMotion ? { scale: 0.98 } : undefined}
              className="inline-block"
            >
              <LinkButton
                external
                href={waLink(DEFAULT_WA_MESSAGE)}
                className="h-auto rounded-full bg-[#25D366] py-3 text-base font-semibold text-white hover:bg-[#1fb855]"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Apply on WhatsApp
              </LinkButton>
            </motion.div>
            <motion.div
              whileHover={!shouldReduceMotion ? { y: -2 } : undefined}
              className="inline-block"
            >
              <LinkButton
                variant="outline"
                href="#contact"
                className="h-auto rounded-full border-primary/30 bg-background/80 py-3 text-base font-semibold text-primary backdrop-blur hover:bg-primary hover:text-primary-foreground"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Visit Our Branches
              </LinkButton>
            </motion.div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-600 sm:mt-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-3 py-1 font-semibold text-slate-700 shadow-sm">
              <ShieldCheck className="h-4 w-4 text-orange-500" aria-hidden="true" />
              NCR registered • SACRRA member • Two local branches
            </span>
          </div>
        </div>

        {/* Placeholder column (calculator moved to its own section) */}
        <div className="hidden lg:block" />
      </MotionDiv>
    </section>
  )
}
