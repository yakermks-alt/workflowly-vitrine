import { Reveal } from "./ui/reveal"

const offers = [
  {
    featured: true,
    flag: "OFFRE DE LANCEMENT 2026",
    label: "SITE EXPRESS",
    title: "Votre vitrine premium, en ligne",
    oldPrice: "900–1500€",
    price: "300€",
    sub: "1er restaurant partenaire 2026 · paiement unique",
    items: [
      "Site bilingue FR/EN, design premium",
      "Réservation en ligne intégrée",
      "Optimisé SEO local (Annecy, Évian…)",
    ],
  },
  {
    label: "FORFAIT VISIBILITÉ",
    title: "Votre réputation, sous contrôle",
    price: "99–149€",
    period: "/mois",
    items: [
      "Fiche Google Business gérée",
      "Avis clients automatisés",
      "Mises à jour régulières",
    ],
  },
  {
    label: "AUTOMATISATIONS IA",
    title: "Votre temps, rendu à la salle",
    price: "300–800€",
    period: " setup + 49€/mois",
    items: [
      "Réponses automatiques aux avis",
      "Rappels de réservation automatiques",
      "Publication réseaux sociaux planifiée",
    ],
  },
]

export function Offers() {
  return (
    <section id="offres" className="mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-24 md:px-16">
      <div className="mb-14 max-w-[680px]">
        <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-extrabold tracking-tight text-foreground">
          Trois piliers, un seul objectif
        </h2>
        <p className="m-0 text-[17px] font-medium text-muted-foreground">
          Plus de clients, moins d'efforts. Chaque forfait répond à un besoin précis — combinez-les selon votre situation.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer, i) => (
          <Reveal key={offer.title} delay={i * 0.1}>
            <div
              className={`relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_-16px_rgba(0,0,0,0.2)] ${
                offer.featured ? "border-2 border-foreground" : "border-border"
              }`}
            >
              {offer.flag && (
                <div className="absolute -top-[15px] left-7 rounded-full bg-accent px-3.5 py-1.5 text-xs font-extrabold tracking-wide text-accent-foreground">
                  {offer.flag}
                </div>
              )}
              <div className={`mb-2 text-[13px] font-extrabold tracking-wide text-muted-foreground/80 ${offer.featured ? "mt-2.5" : ""}`}>
                {offer.label}
              </div>
              <h3 className="mb-4 text-[23px] font-extrabold text-foreground">{offer.title}</h3>
              <div className="mb-5">
                {offer.oldPrice && (
                  <span className="mr-2.5 text-[15px] text-muted-foreground line-through">{offer.oldPrice}</span>
                )}
                <span className="text-[32px] font-extrabold text-foreground">{offer.price}</span>
                {offer.period && <span className="text-[15px] font-semibold text-muted-foreground">{offer.period}</span>}
                {offer.sub && <div className="mt-1 text-[13px] font-semibold text-muted-foreground">{offer.sub}</div>}
              </div>
              <ul className="mb-7 flex flex-1 flex-col gap-3">
                {offer.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] font-medium text-foreground/85">
                    <span className="font-extrabold text-accent">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={
                  offer.featured
                    ? "rounded-full bg-foreground py-3.5 text-center text-[15px] font-extrabold text-white transition-transform hover:scale-[1.03] hover:bg-foreground/90"
                    : "rounded-full border-2 border-foreground py-3 text-center text-[15px] font-extrabold text-foreground transition-all hover:scale-[1.03] hover:bg-foreground hover:text-white"
                }
              >
                Réserver un appel
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
