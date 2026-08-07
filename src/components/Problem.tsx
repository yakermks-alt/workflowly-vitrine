import { Reveal } from "./ui/reveal"

const cards = [
  {
    shape: "rounded-[12px_12px_12px_4px]",
    title: "Site vieillissant ou absent",
    text: "Pas de réservation en ligne, mauvais référencement : les clients cherchent ailleurs.",
  },
  {
    shape: "rounded-full",
    title: "Avis clients négligés",
    text: "Des avis sans réponse, une note qui stagne, une réputation qui s'effrite.",
  },
  {
    shape: "rounded-[4px_12px_12px_12px]",
    title: "Réseaux sociaux à l'abandon",
    text: "Pas le temps de publier régulièrement : la visibilité en pâtit.",
  },
]

export function Problem() {
  return (
    <section className="bg-foreground px-5 py-14 sm:px-8 sm:py-20 md:px-16">
      <div className="mx-auto max-w-[1200px]">
        <Reveal>
          <h2 className="mb-4 max-w-[680px] text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight text-white text-balance">
            Un restaurant plein en salle, une vitrine vide en ligne ?
          </h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mb-12 max-w-[600px] text-[17px] font-medium text-white/70">
            C'est le quotidien de la plupart des restaurateurs : la cuisine tourne, mais la présence en ligne, elle, est laissée de côté — faute de temps.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 0.1}>
              <div className="h-full rounded-[20px] bg-white/[0.06] p-8 transition-all hover:-translate-y-1.5 hover:bg-white/[0.1]">
                <div className={`mb-5 h-10 w-10 bg-accent ${card.shape}`} />
                <h3 className="mb-2.5 text-lg font-bold text-white">{card.title}</h3>
                <p className="m-0 text-[15px] text-white/65">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
