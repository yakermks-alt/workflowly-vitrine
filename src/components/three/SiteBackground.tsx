import { lazy, Suspense, useEffect, useState } from "react"

const Scene = lazy(() =>
  import("./SiteBackgroundScene").then((mod) => ({ default: mod.SiteBackgroundScene }))
)

/**
 * Single, persistent 3D backdrop for the whole site — a distorted sphere
 * fixed behind every section, rather than a per-section effect. Sits at
 * z-0; page content is given z-10 in App.tsx so it always paints on top.
 */
export function SiteBackground() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Scene reducedMotion={reducedMotion} />
      </Suspense>
    </div>
  )
}
