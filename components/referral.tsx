'use client'

import { Diamond, Gift, MessageCircle } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { waLink } from '@/lib/site'

const TIERS = [
  { range: 'R250 - R550', reward: 'R20' },
  { range: 'R600 - R950', reward: 'R50' },
  { range: 'R1,000 - R1,950', reward: 'R80' },
  { range: 'R2,000 & above', reward: 'R100' },
]

export function Referral() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-orange-100/70 bg-gradient-to-br from-white via-orange-50 to-orange-100 p-6 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.18)] sm:p-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-heading text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
              Refer a Friend & Earn Cash
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-700">
              Know someone who needs a loan? Refer them to BlueSky and earn up to <span className="font-semibold text-slate-950">R100</span> once their loan is approved.
            </p>
            <LinkButton
              external
              size="lg"
              href={waLink(
                'Hi BlueSky Financial Services, I would like to refer a friend. Here are the referral program details: Refer a friend, earn cash rewards. When their loan is approved and disbursed, you can earn R20 for R250 - R550, R50 for R600 - R950, R80 for R1,000 - R1,950, and R100 for R2,000 and above. Please share full details with them.'
              )}
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-orange-600 px-6 text-sm font-semibold text-white shadow-xl shadow-orange-500/20 transition duration-300 hover:bg-orange-500"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              Start Referring on WhatsApp
            </LinkButton>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {TIERS.map((tier, i) => (
              <MotionDiv
                key={tier.range}
                hover
                delay={i * 0.05}
                className="flex items-center justify-between rounded-[2rem] border border-sky-200/80 bg-sky-50 p-5 shadow-[0_18px_40px_-22px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-18px_rgba(15,23,42,0.16)]"
              >
                <div>
                  <p className="text-sm font-semibold tracking-tight text-slate-950">
                    {tier.range} Loan
                  </p>
                </div>
                <div className="rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
                  Earn {tier.reward}
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
