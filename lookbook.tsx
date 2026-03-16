"use client";

import Image from "next/image";

export default function Lookbook() {
  return (
    <section className="py-32 px-6 bg-white">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-center">
          Lookbook
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Block 1 */}
          <div className="relative group overflow-hidden rounded-2xl">

            <Image
              src="/lookbook/lookbook1.jpg"
              alt="Shop Men's"
              width={900}
              height={1000}
              className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
              />

            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-semibold">
                Shop Men's
              </h3>
              <p className="text-lg mt-2">
                Explore →
              </p>
            </div>

          </div>

          {/* Block 2 */}
          <div className="relative group overflow-hidden rounded-2xl">

            <Image
              src="/lookbook/lookbook2.jpg"
              alt="Shop Women's"
              width={900}
              height={1000}
              className="w-full h-[650px] object-cover group-hover:scale-105 transition duration-700"
              />

            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-semibold">
                Shop Women's
              </h3>
              <p className="text-lg mt-2">
                Explore →
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}