"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

interface Props {
  title?: string
  subtitle?: string
  testimonials: Testimonial[]
}

export function AnimatedTestimonials({
  title = "What Our Community Says",
  subtitle = "Real feedback from people wearing CORE streetwear.",
  testimonials
}: Props) {

  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 6000)

    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="text-gray-500 mb-10">{subtitle}</p>

          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-10 bg-black"
                    : "w-2.5 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative min-h-[300px]">

          {testimonials.map((testimonial, index) => (

            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, x: 80 }}
              animate={{
                opacity: activeIndex === index ? 1 : 0,
                x: activeIndex === index ? 0 : 80,
                scale: activeIndex === index ? 1 : 0.95
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
              style={{ zIndex: activeIndex === index ? 10 : 0 }}
            >

              <div className="bg-white rounded-xl shadow-lg p-8 h-full flex flex-col">

                <div className="flex gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                    ))}
                </div>

                <div className="relative flex-1">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200 rotate-180" />
                  <p className="text-lg font-medium">
                    "{testimonial.content}"
                  </p>
                </div>

                <Separator className="my-6" />

                <div className="flex items-center gap-4">

                  <Avatar className="h-12 w-12 border">
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  )
}