"use client";

import Image from "next/image";

export default function Campaign() {
  return (
    <section className="w-full mt-32">

      <div className="relative w-full h-[85vh]">

        <Image
          src="/campaign/banner.png"
          alt="CORE Campaign"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">

          <p className="text-sm tracking-[0.3em] mb-4">
            NEW CAMPAIGN
          </p>

          <h2 className="text-6xl md:text-8xl font-bold mb-8">
            CORE SPRING DROP
          </h2>

          <button className="px-8 py-3 border border-white hover:bg-white hover:text-black transition">
            Discover the Drop →
          </button>

        </div>

      </div>

    </section>
  );
}