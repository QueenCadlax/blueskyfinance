import {
  CreditCard,
  FileText,
  IdCard,
  Landmark,
  MapPin,
  Receipt,
  Briefcase,
  AlertTriangle,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { MotionDiv } from '@/components/motion'

const REQUIREMENTS = [
  { icon: IdCard, label: 'Original South African ID' },
  { icon: Receipt, label: 'Latest original payslip' },
  { icon: FileText, label: '3 months bank statements' },
  { icon: Landmark, label: 'Active bank account' },
  { icon: CreditCard, label: 'Bank card' },
  { icon: MapPin, label: 'Proof of address' },
  { icon: Briefcase, label: 'Proof of steady employment' },
]

export function Requirements() {
  return (
    <section className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24 border-t border-gold-soft">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What You Need to Qualify"
          title="Simple requirements, no surprises"
          description="Bring these documents to your branch visit or have digital copies ready for a quick verification."
        />

        <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {REQUIREMENTS.map((req, i) => (
            <Reveal key={req.label} delay={i * 60}>
              <MotionDiv hover delay={i * 0.08} className="relative flex min-h-[170px] flex-col gap-4 rounded-3xl border border-gold-soft bg-gradient-to-br from-white/60 to-background/60 p-5 shadow-soft card-hover">
                <div className="absolute -inset-x-6 -top-6 h-1 bg-gold-100 rounded-t-md" />
                <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 shadow-md ring-1 ring-orange-100">
                  <req.icon className="h-5 w-5 text-orange-600 stroke-current" aria-hidden="true" />
                </div>
                <span className="z-10 mt-2 font-semibold text-foreground">
                  {req.label}
                </span>
              </MotionDiv>
            </Reveal>
          ))}

          <Reveal delay={120}>
            <div className="relative flex min-h-[170px] flex-col gap-4 rounded-3xl border border-destructive/30 bg-destructive/5 p-5 shadow-soft transition-transform duration-500 hover:-translate-y-1 hover:shadow-soft-lg">
              <div className="absolute -inset-x-6 -top-6 h-1 bg-destructive/15 rounded-t-md" />
              <div className="z-10 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/15 text-destructive">
                <AlertTriangle className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="z-10">
                <p className="font-heading text-base font-semibold text-destructive">
                  Note: SASSA grants are not accepted
                </p>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                  SASSA grants cannot be used as proof of income for loan
                  applications. Applicants should have a regular employment
                  income source.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
