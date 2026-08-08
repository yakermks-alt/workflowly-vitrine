import { Reveal } from "./ui/reveal"

export function Roi() {
  return (
    <section className="relative border-y border-line bg-surface-2/70 px-5 py-14 backdrop-blur-sm sm:px-8 sm:py-20 md:px-16">
      <Reveal className="mx-auto max-w-[1000px] text-center">
        <h2 className="mb-9 text-[clamp(26px,3.6vw,38px)] font-bold tracking-[-0.015em] text-foreground">
          Le calcul est simple
        </h2>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <div className="border border-line bg-card p-8">
            <div className="mb-2.5 font-mono text-xs uppercase tracking-[0.08em] text-haze">
              VOUS DÉPENSEZ
            </div>
            <div className="text-[34px] font-bold text-foreground">99€/mois</div>
          </div>
          <div className="rotate-90 text-3xl font-bold text-primary sm:rotate-0">→</div>
          <div className="border border-line bg-card p-8">
            <div className="mb-2.5 font-mono text-xs uppercase tracking-[0.08em] text-haze">
              IL SUFFIT DE
            </div>
            <div className="text-[34px] font-bold text-foreground">3 couverts en plus</div>
          </div>
        </div>
        <p className="mt-5 text-[13px] font-medium text-haze">
          Exemple illustratif basé sur un panier moyen de 35€ (Forfait Visibilité, prix de départ). Ne constitue pas une garantie de résultat.
        </p>
      </Reveal>
    </section>
  )
}
