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
    <section id="how-it-works" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How It Works"
          title="From application to cash in four steps"
          description="A clear, simple process designed to get you the help you need without the hassle."
        />

        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 90} className="relative">
              <MotionDiv hover delay={i * 0.06} className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                    <step.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-4xl font-extrabold text-secondary-foreground/10">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </MotionDiv>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
