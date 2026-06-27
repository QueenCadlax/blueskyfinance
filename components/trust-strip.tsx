import {
  Building2,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Zap,
  BadgeCheck,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { COMPANY } from '@/lib/site'

interface TrustStripProps {
  className?: string
  overlay?: boolean
}

const ITEMS = [
  { icon: ShieldCheck, title: 'NCR Registered', sub: COMPANY.ncr },
  { icon: BadgeCheck, title: 'SACRRA Registered', sub: COMPANY.sacrra },
  { icon: Zap, title: 'Fast Approvals', sub: 'Same-day decisions' },
  { icon: UserCheck, title: 'Walk-ins Welcome', sub: 'No appointment needed' },
  { icon: MessageCircle, title: 'WhatsApp Applications', sub: 'Apply instantly' },
  { icon: Building2, title: 'Local Lydenburg Branches', sub: 'Close to you' },
]

export function TrustStrip({ className, overlay }: TrustStripProps) {
  return (
    <section
      className={`relative z-10 ${overlay ? 'mt-0 px-0 sm:px-0' : '-mt-6 px-4 sm:px-6 lg:px-8'} ${className ?? ''}`}
      aria-label="Trust signals"
    >
      <Reveal
        className={`mx-auto max-w-7xl rounded-3xl border border-border bg-card p-4 shadow-soft-lg sm:p-6 ${overlay ? 'bg-white/95 shadow-2xl' : ''}`}
      >
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="group flex items-center gap-3 rounded-2xl p-2 transition-colors hover:bg-secondary"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-foreground">
                  {item.title}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {item.sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
