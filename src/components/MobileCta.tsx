import { motion } from "motion/react"
import { duration, ease } from "@/lib/motion-tokens"

export function MobileCta() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: duration.slow, delay: 1, ease: ease.signature }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-card p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.4)] md:hidden"
    >
      <a
        href="#contact"
        className="block border border-primary bg-primary py-3.5 text-center text-[15px] font-semibold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature active:scale-[0.99]"
      >
        Réserver un appel
      </a>
    </motion.div>
  )
}
