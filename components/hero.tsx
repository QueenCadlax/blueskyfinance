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
      className="relative overflow-hidden bg-secondary pt-16 min-h-[80vh] sm:min-h-[85vh] lg:min-h-[auto]"
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
          className="object-cover object-[100%_50%] sm:object-[100%_50%] md:object-[92%_50%] lg:object-[52%_08%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/0 via-background/10 to-background/6 lg:via-background/20 lg:to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 lg:hidden"
          style={{
            background:
              'linear-gradient(90deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.15) 100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent lg:from-background/30" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-full max-w-[42rem] bg-gradient-to-r from-slate-950/16 via-slate-950/8 to-transparent lg:hidden" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-full max-w-3xl bg-gradient-to-r from-slate-950/85 via-slate-950/15 to-transparent lg:block" />

      <div className="relative z-10 mx-auto grid min-h-[80vh] max-w-7xl gap-8 px-4 pb-14 pt-10 sm:min-h-[85vh] sm:px-6 lg:grid-cols-[1.05fr_minmax(0,460px)] lg:gap-6 lg:px-8 lg:pb-20 lg:pt-16 lg:min-h-auto">
        {/* Copy */}
        <div className="max-w-[320px] p-6 sm:max-w-[360px] lg:max-w-xl lg:p-6">
          <div className="flex items-center gap-3">
            <OpenStatus />
          </div>

          <h1 className="mt-5 font-heading text-[3rem] font-extrabold leading-tight tracking-tight text-white text-balance sm:text-[3.75rem] md:text-[4.5rem] lg:text-6xl">
            A Helping Hand
            <br />
            <span className="text-primary">You Can Count On</span>
          </h1>

          <p className="mt-5 max-w-[320px] text-base leading-8 text-slate-100 sm:max-w-[360px] sm:text-lg">
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

          <div className="mt-7 grid gap-4">
            <motion.div
              whileHover={!shouldReduceMotion ? { scale: 1.03 } : undefined}
              whileTap={!shouldReduceMotion ? { scale: 0.98 } : undefined}
              className="inline-block w-full"
            >
              <LinkButton
                external
                href={waLink(DEFAULT_WA_MESSAGE)}
                className="flex h-auto w-full items-center justify-center rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white transition hover:bg-[#1fb855] sm:text-base"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Apply on WhatsApp
              </LinkButton>
            </motion.div>
            <motion.div
              whileHover={!shouldReduceMotion ? { y: -2 } : undefined}
              className="inline-block w-full"
            >
              <LinkButton
                variant="outline"
                href="#contact"
                className="flex h-auto w-full items-center justify-center rounded-full border border-white/70 bg-white/10 py-3 text-sm font-semibold text-white transition hover:bg-white/15 sm:text-base lg:border-primary/30 lg:bg-background/80 lg:text-primary lg:hover:bg-primary lg:hover:text-primary-foreground"
              >
                <MapPin className="h-5 w-5" aria-hidden="true" />
                Visit Our Branches
              </LinkButton>
            </motion.div>
          </div>

          <div className="mt-8 rounded-[2rem] bg-white p-5 shadow-soft-lg lg:hidden">
            <div className="grid gap-4">
              <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4">
                <ShieldCheck className="mt-1 h-5 w-5 text-orange-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">NCR registered credit provider</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Trusted local lending with clear terms.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4">
                <MessageCircle className="mt-1 h-5 w-5 text-sky-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Apply in minutes on WhatsApp</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Fast support and friendly service.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-3xl border border-slate-200/80 bg-slate-50 p-4">
                <MapPin className="mt-1 h-5 w-5 text-emerald-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-slate-950">Nearby branch support</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">Speak to a local team in Lydenburg.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Placeholder column (calculator moved to its own section) */}
        <div className="hidden lg:block" />
      </div>
    </motion.section>
  )
}
