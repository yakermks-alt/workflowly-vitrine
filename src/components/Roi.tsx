import { Reveal } from "./ui/reveal"

export function Roi() {
  return (
    <section className="bg-secondary px-5 py-14 sm:px-8 sm:py-20 md:px-16">
      <Reveal className="mx-auto max-w-[1000px] text-center">
        <h2 className="mb-9 text-[clamp(26px,3.6vw,38px)] font-extrabold tracking-tight text-foreground">
          Le calcul est simple
        </h2>
        <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-2.5 text-[13px] font-extrabold tracking-wide text-muted-foreground/80">
              VOUS DÉPENSEZ
            </div>
            <div className="text-[34px] font-extrabold text-foreground">99€/mois</div>
          </div>
          <div className="text-3xl font-extrabold text-accent sm:rotate-0 rotate-90">→</div>
          <div className="rounded-3xl border border-border bg-card p-8">
            <div className="mb-2.5 text-[13px] font-extrabold tracking-wide text-muted-foreground/80">
              IL SUFFIT DE
            </div>
            <div className="text-[34px] font-extrabold text-foreground">3 couverts en plus</div>
          </div>
        </div>
        <p className="mt-5 text-[13px] font-medium text-muted-foreground">
          Exemple illustratif basé sur un panier moyen de 35€ (Forfait Visibilité, prix de départ). Ne constitue pas une garantie de résultat.
        </p>
      </Reveal>
    </section>
  )
}
