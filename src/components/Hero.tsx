import { motion } from "motion/react"
import { Reveal } from "./ui/reveal"

export function Hero() {
  return (
    <section className="mx-auto max-w-[1360px] px-5 pt-10 sm:px-8 md:px-16 md:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-[1.15fr_1fr]">
        <div>
          <Reveal>
            <h1 className="text-[clamp(40px,6.2vw,76px)] font-extrabold uppercase leading-[1.02] tracking-tight text-foreground">
              Votre restaurant,<br />
              visible{" "}
              <span className="mx-1 inline-flex rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-md bg-foreground px-4 py-1 align-middle text-[0.5em] font-extrabold text-accent">
                &amp; automatisé
              </span>
              <br />
              sans effort.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="my-7 max-w-[480px] text-[clamp(16px,1.8vw,19px)] font-medium text-muted-foreground">
              Site web, avis Google, réseaux sociaux, rappels clients : nous mettons votre présence en ligne sur pilote automatique.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-block rounded-full bg-accent px-8 py-4 text-base font-extrabold text-accent-foreground transition-transform hover:scale-105"
              >
                Réserver un appel
              </a>
              <span className="text-sm font-semibold text-muted-foreground">
                Zone Annecy · Évian · Léman
              </span>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.15 },
            scale: { duration: 0.6, delay: 0.15 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative flex h-[340px] items-center justify-center"
        >
          <div className="flex h-[230px] w-[340px] flex-col overflow-hidden rounded-[10px] bg-[#35363a] shadow-[0_24px_80px_rgba(0,0,0,0.35),0_0_0_1px_rgba(0,0,0,0.1)]">
            <div className="flex h-[30px] items-center bg-[#202124] pr-2">
              <div className="flex gap-1.5 px-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
            </div>
            <div className="flex h-7 items-center bg-[#35363a] px-2">
              <div className="mx-1.5 flex h-5 flex-1 items-center rounded-full bg-[#282a2d] px-2.5 font-sans text-[10px] text-[#e8eaed]">
                lerestaurant.fr
              </div>
            </div>
            <div className="flex-1 bg-white p-4">
              <div className="mb-3.5 flex items-center justify-between">
                <div className="h-2 w-[60px] rounded bg-foreground" />
                <div className="rounded-full bg-accent px-2.5 py-1.5 text-[8px] font-extrabold text-white">
                  RÉSERVER
                </div>
              </div>
              <div className="mb-2 h-3.5 w-[60%] rounded bg-foreground" />
              <div className="mb-1 h-1.5 w-[80%] rounded bg-border" />
              <div className="mb-1 h-1.5 w-[70%] rounded bg-border" />
              <div className="mt-2.5 flex h-[78px] items-center justify-center rounded-xl bg-gradient-to-br from-[oklch(0.9_0.02_80)] to-[oklch(0.82_0.03_80)] text-center text-[11px] font-semibold text-muted-foreground">
                Photo plat
              </div>
            </div>
          </div>
          <Reveal delay={0.5} className="absolute -bottom-5 -right-2.5 w-[180px] rounded-2xl border border-border bg-white p-3.5 shadow-[0_16px_32px_-8px_rgba(0,0,0,0.2)] transition-transform hover:-translate-y-1 hover:scale-[1.03]">
            <div className="mb-1.5 text-[11px] font-extrabold text-foreground">★★★★★ Nouvel avis</div>
            <div className="mb-2 text-[10px] text-muted-foreground">« Service impeccable ! »</div>
            <div className="text-[9.5px] font-bold text-accent">Réponse envoyée auto ✓</div>
          </Reveal>
        </motion.div>
      </div>

      <div className="my-16 grid items-end gap-6 sm:grid-cols-3">
        <div className="rounded-[200px_200px_24px_24px] border border-foreground px-7 pb-6 pt-9 text-center">
          <div className="mb-2.5 text-[13px] font-bold text-muted-foreground">RÉPONSE MOYENNE</div>
          <div className="inline-block rounded-full bg-accent px-5 py-3.5 text-[26px] font-extrabold text-accent-foreground">24h</div>
        </div>
        <div>
          <div className="relative mb-4 h-[22px] w-[34px]">
            <span className="absolute left-0 top-0 h-[18px] w-[18px] rounded-full bg-foreground" />
            <span className="absolute left-4 top-0 h-[18px] w-[18px] rounded-full bg-foreground" />
          </div>
          <p className="m-0 text-base font-bold text-foreground">
            Un site, des avis gérés, des rappels automatiques — tout tourne pendant que vous cuisinez.
          </p>
        </div>
        <div className="flex justify-center">
          <a href="#contact" className="relative flex h-[132px] w-[132px] items-center justify-center">
            <svg viewBox="0 0 132 132" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]">
              <path id="circlePath" fill="none" d="M 66,66 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
              <text fontSize="10.5" fontWeight="800" letterSpacing="1.5" fill="var(--foreground)">
                <textPath href="#circlePath" startOffset="0%">
                  RÉSERVER UN APPEL • RÉSERVER UN APPEL •
                </textPath>
              </text>
            </svg>
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-accent text-[22px] font-extrabold text-accent-foreground">
              →
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
