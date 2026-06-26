import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  const wordmark = variant === 'light' ? 'text-white' : 'text-foreground'
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
          BLUE<span className="text-primary">SKY</span>
        </span>
        <span
          className={cn(
            'text-[9px] font-semibold uppercase tracking-[0.18em]',
            sub,
          )}
        >
          Financial Services
        </span>
      </span>
    </div>
  )
}
