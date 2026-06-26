'use client'

import React, { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type MotionDivProps = PropsWithChildren<{
  className?: string
  style?: React.CSSProperties
  delay?: number
  x?: number
  y?: number
  duration?: number
  hover?: boolean
}>

export function MotionDiv({
  children,
  className,
  delay = 0,
  x = 0,
  y = 12,
  duration = 0.55,
  hover = false,
  ...rest
}: MotionDivProps) {
  const shouldReduce = useReducedMotion()

  const initial = shouldReduce ? undefined : { opacity: 0, y, x }
  const animate = shouldReduce ? { opacity: 1, y: 0, x: 0 } : { opacity: 1, y: 0, x: 0 }
  const transition = shouldReduce
    ? { duration: 0 }
    : { duration, ease: [0.22, 1, 0.36, 1], delay }
  const whileHover = hover && !shouldReduce ? { y: -2, scale: 1.01 } : undefined

  return (
    <motion.div
      initial={initial}
      animate={animate}
      transition={transition as any}
      whileHover={whileHover}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
