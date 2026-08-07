import { motion } from "motion/react"

export function MobileCta() {
  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.12)] md:hidden"
    >
      <a
        href="#contact"
        className="block rounded-full bg-accent py-3.5 text-center text-[15px] font-extrabold text-accent-foreground"
      >
        Réserver un appel
      </a>
    </motion.div>
  )
}
