'use client'

import { Calculator, FileCheck2, MessageCircle, Wallet } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const STEPS = [
  {
    icon: Calculator,
    title: 'Choose Your Amount',
    desc: 'Use our calculator to pick the loan amount and term that suits you.',
  },
  {
    icon: FileCheck2,
    title: 'Submit Documents',
    desc: 'Share your ID, payslip and bank statements for a quick verification.',
  },
  {
    icon: MessageCircle,
    title: 'Apply via WhatsApp or Branch',
    desc: 'Chat with us instantly or walk into one of our Lydenburg branches.',
  },
  {
    icon: Wallet,
    title: 'Receive Your Money',
    desc: 'Get approved and receive your cash quickly and securely.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-t border-orange-200/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.16),transparent_55%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="From application to cash in four steps"
          description="A clear, simple process designed to get you the help you need without the hassle."
        />

        <div className="mx-auto mt-5 max-w-2xl">
          <div className="h-px bg-gradient-to-r from-orange-300 via-sky-200 to-orange-300 opacity-40" />
        </div>

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <MotionDiv
                hover
                delay={i * 0.06}
                className="relative flex h-full flex-col gap-5 overflow-hidden rounded-[2rem] border border-slate-200/60 bg-white p-7 shadow-[0_30px_90px_-35px_rgba(15,23,42,0.16)] transition duration-500 hover:-translate-y-1 hover:border-orange-200 hover:shadow-[0_35px_95px_-30px_rgba(15,23,42,0.22)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-300 via-sky-400 to-orange-300" />
                <div className="z-10 flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 shadow-sm ring-1 ring-orange-100">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="rounded-full border border-orange-200/80 bg-orange-50 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-orange-700 shadow-sm">
                    STEP {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div className="z-10 mt-3">
                  <h3 className="font-heading text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.desc}
                  </p>
                </div>
              </MotionDiv>
            </Reveal>
          ))}
        </ol>

      </div>
    </section>
  )
}
