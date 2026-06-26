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
    <section id="contact" className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact &amp; Branches"
          title="We’re right here in Lydenburg"
          description="Reach us instantly on WhatsApp, give us a call, or walk into either of our two branches. We’re always happy to help."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Branches */}
          {BRANCHES.map((branch, i) => (
            <Reveal key={branch.id} delay={i * 90}>
              <MotionDiv hover delay={i * 0.06} className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-2 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {branch.name}
                  </h3>
                </div>
                <address className="mt-3 text-sm not-italic leading-relaxed text-muted-foreground">
                  {branch.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>

                <div className="mt-4 space-y-2 text-sm">
                  {branch.phones.map((p) => (
                    <a
                      key={p}
                      href={telLink(p)}
                      className="flex items-center gap-2 font-medium text-foreground hover:text-primary"
                    >
                      <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                      {p}
                    </a>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-2 pt-5">
                  <LinkButton
                    external
                    href={waLink(
                      `Hi BlueSky (${branch.name}), I’d like to apply for a loan.`,
                      branch.whatsapp,
                    )}
                    className="w-full rounded-full bg-[#25D366] text-white hover:bg-[#1fb855]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    WhatsApp {branch.whatsapp}
                  </LinkButton>
                  <LinkButton
                    external
                    variant="outline"
                    href={branch.maps}
                    className="w-full rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    View on Map
                  </LinkButton>
                </div>
              </MotionDiv>
            </Reveal>
          ))}

          {/* Contact + hours */}
          <Reveal delay={180}>
            <MotionDiv hover delay={0.18} className="flex h-full flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft">
              <a
                href={telLink(COMPANY.officePhone)}
                className="flex items-center gap-3 rounded-2xl bg-secondary p-3 transition-colors hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs text-muted-foreground">
                    Call Main Office
                  </span>
                  <span className="font-semibold text-foreground">
                    {COMPANY.officePhone}
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-3 rounded-2xl bg-secondary p-3 transition-colors hover:bg-primary/10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted-foreground">
                    Email Us
                  </span>
                  <span className="block truncate text-sm font-semibold text-foreground">
                    {COMPANY.email}
                  </span>
                </span>
              </a>

              <div className="rounded-2xl bg-secondary p-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  <h3 className="font-heading text-sm font-bold text-foreground">
                    Trading Hours
                  </h3>
                </div>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {TRADING_HOURS.map((row) => (
                    <div
                      key={row.day}
                      className="flex items-center justify-between"
                    >
                      <dt className="text-muted-foreground">{row.day}</dt>
                      <dd className="font-semibold text-foreground">
                        {row.hours}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </MotionDiv>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
