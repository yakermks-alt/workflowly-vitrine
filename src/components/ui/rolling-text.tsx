import { motion, type Transition } from "motion/react"

type RollingTextProps = {
  children: string
  className?: string
  duration?: number
  transition?: Transition
}

const frontVariants = {
  rest: { rotateX: 0 },
  hover: { rotateX: -90 },
}

const backVariants = {
  rest: { rotateX: 90 },
  hover: { rotateX: 0 },
}

export function RollingText({
  children,
  className,
  duration = 0.4,
  transition = { ease: "easeInOut" },
}: RollingTextProps) {
  const letters = children.split("")

  return (
    <motion.span
      initial="rest"
      whileHover="hover"
      className={className}
      style={{ display: "inline-block" }}
    >
      {letters.map((letter, i) => (
        <span
          aria-hidden="true"
          key={i}
          className="relative inline-block h-[1.1em] overflow-hidden align-bottom"
          style={{ perspective: 300 }}
        >
          <motion.span
            className="block [backface-visibility:hidden]"
            variants={frontVariants}
            transition={{ ...transition, delay: i * 0.025, duration }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
          <motion.span
            className="absolute left-0 top-0 block [backface-visibility:hidden]"
            variants={backVariants}
            transition={{ ...transition, delay: i * 0.025, duration }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
        </span>
      ))}
      <span className="sr-only">{children}</span>
    </motion.span>
  )
}
