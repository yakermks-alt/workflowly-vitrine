import { useState, type FormEvent } from "react"
import { Reveal } from "./ui/reveal"
import { stagger } from "@/lib/motion-tokens"

const WEBHOOK_URL = "https://n8n.workflowly.fr/webhook/workflowly-contact"

const inputClass =
  "w-full border border-line-strong bg-surface-2 px-3.5 py-3 text-[15px] text-foreground outline-none transition-colors duration-[140ms] ease-signature placeholder:text-haze focus-visible:border-primary"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [name, setName] = useState("")
  const [restaurant, setRestaurant] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="relative border-t border-line bg-surface-2/70 px-5 py-16 backdrop-blur-sm sm:px-8 sm:py-24 md:px-16">
      <div className="mx-auto grid max-w-[1040px] gap-14 md:grid-cols-2">
        <Reveal>
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-bold tracking-[-0.015em] text-foreground text-balance">
            Prêt à automatiser votre visibilité ?
          </h2>
          <p className="mb-7 text-base font-medium text-haze">
            Laissez-nous vos coordonnées, on vous rappelle sous 24h pour un échange de 30 minutes, sans engagement.
          </p>
          <div className="flex flex-col gap-3 text-[15px] font-semibold text-foreground/80">
            <div>Zone Annecy · Évian · Léman</div>
            <div>contact@workflowly.fr</div>
            <div>
              <a href="tel:+33767171163" className="transition-colors duration-[140ms] ease-signature hover:text-primary">
                +33 7 67 17 11 63
              </a>
            </div>
          </div>

          {/* Widget Cal.com : remplacer CAL_LINK une fois le compte créé (cal.com/ton-username/appel-30min) */}
          <div className="mt-8">
            <a
              href="https://cal.com/CAL_LINK"
              target="_blank"
              rel="noreferrer"
              className="inline-block border border-line-strong px-6 py-3 text-sm font-semibold text-foreground transition-colors duration-[140ms] ease-signature hover:border-primary hover:text-primary"
            >
              Ou réservez directement un créneau →
            </a>
          </div>
        </Reveal>

        <Reveal delay={stagger}>
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-3.5 border border-line bg-card p-11 text-center">
              <div className="flex h-12 w-12 items-center justify-center bg-primary text-xl font-bold text-primary-foreground">
                ✓
              </div>
              <h3 className="m-0 text-xl font-bold text-foreground">Merci {name} !</h3>
              <p className="m-0 text-[15px] font-medium text-haze">
                Nous revenons vers vous sous 24h pour {restaurant}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 border border-line bg-card p-8">
              <div>
                <label htmlFor="f-name" className="mb-1.5 block text-[13px] font-bold text-haze">
                  Nom
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="f-restaurant" className="mb-1.5 block text-[13px] font-bold text-haze">
                  Restaurant
                </label>
                <input
                  id="f-restaurant"
                  name="restaurant"
                  type="text"
                  required
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="f-phone" className="mb-1.5 block text-[13px] font-bold text-haze">
                  Téléphone
                </label>
                <input id="f-phone" name="phone" type="tel" required className={inputClass} />
              </div>
              <div>
                <label htmlFor="f-message" className="mb-1.5 block text-[13px] font-bold text-haze">
                  Message (optionnel)
                </label>
                <textarea id="f-message" name="message" rows={3} className={`${inputClass} resize-y`} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1.5 border border-primary bg-primary py-4 text-[15px] font-semibold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature hover:scale-[1.02] hover:shadow-[0_0_24px_2px_var(--ember-dim)] disabled:pointer-events-none disabled:opacity-50"
              >
                {status === "sending" ? "Envoi..." : "Réserver un appel"}
              </button>
              {status === "error" && (
                <p className="m-0 text-sm font-semibold text-destructive">
                  Une erreur est survenue, réessayez ou appelez-nous directement.
                </p>
              )}
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
