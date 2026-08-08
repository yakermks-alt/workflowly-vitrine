// Motion tokens from MASTER.md, exposed for the `motion` library.
// Every animation in the app pulls timing/easing from here — no magic numbers.

export const ease = {
  signature: [0.16, 1, 0.3, 1] as const,
}

export const duration = {
  fast: 0.14,
  normal: 0.3,
  slow: 0.5,
}

export const stagger = 0.06

export const hoverScale = 1.02

export const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: duration.slow, ease: ease.signature },
}

export function revealWithDelay(index: number) {
  return {
    ...reveal,
    transition: { ...reveal.transition, delay: index * stagger },
  }
}
