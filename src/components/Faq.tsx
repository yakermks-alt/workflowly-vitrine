import { useState } from "react"
import { Reveal } from "./ui/reveal"

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
        <h2 className="mb-10 text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-foreground">
          Questions fréquentes
        </h2>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="flex flex-col gap-px overflow-hidden rounded-[20px] border border-border bg-border">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="cursor-pointer bg-card px-6 py-6 sm:px-7"
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="m-0 text-[17px] font-bold text-foreground">{item.q}</h3>
                  <span
                    className={`flex-shrink-0 text-xl font-extrabold text-accent transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </div>
                {isOpen && (
                  <p className="mt-3.5 max-w-[600px] text-[15px] font-medium text-muted-foreground">{item.a}</p>
                )}
              </div>
            )
          })}
        </div>
      </Reveal>
    </section>
  )
}
