import { Reveal } from "./ui/reveal"
import { stagger } from "@/lib/motion-tokens"

const cards = [
  {
    title: "Site vieillissant ou absent",
    text: "Pas de réservation en ligne, mauvais référencement : les clients cherchent ailleurs.",
  },
  {
    title: "Avis clients négligés",
    text: "Des avis sans réponse, une note qui stagne, une réputation qui s'effrite.",
  },
  {
    title: "Réseaux sociaux à l'abandon",
    text: "Pas le temps de publier régulièrement : la visibilité en pâtit.",
  },
]

export function Problem() {
  return (
    <section className="relative border-y border-line bg-surface-2/70 px-5 py-14 backdrop-blur-sm sm:px-8 sm:py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-4 max-w-[680px] text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.015em] text-foreground text-balance">
            Un restaurant plein en salle, une vitrine vide en ligne ?
          </h2>
        </Reveal>
        <Reveal delay={stagger}>
          <p className="mb-12 max-w-[600px] text-[17px] font-medium text-haze">
            C'est le quotidien de la plupart des restaurateurs : la cuisine tourne, mais la présence en ligne, elle, est laissée de côté — faute de temps.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * stagger * 2}>
              <div className="h-full border border-line bg-card p-8 transition-[transform,border-color] duration-[300ms] ease-signature hover:-translate-y-1.5 hover:border-line-strong">
                <div className="mb-5 h-2 w-10 bg-primary" />
                <h3 className="mb-2.5 text-lg font-bold text-foreground">{card.title}</h3>
                <p className="m-0 text-[15px] text-haze">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
