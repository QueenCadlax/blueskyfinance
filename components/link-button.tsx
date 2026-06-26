import type { ComponentProps } from 'react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import type { VariantProps } from 'class-variance-authority'

type LinkButtonProps = ComponentProps<'a'> &
  VariantProps<typeof buttonVariants> & { external?: boolean }

/** An anchor styled as a button, for the base-ui Button which has no `asChild`. */
export function LinkButton({
  className,
  variant,
  size,
  external,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(buttonVariants({ variant, size }), className)}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
      {...props}
    />
  )
}
