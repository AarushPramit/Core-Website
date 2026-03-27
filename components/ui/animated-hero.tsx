"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AnimatedHero() {
  const [index, setIndex] = useState(0)

  const words = useMemo(
    () => ["Precision", "Essentials", "Luxury", "Minimalism"],
    []
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <section className="w-full py-32 text-center">

      <h2 className="text-5xl md:text-7xl font-bold mb-6">
        Built for
      </h2>

      <div className="relative h-[80px] flex justify-center items-center overflow-hidden">

        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
            className="absolute text-5xl md:text-7xl font-semibold"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>

      </div>

      <p className="mt-8 max-w-xl mx-auto text-gray-500 text-lg">
        CORE focuses on timeless silhouettes, premium materials and understated luxury.
      </p>

    </section>
  )
}
