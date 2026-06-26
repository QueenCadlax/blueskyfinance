'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MotionDiv } from '@/components/motion'
import { cn } from '@/lib/utils'
import { calculateLoan } from '@/lib/loan'
import { formatRand } from '@/lib/site'

const FAQS = [
  {
    q: 'How much interest do you charge?',
    a: 'Interest is charged at 5% per month (simple interest). This is reduced to 3% per month on additional loans taken within the same calendar year.',
  },
  {
    q: 'What is the monthly service fee?',
    a: 'A service fee of R60 per month plus VAT applies, in line with the National Credit Act.',
  },
  {
    q: 'What is the initiation fee?',
    a: 'A once-off initiation fee of R165 on the first R1,000, plus 10% on any amount above R1,000.',
  },
  {
    q: 'Is credit life cover included?',
    a: 'Yes. Credit life cover is R5.50 per R1,000 borrowed and covers Death, Disability and Retrenchment, giving you and your family peace of mind.',
  },
]

export function Fees() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-gold-soft">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Fees &amp; Interest"
          title="Clear, regulated and transparent"
          description="All fees and interest are governed by the National Credit Act No. 34 of 2005. Here is exactly what to expect."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_380px]">
          {/* FAQ accordion */}
          <Reveal className="divide-y divide-border overflow-hidden rounded-3xl border border-gold-soft bg-background/60 shadow-soft">
            {FAQS.map((faq, i) => {
              const isOpen = open === i
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-foreground">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 shrink-0 text-gold transition-transform duration-300',
                        isOpen && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-in-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </Reveal>

          {/* Representative example */}
          <Reveal delay={120}>
            <MotionDiv
              hover
              delay={0.12}
              className="relative rounded-3xl border border-orange-100 bg-orange-50/90 p-6 shadow-soft overflow-hidden"
            >
              <div className="absolute -inset-x-6 -top-6 h-1 bg-orange-200 rounded-t-md" />
              <h3 className="font-heading text-lg font-bold text-orange-700">
                Representative Example
              </h3>
              <dl className="mt-4 space-y-3 text-sm">
                <ExRow label="Loan Amount" value="R2,500" />
                <ExRow label="Term" value="90 Days" />
                <ExRow label="Interest &amp; Fees" value="R945.46" />
                <div className="flex items-center justify-between border-t border-border/40 pt-3">
                  <dt className="font-semibold text-orange-700">Total Repayment</dt>
                  <dd className="font-heading text-xl font-extrabold text-orange-700">
                    R3,445.46
                  </dd>
                </div>
                <ExRow label="Representative APR (simple annualisation)" value="60%" />
              </dl>
              <p className="mt-4 text-xs leading-relaxed text-orange-700/80">
                Credit life cover: R5.50 per R1,000 borrowed (covers death,
                disability &amp; retrenchment).
              </p>
            </MotionDiv>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function ExRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold tabular-nums">{value}</dd>
    </div>
  )
}
