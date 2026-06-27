import { Banknote, CalendarClock, LifeBuoy, Store } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { MotionDiv } from '@/components/motion'
import { Reveal } from '@/components/reveal'
import { COMPANY, formatRand } from '@/lib/site'

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
    title: 'Payday Loans',
    desc: 'Short-term salary advances to get you through before payday.',
  },
  {
    icon: LifeBuoy,
    title: 'Emergency Loans',
    desc: 'Quick cash for unexpected expenses and urgent needs.',
  },
  {
    icon: Store,
    title: 'Walk-in Branch Assistance',
    desc: 'Friendly in-person support at our two Lydenburg branches.',
  },
]

export function LoanProducts() {
  return (
    <section id="loans" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-gold-soft bg-slate-950/5 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Loan Solutions"
          title="Loans built around your real life"
          description="Whatever the reason, we offer responsible lending options with transparent fees and a friendly local team ready to help."
        />

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <MotionDiv
                delay={i * 0.06}
                className="relative flex min-h-[240px] flex-col rounded-[2rem] border border-slate-200/70 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-[0_25px_60px_-30px_rgba(15,23,42,0.5)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_35px_90px_-30px_rgba(15,23,42,0.35)]"
              >
                <div className="absolute -inset-x-6 -top-6 h-1 bg-gold-300/30 rounded-t-md" />
                <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary shadow-sm ring-1 ring-primary/10">
                  <p.icon className="h-7 w-7 text-primary stroke-current" aria-hidden="true" />
                </div>
                <h3 className="z-10 mt-4 font-heading text-lg font-bold text-foreground">
                  {p.title}
                </h3>
                <p className="z-10 mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </MotionDiv>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
