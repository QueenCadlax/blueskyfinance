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
      {/* Background image of employee + building */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero 4.png"
          alt="A BlueSky consultant standing in front of a modern branch building, cropped to keep the focus above the hands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_12%] sm:object-[50%_10%] md:object-[48%_08%] lg:object-[52%_08%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/10 to-background/6 md:via-background/20 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent md:from-background/30" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-3xl bg-gradient-to-r from-slate-950/85 via-slate-950/15 to-transparent md:block" />

      <MotionDiv x={-18} delay={0.05} className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Copy */}
        <div className="max-w-xl">
          <div className="flex items-center gap-3">
            <OpenStatus />
          </div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-[1.05] tracking-tight text-foreground text-balance sm:text-4xl md:text-5xl lg:text-6xl">
            A Helping Hand
            <br />
            <span className="text-primary">You Can Count On</span>
          </h1>

          <div className="mt-5 max-w-[18rem] rounded-3xl bg-sky-100/90 px-4 py-4 text-base leading-relaxed text-slate-950 sm:max-w-md sm:text-lg">
            <p>
              Responsible short-term loans from{' '}
              <span className="font-semibold text-orange-500">
                {formatRand(COMPANY.loanMin)}
              </span>{' '}
              <span className="font-semibold text-slate-950">to</span>{' '}
              <span className="font-semibold text-orange-500">
                {formatRand(COMPANY.loanMax)}
              </span>{' '}
              <span className="block sm:inline">with fast approvals,</span>{' '}
              <span className="block sm:inline">transparent fees and friendly local service.</span>
            </p>
          </div>

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

        </div>

        {/* Placeholder column (calculator moved to its own section) */}
        <div className="hidden lg:block" />
      </MotionDiv>
    </section>
  )
}
