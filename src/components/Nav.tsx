import { RollingText } from "./ui/rolling-text"

const links = [
  { label: "Offres", href: "#offres" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "Confiance", href: "#confiance" },
]

export function Nav() {
  return (
    <header className="flex items-center justify-between border-b border-border px-5 py-5 sm:px-8 md:px-16">
      <div className="text-xl font-extrabold tracking-tight text-foreground sm:text-[22px]">
        Workflowly
      </div>
      <nav className="hidden gap-8 md:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="text-[15px] font-semibold text-foreground hover:text-accent"
          >
            <RollingText>{link.label}</RollingText>
          </a>
        ))}
      </nav>
      <a
        href="#contact"
        className="whitespace-nowrap rounded-full bg-navy px-6 py-3 text-sm font-bold text-white hover:bg-navy-hover"
      >
        Réserver un appel
      </a>
    </header>
  )
}
