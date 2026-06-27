import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  const wordmark = variant === 'light' ? 'text-white' : 'text-primary'
  const sub = variant === 'light' ? 'text-white/70' : 'text-primary'

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-background">
        <Image
          src="/Logo.png"
          alt="BlueSky Financial Services logo"
          width={36}
          height={36}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-lg font-extrabold tracking-tight',
            wordmark,
          )}
        >
          BLUESKY
        </span>
        <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-accent-orange">
          Financial Services
        </span>
      </span>
    </div>
  )
}
