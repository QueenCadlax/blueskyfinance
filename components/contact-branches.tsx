'use client'

import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { LinkButton } from '@/components/link-button'
import {
  BRANCHES,
  COMPANY,
  TRADING_HOURS,
  telLink,
  waLink,
} from '@/lib/site'

export function ContactBranches() {
  return (
    <section id="contact" className="bg-secondary px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Visit Us or Get in Touch"
          title="Visit one of our branches or get in touch today."
          description="Reach us instantly on WhatsApp, give us a call, or walk into either of our two branches. We’re always happy to help."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[repeat(2,minmax(0,1fr))_360px]">
          {BRANCHES.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 90}>
              <MotionDiv
                hover
                delay={i * 0.06}
                className="flex h-full flex-col overflow-hidden rounded-[2.25rem] border border-orange-100 bg-white/95 p-6 shadow-soft-lg transition duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-700">
                      {branch.id === 'branch-1' ? 'Voortrekker Street' : 'Viljoen Street'}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-bold text-slate-900">
                      {branch.name}
                    </h3>
                  </div>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm ring-1 ring-orange-200">
                    <MapPin className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <address className="mt-6 space-y-1 text-sm not-italic leading-7 text-slate-600">
                  {branch.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-6 space-y-2 text-sm">
                  {branch.phones.map((p) => (
                    <a
                      key={p}
                      href={telLink(p)}
                      className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-900 transition hover:border-orange-200 hover:bg-orange-50/50"
                    >
                      <Phone className="h-4 w-4 text-orange-600" aria-hidden="true" />
                      {p}
                    </a>
                  ))}
                </div>

                <a
                  href={branch.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 rounded-[1.75rem] border border-slate-200 bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 px-4 py-4 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-orange-200 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm ring-1 ring-orange-200">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-slate-900">Find us on Google Maps</span>
                        <span className="block truncate text-xs text-slate-500">
                          Directions &amp; route
                        </span>
                      </span>
                    </span>
                    <span className="rounded-full bg-orange-100 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-700">
                      Map
                    </span>
                  </div>
                </a>

                <div className="mt-auto grid gap-3 pt-6">
                  <LinkButton
                    external
                    href={waLink(
                      `Hi BlueSky (${branch.name}), I’d like to apply for a loan.`,
                      branch.whatsapp,
                    )}
                    className="w-full rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/20 hover:bg-[#1fb855]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp us
                  </LinkButton>
                </div>
              </MotionDiv>
            </Reveal>
          ))}

          <Reveal delay={180}>
            <MotionDiv
              hover
              delay={0.18}
              className="flex h-full flex-col gap-4 overflow-hidden rounded-[2.25rem] border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-white/80 p-6 shadow-soft-lg"
            >
              <div className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm ring-1 ring-orange-100">
                <div className="flex items-center gap-3 text-slate-900">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-600">
                      Call Main Office
                    </p>
                    <a
                      href={telLink(COMPANY.officePhone)}
                      className="mt-1 block text-lg font-semibold text-slate-900 transition hover:text-orange-700"
                    >
                      {COMPANY.officePhone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm ring-1 ring-orange-100">
                <div className="flex items-center gap-3 text-slate-900">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-600">
                      Email Us
                    </p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="mt-1 block break-words text-sm font-semibold leading-6 text-slate-900 transition hover:text-orange-700"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] bg-white/90 p-4 shadow-sm ring-1 ring-orange-100">
                <div className="flex items-center gap-3 text-slate-900">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-orange-100 text-orange-700 shadow-sm">
                    <Clock className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-orange-600">
                      Trading Hours
                    </p>
                    <dl className="mt-3 space-y-2 text-sm text-slate-700">
                      {TRADING_HOURS.map((row) => (
                        <div key={row.day} className="flex items-center justify-between">
                          <dt className="text-muted-foreground">{row.day}</dt>
                          <dd className="font-semibold text-slate-900">{row.hours}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </MotionDiv>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
