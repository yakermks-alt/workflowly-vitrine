import { motion } from "motion/react"
import type { ReactNode } from "react"
import { duration, ease } from "@/lib/motion-tokens"

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: duration.slow, ease: ease.signature, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
