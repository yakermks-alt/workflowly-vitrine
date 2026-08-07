export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-9 sm:px-8 md:px-16">
      <div className="mx-auto flex max-w-[1300px] flex-wrap items-center justify-between gap-5">
        <div>
          <div className="mb-1 text-lg font-extrabold text-foreground">Workflowly</div>
          <div className="text-[13px] font-medium text-muted-foreground">
            contact@workflowly.fr ·{" "}
            <a href="tel:+33767171163" className="hover:text-foreground">
              +33 7 67 17 11 63
            </a>
          </div>
        </div>
        <div className="flex gap-5 text-[13px] font-semibold">
          <a href="#" className="text-foreground/80 hover:text-foreground">Instagram</a>
          <a href="#" className="text-foreground/80 hover:text-foreground">LinkedIn</a>
        </div>
        <div className="text-xs font-medium text-muted-foreground/80">
          © 2026 Workflowly. Mentions légales : SIRET à compléter.
        </div>
      </div>
    </footer>
  )
}
