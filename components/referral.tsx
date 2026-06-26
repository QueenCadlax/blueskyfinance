'use client'

import { Diamond, Gift, MessageCircle } from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import { waLink } from '@/lib/site'

const TIERS = [
  { range: 'R250 – R550', reward: 'R20' },
  { range: 'R600 – R950', reward: 'R50' },
  { range: 'R1,000 – R1,950', reward: 'R80' },
  { range: 'R2,000 & above', reward: 'R100' },
]

export function Referral() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-white/60 to-background/60 p-6 shadow-soft-lg sm:p-10 border border-gold-soft">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gold-50 px-3 py-1 text-xs font-semibold text-gold ring-1 ring-gold">
              <Gift className="h-3.5 w-3.5" aria-hidden="true" />
              Refer &amp; Earn Rewards
            </span>
            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Refer a friend. Earn cash rewards.
            </h2>
            <p className="mt-3 max-w-md text-foreground/75">
              Refer a friend, family member or colleague. When their loan is
              approved, you receive a cash reward — simple, secure and fair.
            </p>
            <p className="mt-4 text-sm text-foreground/70">
              Rewards are paid after the referred borrower's loan has been
              approved and disbursed. Terms apply.
            </p>
              <LinkButton
                external
                size="lg"
                href={waLink(
                  'Hi BlueSky Financial Services, I would like to refer a friend. Here are the referral program details: Refer a friend, earn cash rewards. When their loan is approved and disbursed, you can earn R20 for R250–R550, R50 for R600–R950, R80 for R1,000–R1,950, and R100 for R2,000 and above. Please share full details with them.'
                )}
                className="mt-6 h-11 rounded-full bg-orange-600 text-white shadow-md transition hover:bg-orange-700"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Refer on WhatsApp
              </LinkButton>
          </div>

          <ul className="space-y-3">
            {TIERS.map((tier, i) => (
              <li key={tier.range}>
                <MotionDiv hover delay={i * 0.05} className="rounded-[32px] border border-orange-100/40 bg-white/90 p-4 shadow-soft">
                  <div className="flex items-start gap-3 sm:items-center">
                    <div className="mt-2 h-2.5 w-2.5 rounded-full bg-orange-200 shadow-sm" />
                    <div className="flex-1">
                      <div className="text-base font-semibold tracking-tight text-slate-950">{tier.range}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-500">On approved loan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-semibold text-orange-600">{tier.reward}</div>
                      <div className="mt-1 text-[11px] uppercase tracking-[0.26em] text-slate-500">Cash reward</div>
                    </div>
                  </div>
                </MotionDiv>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
