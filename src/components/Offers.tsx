import { Reveal } from "./ui/reveal"
import { stagger } from "@/lib/motion-tokens"

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
    <section id="offres" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-24 md:px-16">
        <div className="mb-14 max-w-[680px]">
          <h2 className="mb-4 text-[clamp(28px,4vw,44px)] font-bold tracking-[-0.015em] text-foreground">
            Trois piliers, un seul objectif
          </h2>
          <p className="m-0 text-[17px] font-medium text-haze">
            Plus de clients, moins d'efforts. Chaque forfait répond à un besoin précis — combinez-les selon votre situation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * stagger * 2}>
              <div
                className={`relative flex h-full flex-col border bg-card p-8 transition-[transform,border-color,box-shadow] duration-[300ms] ease-signature hover:-translate-y-2 ${
                  offer.featured
                    ? "border-primary hover:shadow-[0_0_32px_2px_var(--ember-dim)]"
                    : "border-line hover:border-line-strong"
                }`}
              >
                {offer.flag && (
                  <div className="absolute -top-3.5 left-7 bg-primary px-3.5 py-1.5 text-xs font-bold tracking-wide text-primary-foreground">
                    {offer.flag}
                  </div>
                )}
                <div className={`mb-2 font-mono text-xs uppercase tracking-[0.08em] text-haze ${offer.featured ? "mt-2.5" : ""}`}>
                  {offer.label}
                </div>
                <h3 className="mb-4 text-[23px] font-bold text-foreground">{offer.title}</h3>
                <div className="mb-5">
                  {offer.oldPrice && (
                    <span className="mr-2.5 text-[15px] text-haze line-through">{offer.oldPrice}</span>
                  )}
                  <span className="text-[32px] font-bold text-foreground">{offer.price}</span>
                  {offer.period && <span className="text-[15px] font-semibold text-haze">{offer.period}</span>}
                  {offer.sub && <div className="mt-1 text-[13px] font-semibold text-haze">{offer.sub}</div>}
                </div>
                <ul className="mb-7 flex flex-1 flex-col gap-3">
                  {offer.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-[15px] font-medium text-foreground/85">
                      <span className="font-bold text-primary">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={
                    offer.featured
                      ? "border border-primary bg-primary py-3.5 text-center text-[15px] font-semibold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature hover:scale-[1.02] hover:shadow-[0_0_24px_2px_var(--ember-dim)] active:scale-[0.99]"
                      : "border border-line-strong py-3.5 text-center text-[15px] font-semibold text-foreground transition-[transform,border-color] duration-[140ms] ease-signature hover:scale-[1.02] hover:border-primary active:scale-[0.99]"
                  }
                >
                  Réserver un appel
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
