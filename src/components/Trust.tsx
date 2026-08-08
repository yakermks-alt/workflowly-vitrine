import { Reveal } from "./ui/reveal"
import { stagger } from "@/lib/motion-tokens"

export function Trust() {
  return (
    <section id="confiance" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1300px] px-5 py-16 sm:px-8 sm:py-24 md:px-16">
        <div className="grid items-stretch gap-14 md:grid-cols-2">
          <Reveal>
            <h2 className="mb-5 text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.015em] text-foreground text-balance">
              Pourquoi une agence spécialisée restaurants ?
            </h2>
            <p className="mb-7 text-base font-medium text-haze text-balance">
              Workflowly démarre en 2026 avec une poignée de restaurants pilotes dans la zone Annecy · Évian · Léman — et c'est un atout : disponibilité, attention et réactivité maximales, sans la lenteur d'une grande agence généraliste.
            </p>
            <div className="flex flex-col gap-5">
              <div className="border-t border-line pt-4">
                <p className="m-0 text-[15px] font-medium text-foreground/85">
                  <strong className="text-foreground">100% dédié à la restauration</strong> — pas un généraliste qui découvre votre métier.
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-line pt-4">
                <div className="flex h-[88px] w-[88px] flex-shrink-0 items-center justify-center border border-line-strong bg-gradient-to-br from-dusk/50 to-ember/20 text-center text-[11px] font-semibold text-haze transition-transform duration-[300ms] ease-signature hover:-rotate-3 hover:scale-105">
                  Photo
                </div>
                <p className="m-0 text-[15px] font-medium text-foreground/85">
                  <strong className="text-foreground">Un interlocuteur direct</strong>, sans intermédiaire ni ticket support impersonnel.
                </p>
              </div>
              <div className="border-t border-line pt-4">
                <p className="m-0 text-[15px] font-medium text-foreground/85">
                  <strong className="text-foreground">Présence locale</strong> — on connaît vos clients, votre saisonnalité, votre bassin.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={stagger} className="flex flex-col gap-5">
            <div className="flex min-h-[180px] flex-1 items-center justify-center border border-line-strong bg-gradient-to-br from-dusk/50 to-ember/20 text-center text-xs font-semibold text-haze transition-transform duration-[300ms] ease-signature hover:scale-[1.02]">
              Photo équipe Workflowly
            </div>
            <div className="flex flex-col gap-7 border border-line bg-card p-9">
              {[
                { num: "100%", accent: false, label: "dédié aux restaurateurs, dès le premier client" },
                { num: "24h", accent: false, label: "délai de réponse moyen à votre demande" },
                { num: "3", accent: true, label: "restaurants pilotes accompagnés en 2026, zone Annecy · Évian · Léman" },
              ].map((stat, i, arr) => (
                <div
                  key={stat.label}
                  className={`flex items-baseline justify-between ${i < arr.length - 1 ? "border-b border-line pb-5" : ""}`}
                >
                  <div className={`text-4xl font-bold ${stat.accent ? "text-primary" : "text-foreground"}`}>{stat.num}</div>
                  <div className="max-w-[160px] text-right text-[13px] font-semibold text-haze">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
