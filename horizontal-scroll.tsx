"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HorizontalScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const products = [
    {
      name: "Baby Tee",
      price: "Rs 800",
      image: "/products/modelbabytee.jpg",
    },
    {
      name: "Bomber Jacket",
      price: "Rs 3500",
      image: "/products/modelbomberjacket.jpg",
    },
    {
      name: "Hoodie",
      price: "Rs 1600",
      image: "/products/modelhoodie1.jpg",
    },
    {
      name: "Oversized Tshirt",
      price: "Rs 950",
      image: "/products/modeltshirt1.jpg",
    },
    {
      name: "Creator tshirt",
      price: "Rs 1250",
      image: "/products/modeltshirt2.jpg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">

      {/* Section Header */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Recommended</h2>

        <div className="flex gap-3">
          <button
            onClick={scrollLeft}
            className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={scrollRight}
            className="w-10 h-10 border rounded-full flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      {/* Product Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="min-w-[280px] snap-start group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div className="overflow-hidden rounded-xl">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={500}
                className="object-cover w-full h-[400px] group-hover:scale-105 transition duration-500"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}