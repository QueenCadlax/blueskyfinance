import { Check, AlertTriangle } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MotionDiv } from '@/components/motion'

const REQUIREMENTS = [
  { label: 'Original South African ID' },
  { label: 'Latest original payslip' },
  { label: '3 months bank statements' },
  { label: 'Active bank account' },
  { label: 'Bank card' },
  { label: 'Proof of steady employment' },
]

export function Requirements() {
  return (
    <section className="relative overflow-hidden bg-slate-50 px-4 py-12 sm:px-6 lg:px-8 lg:py-16 border border-orange-200/40 ring-1 ring-orange-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_55%)] blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="What You Need to Qualify"
          title="Simple requirements, no surprises"
          description="Bring these documents to your branch visit or have digital copies ready for a quick verification."
        />


        <div className="mt-12 grid gap-6 lg:grid-cols-[1.3fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white/95 p-8 shadow-[0_36px_80px_-48px_rgba(15,23,42,0.16)]">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {REQUIREMENTS.map((req, i) => (
                <Reveal key={req.label} delay={i * 60}>
                  <MotionDiv
                    hover
                    delay={i * 0.08}
                    className="group flex items-start gap-4 rounded-3xl border border-slate-200/70 bg-slate-50/90 p-4 transition duration-300 hover:-translate-y-0.5 hover:border-orange-200 hover:bg-white"
                  >
                    <span className="mt-1 flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-100 text-orange-700 shadow-sm ring-1 ring-orange-100">
                      <Check className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <p className="text-sm font-semibold leading-6 text-slate-900">
                      {req.label}
                    </p>
                  </MotionDiv>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <MotionDiv
              hover
              delay={0.12}
              className="rounded-[2rem] border border-orange-200/70 bg-orange-50/95 p-8 shadow-[0_36px_80px_-48px_rgba(251,191,36,0.18)] transition duration-300 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3 rounded-3xl border border-orange-200 bg-orange-100 px-4 py-3 text-orange-700 shadow-sm ring-1 ring-orange-100">
                <span className="text-xl">⚠️</span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-700">
                    Important
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-800">
                SASSA grants cannot be accepted as proof of income.
              </p>
            </MotionDiv>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
