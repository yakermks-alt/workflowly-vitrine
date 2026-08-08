import { RollingText } from "./ui/rolling-text"

const links = [
  { label: "Offres", href: "#offres" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "Confiance", href: "#confiance" },
]

export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/85 px-5 py-5 backdrop-blur-md sm:px-8 md:px-16">
      <div className="flex items-center gap-2 text-lg font-bold tracking-tight text-foreground sm:text-xl">
        <span className="h-2 w-2 shrink-0 bg-primary shadow-[0_0_10px_2px_var(--ember-dim)]" />
        Workflowly
      </div>
      <nav className="hidden gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-muted-foreground transition-colors duration-[140ms] ease-signature hover:text-foreground"
          >
            <RollingText>{link.label}</RollingText>
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="whitespace-nowrap rounded-md border border-primary bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-[transform,box-shadow] duration-[140ms] ease-signature hover:scale-[1.02] hover:shadow-[0_0_20px_2px_var(--ember-dim)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:scale-[0.99]"
      >
        Réserver un appel
      </a>
    </header>
  )
}
