"use client"

import { AnimatedTestimonials } from "../components/ui/animated-testimonials"

export default function TestimonialsSection() {
  return (
    <AnimatedTestimonials
      testimonials={[
        {
          id: 1,
          name: "Ryan Carter",
          role: "Streetwear Enthusiast",
          company: "New York",
          content:
            "CORE pieces instantly became staples in my wardrobe. The quality and fit are insane.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        },
        {
          id: 2,
          name: "Sophia Martinez",
          role: "Fashion Creator",
          company: "Los Angeles",
          content:
            "Minimal design and premium materials. CORE captures modern streetwear perfectly.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        },
        {
          id: 3,
          name: "Daniel Kim",
          role: "Designer",
          company: "Seoul",
          content:
            "The silhouettes are clean and timeless. CORE feels like luxury streetwear.",
          rating: 5,
          avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        },
      ]}
    />
  )
}
