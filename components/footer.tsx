"use client"

import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-32">

      <div className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

        {/* EXPERIENCE */}
        <div>
          <h3 className="text-lg font-semibold mb-6">CORE EXPERIENCE</h3>

          <Image
            src="/lookbook/lookbook1.jpg"
            alt="CORE Experience"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover"
          />

          <p className="text-gray-500 text-sm leading-relaxed">
            Join the CORE community to receive exclusive benefits such as
            early access to drops, invitations to private releases and
            limited edition products.
          </p>
        </div>


        {/* WE CARE */}
        <div>
          <h3 className="text-lg font-semibold mb-6">WE CARE</h3>

          <Image
            src="/lookbook/lookbook2.jpg"
            alt="Sustainability"
            width={300}
            height={200}
            className="rounded-lg mb-4 object-cover"
          />

          <p className="text-gray-500 text-sm leading-relaxed">
            At CORE we focus on timeless silhouettes, responsible sourcing
            and thoughtful design to ensure our pieces remain relevant for
            years.
          </p>
        </div>


        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold mb-6">CONTACT</h3>

          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-black cursor-pointer">Chat with us</li>
            <li className="hover:text-black cursor-pointer">WhatsApp</li>
            <li className="hover:text-black cursor-pointer">FAQ & Contact</li>
            <li className="hover:text-black cursor-pointer">Store Locator</li>
          </ul>
        </div>


        {/* SERVICES */}
        <div>
          <h3 className="text-lg font-semibold mb-6">SERVICES</h3>

          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-black cursor-pointer">Shipping</li>
            <li className="hover:text-black cursor-pointer">Returns</li>
            <li className="hover:text-black cursor-pointer">Returns Portal</li>
            <li className="hover:text-black cursor-pointer">Promotions</li>
          </ul>
        </div>


        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-6">OUR COMPANY</h3>

          <ul className="space-y-3 text-gray-500">
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">Investor Relations</li>
            <li className="hover:text-black cursor-pointer">Sustainability</li>
            <li className="hover:text-black cursor-pointer">Press</li>
          </ul>
        </div>

      </div>


      {/* Bottom bar */}

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CORE. All rights reserved.
      </div>

    </footer>
  )
}
