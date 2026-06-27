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
  { icon: Receipt, title: 'Transparent Fees', desc: 'No hidden charges - what you see is what you pay.' },
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
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-white px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.08),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Choose BlueSky"
          title="A lender you can genuinely trust"
          description="White-glove attention, fast approvals, and honest pricing made to feel effortless."
        />

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <MotionDiv
                hover
                delay={(i % 3) * 0.05}
                className="group flex h-full flex-col gap-4 rounded-[2rem] border border-slate-200/70 bg-white/90 p-5 shadow-[0_28px_80px_-42px_rgba(15,23,42,0.18)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_-38px_rgba(15,23,42,0.2)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-sky-50 to-sky-100 text-sky-700 shadow-sm ring-1 ring-sky-100">
                    <r.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <div>
                      <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                        {r.title}
                      </h3>
                    </div>
                    <div className="mt-3 h-px w-10 rounded-full bg-sky-100" />
                  </div>
                </div>
                <p className="mt-1 text-sm leading-7 text-slate-600">
                  {r.desc}
                </p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
