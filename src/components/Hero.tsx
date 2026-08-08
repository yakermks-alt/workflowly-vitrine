import { motion } from "motion/react"
import { Reveal } from "./ui/reveal"
import { duration, ease, stagger } from "@/lib/motion-tokens"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-[1360px] px-5 pt-16 sm:px-8 md:px-16 md:pt-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr]">
          <div>
            <Reveal>
              <span className="mb-5 inline-flex items-center gap-2 border border-line-strong bg-card/60 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-haze">
                <span className="h-1.5 w-1.5 bg-primary" />
                Pilote automatique
              </span>
              <h1 className="text-[clamp(40px,6.2vw,76px)] font-bold leading-[1.02] tracking-[-0.02em] text-foreground text-balance">
                Votre restaurant,
                <br />
                visible{" "}
                <span className="mx-1 inline-flex bg-primary px-4 py-1 align-middle text-[0.5em] font-bold text-primary-foreground">
                  &amp; automatisé
                </span>
                <br />
                sans effort.
              </h1>
            </Reveal>
            <Reveal delay={stagger}>
              <p className="my-7 max-w-[480px] text-[clamp(16px,1.8vw,19px)] font-medium text-haze">
                Site web, avis Google, réseaux sociaux, rappels clients : nous mettons votre présence en ligne sur pilote automatique.
              </p>
            </Reveal>
            <Reveal delay={stagger * 2}>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-block border border-primary bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature hover:scale-[1.02] hover:shadow-[0_0_28px_2px_var(--ember-dim)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:scale-[0.99]"
                >
                  Réserver un appel
                </a>
                <span className="font-mono text-xs uppercase tracking-[0.08em] text-haze">
                  Zone Annecy · Évian · Léman
                </span>
              </div>
            </Reveal>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: duration.slow, delay: stagger * 2, ease: ease.signature },
              scale: { duration: duration.slow, delay: stagger * 2, ease: ease.signature },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            className="relative flex h-[340px] items-center justify-center"
          >
            <div className="flex h-[230px] w-[340px] flex-col overflow-hidden border border-line-strong bg-surface-2 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">
              <div className="flex h-[30px] items-center bg-card px-2">
                <div className="flex gap-1.5 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>
              </div>
              <div className="flex h-7 items-center bg-surface-2 px-2">
                <div className="mx-1.5 flex h-5 flex-1 items-center border border-line bg-card px-2.5 font-mono text-[10px] text-haze">
                  lerestaurant.fr
                </div>
              </div>
              <div className="flex-1 bg-card p-4">
                <div className="mb-3.5 flex items-center justify-between">
                  <div className="h-2 w-[60px] bg-line-strong" />
                  <div className="bg-primary px-2.5 py-1.5 text-[8px] font-bold text-primary-foreground">
                    RÉSERVER
                  </div>
                </div>
                <div className="mb-2 h-3.5 w-[60%] bg-line-strong" />
                <div className="mb-1 h-1.5 w-[80%] bg-line" />
                <div className="mb-1 h-1.5 w-[70%] bg-line" />
                <div className="mt-2.5 flex h-[78px] items-center justify-center border border-line bg-gradient-to-br from-dusk/40 to-ember/20 text-center text-[11px] font-medium text-haze">
                  Photo plat
                </div>
              </div>
            </div>
            <Reveal
              delay={stagger * 6}
              className="absolute -bottom-5 -right-2.5 w-[180px] border border-line-strong bg-card p-3.5 shadow-[0_16px_40px_rgba(0,0,0,0.5)] transition-transform duration-[300ms] ease-signature hover:-translate-y-1"
            >
              <div className="mb-1.5 text-[11px] font-bold text-foreground">★★★★★ Nouvel avis</div>
              <div className="mb-2 text-[10px] text-haze">« Service impeccable ! »</div>
              <div className="text-[9.5px] font-bold text-primary">Réponse envoyée auto ✓</div>
            </Reveal>
          </motion.div>
        </div>

        <div className="my-16 grid items-end gap-6 border-t border-line pt-10 sm:grid-cols-3">
          <div className="border border-line bg-card px-6 py-6 text-center">
            <div className="mb-2.5 font-mono text-xs uppercase tracking-[0.08em] text-haze">RÉPONSE MOYENNE</div>
            <div className="inline-block bg-primary px-5 py-3 text-2xl font-bold text-primary-foreground">24h</div>
          </div>
          <div>
            <div className="mb-3 font-mono text-xs uppercase tracking-[0.08em] text-primary">Zéro tâche manuelle</div>
            <p className="m-0 text-base font-semibold text-foreground">
              Un site, des avis gérés, des rappels automatiques — tout tourne pendant que vous cuisinez.
            </p>
          </div>
          <div className="flex justify-center">
            <a href="#contact" className="group relative flex h-[132px] w-[132px] items-center justify-center">
              <svg viewBox="0 0 132 132" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]">
                <path id="circlePath" fill="none" d="M 66,66 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                <text fontSize="10.5" fontWeight="700" letterSpacing="1.5" fill="var(--haze)">
                  <textPath href="#circlePath" startOffset="0%">
                    RÉSERVER UN APPEL • RÉSERVER UN APPEL •
                  </textPath>
                </text>
              </svg>
              <div className="flex h-[60px] w-[60px] items-center justify-center bg-primary text-xl font-bold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature group-hover:scale-[1.05] group-hover:shadow-[0_0_28px_2px_var(--ember-dim)]">
                →
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
