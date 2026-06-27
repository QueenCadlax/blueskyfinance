import { Banknote, CalendarClock, LifeBuoy, Store } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { COMPANY, DEFAULT_WA_MESSAGE, formatRand, waLink } from '@/lib/site'

const PRODUCTS = [
  {
    icon: Banknote,
    title: 'Personal Loans',
    desc: `Flexible personal loans from ${formatRand(COMPANY.loanMin)} to ${formatRand(
      COMPANY.loanMax,
    )} to help you today.`,
  },
  {
    icon: CalendarClock,
    title: 'Payday Support',
    desc: 'Short-term salary advances to get you through before payday.',
  },
  {
    icon: LifeBuoy,
    title: 'Emergency Cash',
    desc: 'Quick help for unexpected expenses and urgent needs.',
  },
  {
    icon: Store,
    title: 'Branch Support',
    desc: 'Friendly in-person service at our two Lydenburg branches.',
  },
]

export function LoanProducts() {
  return (
    <section id="loans" className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border-t border-orange-200/80 bg-orange-50/90 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,rgba(248,181,0,0.18),transparent_55%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-[radial-gradient(circle_at_bottom,rgba(248,181,0,0.20),transparent_50%)] blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Loan Solutions"
          title="Loans built around your real life"
          description="Short-term loans tailored to your cashflow, with transparent pricing and local support."
        />

        <div className="mt-10 grid grid-cols-2 gap-6 auto-rows-fr lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <MotionDiv
                delay={i * 0.06}
                className="relative flex h-full flex-col rounded-[2rem] border border-orange-200/80 bg-white/95 p-6 shadow-[0_32px_70px_-35px_rgba(15,23,42,0.18)] transition duration-500 hover:-translate-y-1 hover:border-orange-300 hover:shadow-[0_40px_85px_-35px_rgba(15,23,42,0.20)]"
              >
                <div className="absolute inset-x-6 -top-6 h-1.5 rounded-t-2xl bg-gradient-to-r from-orange-300 via-sky-400 to-orange-300" />
                <div className="z-10 mt-5 flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {p.desc}
                  </p>
                </div>
              </MotionDiv>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={waLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
          >
            Apply via WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
