'use client'

import {
  Zap,
  Receipt,
  HeartHandshake,
  MessageCircle,
  Store,
  ShieldCheck,
  BadgeCheck,
  MapPinned,
  Scale,
} from 'lucide-react'
import { MotionDiv } from '@/components/motion'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'

const REASONS = [
  { icon: Zap, title: 'Fast Approvals', desc: 'Quick turnaround when you need it.' },
  { icon: Receipt, title: 'Transparent Fees', desc: 'No hidden charges — what you see is what you pay.' },
  { icon: HeartHandshake, title: 'Friendly Staff', desc: 'We treat you with respect and care.' },
  { icon: MessageCircle, title: 'WhatsApp Applications', desc: 'Apply and chat with us instantly.' },
  { icon: Store, title: 'Walk-In Service', desc: 'No internet? No problem. Walk in, we’ll help.' },
  { icon: ShieldCheck, title: 'NCR Registered', desc: 'Registered, regulated and trustworthy.' },
  { icon: BadgeCheck, title: 'SACRRA Member', desc: 'Committed to responsible credit reporting.' },
  { icon: MapPinned, title: 'Local Support', desc: 'Proudly serving the Lydenburg community.' },
  { icon: Scale, title: 'Responsible Lending', desc: 'Loans based on affordability assessments.' },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose BlueSky"
          title="A lender you can genuinely trust"
          description="We combine the speed of modern fintech with the warmth of a local team that actually cares about your wellbeing."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <MotionDiv hover delay={(i % 3) * 0.05} className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <r.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    {r.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {r.desc}
                  </p>
                </div>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
