import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Reveal } from "./ui/reveal"
import { duration, ease, stagger } from "@/lib/motion-tokens"

const faqs = [
  {
    q: "Combien de temps pour être en ligne ?",
    a: "Comptez 1 à 2 semaines pour le Site Express, et quelques jours pour activer le Forfait Visibilité ou les automatisations.",
  },
  {
    q: "Dois-je m'occuper de quelque chose techniquement ?",
    a: "Non. On configure tout de A à Z : hébergement, fiche Google, automatisations. Vous validez, on s'occupe du reste.",
  },
  {
    q: "Puis-je résilier le forfait mensuel à tout moment ?",
    a: "Oui, sans engagement de durée ni frais cachés. Vous restez tant que ça vous apporte des résultats.",
  },
  {
    q: "Et si je ne suis pas dans la zone Annecy · Évian · Léman ?",
    a: "Écrivez-nous quand même : nous étudions les demandes hors zone au cas par cas selon nos disponibilités.",
  },
]

export function Faq() {
  const [open, setOpen] = useState(0)

  return (
    <section className="mx-auto max-w-[900px] px-5 py-16 sm:px-8 sm:py-24 md:px-16">
      <Reveal>
        <h2 className="mb-10 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.015em] text-foreground">
          Questions fréquentes
        </h2>
      </Reveal>
      <Reveal delay={stagger}>
        <div className="flex flex-col gap-px overflow-hidden border border-line bg-line">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                role="button"
                tabIndex={0}
                aria-expanded={isOpen}
                className="cursor-pointer bg-card px-6 py-6 outline-none transition-colors duration-[140ms] ease-signature focus-visible:bg-surface-2 sm:px-7"
                onClick={() => setOpen(isOpen ? -1 : i)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setOpen(isOpen ? -1 : i)
                  }
                }}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="m-0 text-[17px] font-bold text-foreground">{item.q}</h3>
                  <span
                    className={`flex-shrink-0 text-xl font-bold text-primary transition-transform duration-[140ms] ease-signature ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 14 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: duration.normal, ease: ease.signature }}
                      className="max-w-[600px] overflow-hidden text-[15px] font-medium text-haze"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
