"use client";

import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";

export default function HeroScroll() {
  return (
    <div className="flex flex-col overflow-hidden pt-[60px] pb-[100px] px-20">

      <ContainerScroll titleComponent={<></>}>

        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">

          <Image
            src="/products/hero-new.jpg"
            alt="CORE streetwear"
            width={1600}
            height={900}
            className="w-full h-full object-cover"
            draggable={false}
            priority
          />

          {/* cinematic gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

        </div>

      </ContainerScroll>

      {/* TEXT BELOW HERO */}
      <div className="text-center mt-10">

        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
          LUXURY STREETWEAR
        </h1>

        <p className="mt-5 text-lg text-gray-500">
          Built From The Essentials
        </p>

        <div className="flex gap-6 justify-center mt-10">

          <button className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition">
            Shop Collection
          </button>

          <button className="text-lg font-medium hover:underline">
            Lookbook
          </button>

        </div>

      </div>

    </div>
  );
}
