import { Reveal } from "./ui/reveal"
import { stagger } from "@/lib/motion-tokens"

const steps = [
  { num: "01", title: "Échange", text: "30 minutes pour comprendre votre restaurant et vos besoins réels." },
  { num: "02", title: "Mise en place", text: "On configure tout : site, fiche Google, automatisations. Vous n'y touchez pas." },
  { num: "03", title: "Résultats", text: "Plus visible, plus d'avis, plus de réservations — sans y penser au quotidien." },
]

export function Steps() {
  return (
    <section id="comment" className="relative border-y border-line bg-surface-2/70 px-5 py-14 backdrop-blur-sm sm:px-8 sm:py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-14 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.015em] text-foreground">
            Comment ça marche
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal
              key={step.num}
              delay={i * stagger * 2}
              className="border-l border-line pl-6 transition-transform duration-[300ms] ease-signature hover:-translate-y-1.5"
            >
              <div className="mb-4 text-[52px] font-bold text-transparent [-webkit-text-stroke:2px_var(--ember)]">
                {step.num}
              </div>
              <h3 className="mb-2.5 text-[19px] font-bold text-foreground">{step.title}</h3>
              <p className="m-0 text-[15px] font-medium text-haze">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
