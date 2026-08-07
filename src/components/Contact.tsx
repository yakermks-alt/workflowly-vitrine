import { useState, type FormEvent } from "react"
import { Reveal } from "./ui/reveal"

const WEBHOOK_URL = "https://n8n.workflowly.fr/webhook/workflowly-contact"

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
    <section id="contact" className="bg-foreground px-5 py-16 sm:px-8 sm:py-24 md:px-16">
      <div className="mx-auto grid max-w-[1040px] gap-14 md:grid-cols-2">
        <Reveal>
          <h2 className="mb-4 text-[clamp(28px,4vw,42px)] font-extrabold tracking-tight text-white text-balance">
            Prêt à automatiser votre visibilité ?
          </h2>
          <p className="mb-7 text-base font-medium text-white/70">
            Laissez-nous vos coordonnées, on vous rappelle sous 24h pour un échange de 30 minutes, sans engagement.
          </p>
          <div className="flex flex-col gap-3 text-[15px] font-semibold text-white/75">
            <div>Zone Annecy · Évian · Léman</div>
            <div>contact@workflowly.fr</div>
            <div>
              <a href="tel:+33767171163" className="text-white/75 hover:text-accent">
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
              className="inline-block rounded-full border-2 border-white/30 px-6 py-3 text-sm font-bold text-white hover:border-accent hover:text-accent"
            >
              Ou réservez directement un créneau →
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center gap-3.5 rounded-3xl bg-white p-11 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-extrabold text-accent-foreground">
                ✓
              </div>
              <h3 className="m-0 text-xl font-extrabold text-foreground">Merci {name} !</h3>
              <p className="m-0 text-[15px] font-medium text-muted-foreground">
                Nous revenons vers vous sous 24h pour {restaurant}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl bg-white p-8">
              <div>
                <label htmlFor="f-name" className="mb-1.5 block text-[13px] font-bold text-muted-foreground">
                  Nom
                </label>
                <input
                  id="f-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-[15px] text-foreground"
                />
              </div>
              <div>
                <label htmlFor="f-restaurant" className="mb-1.5 block text-[13px] font-bold text-muted-foreground">
                  Restaurant
                </label>
                <input
                  id="f-restaurant"
                  name="restaurant"
                  type="text"
                  required
                  value={restaurant}
                  onChange={(e) => setRestaurant(e.target.value)}
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-[15px] text-foreground"
                />
              </div>
              <div>
                <label htmlFor="f-phone" className="mb-1.5 block text-[13px] font-bold text-muted-foreground">
                  Téléphone
                </label>
                <input
                  id="f-phone"
                  name="phone"
                  type="tel"
                  required
                  className="w-full rounded-xl border border-border bg-background px-3.5 py-3 text-[15px] text-foreground"
                />
              </div>
              <div>
                <label htmlFor="f-message" className="mb-1.5 block text-[13px] font-bold text-muted-foreground">
                  Message (optionnel)
                </label>
                <textarea
                  id="f-message"
                  name="message"
                  rows={3}
                  className="w-full resize-y rounded-xl border border-border bg-background px-3.5 py-3 text-[15px] text-foreground"
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-1.5 rounded-full bg-accent py-4 text-[15px] font-extrabold text-accent-foreground transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === "sending" ? "Envoi..." : "Réserver un appel"}
              </button>
              {status === "error" && (
                <p className="m-0 text-sm font-semibold text-red-600">
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
