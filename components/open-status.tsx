'use client'

import { isOpenNow } from '@/lib/site'

export function OpenStatus() {
  const open = isOpenNow()
  return (
    <span
      aria-live="polite"
      className={
        `inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-xs font-semibold ` +
        (open
          ? 'bg-green-50 text-green-700 ring-1 ring-green-100'
          : 'bg-red-50 text-red-700 ring-1 ring-red-100')
      }
    >
      {open ? 'Open now' : 'Closed now'}
    </span>
  )
}
