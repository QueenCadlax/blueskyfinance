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

export function Hero() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.section
      id="home"
      className="relative overflow-hidden bg-secondary pt-16"
      aria-label="Hero"
      initial={shouldReduceMotion ? undefined : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background image of employee + building */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero 4.png"
          alt="A BlueSky consultant standing in front of a modern branch building, cropped to keep the focus above the hands"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[58%_08%] sm:object-[72%_18%] md:object-[74%_20%] lg:object-[52%_08%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/10 to-background/6 lg:via-background/20 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:from-background/30" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-[42rem] bg-gradient-to-r from-slate-950/16 via-slate-950/8 to-transparent lg:hidden" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-3xl bg-gradient-to-r from-slate-950/85 via-slate-950/15 to-transparent lg:block" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Copy */}
        <div className="max-w-xl rounded-[2rem] bg-slate-950/10 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <OpenStatus />
          </div>

          <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-white text-balance sm:text-4xl lg:text-6xl">
            A Helping Hand
            <br />
            <span className="text-primary">You Can Count On</span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-slate-100 sm:text-lg">
            Responsible short-term loans from{' '}
            <span className="font-semibold text-orange-500">
              {formatRand(COMPANY.loanMin)}
            </span>{' '}
            <span className="font-semibold text-white">to</span>{' '}
            <span className="font-semibold text-orange-500">
              {formatRand(COMPANY.loanMax)}
            </span>{' '}
            with fast approvals, transparent fees and friendly local service.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <motion.div
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : undefined}
              whileTap={!shouldReduceMotion ? { scale: 0.98 } : undefined}
              className="inline-block w-full sm:w-auto"
            >
              <LinkButton
                external
                href={waLink(DEFAULT_WA_MESSAGE)}
                className="flex h-auto w-full items-center justify-center rounded-full bg-[#25D366] py-2.5 text-sm font-semibold text-white hover:bg-[#1fb855] sm:w-auto sm:text-base"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Apply on WhatsApp
              </LinkButton>
            </motion.div>
            <motion.div
              whileHover={!shouldReduceMotion ? { y: -2 } : undefined}
              className="inline-block w-full sm:w-auto"
            >
              <LinkButton
                variant="outline"
                href="#contact"
                className="flex h-auto w-full items-center justify-center rounded-full border-primary/30 bg-background/80 py-2.5 text-sm font-semibold text-primary backdrop-blur hover:bg-primary hover:text-primary-foreground sm:w-auto sm:text-base"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Visit Our Branches
              </LinkButton>
            </motion.div>
          </div>

        </div>

        {/* Placeholder column (calculator moved to its own section) */}
        <div className="hidden lg:block" />
      </div>
    </motion.section>
  )
}
