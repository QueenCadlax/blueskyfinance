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
  { icon: Zap, title: 'Same-Day Approvals', desc: 'Fast decisions when you need money most.' },
  { icon: MessageCircle, title: 'Easy WhatsApp Applications', desc: 'Apply from your phone in just a few minutes.' },
  { icon: HeartHandshake, title: 'Friendly Local Team', desc: 'Professional service from people who care.' },
  { icon: Store, title: 'Two Convenient Branches', desc: 'Visit us in Lydenburg for face-to-face support.' },
  { icon: ShieldCheck, title: 'NCR Registered', desc: 'A registered provider committed to responsible lending.' },
  { icon: Receipt, title: 'Transparent Fees', desc: 'No hidden charges. Everything is explained upfront.' },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-slate-100 to-white px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,rgba(56,189,248,0.08),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Why Customers Choose BlueSky"
          title="Trusted. Transparent. Local."
          description="The reasons local borrowers choose BlueSky Financial Services."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-3 xl:gap-8">
          {REASONS.map((r, i) => (
            <Reveal key={r.title} delay={(i % 3) * 80}>
              <MotionDiv
                hover
                delay={(i % 3) * 0.05}
                className="group flex h-full flex-col gap-4 rounded-[2rem] border border-slate-200/70 bg-white/95 p-5 shadow-[0_20px_60px_-30px_rgba(15,23,42,0.16)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_-28px_rgba(15,23,42,0.18)]"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 shadow-sm ring-1 ring-orange-100">
                    <r.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold tracking-tight text-slate-900">
                      {r.title}
                    </h3>
                  </div>
                </div>
                <p className="text-sm leading-7 text-slate-600">
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
