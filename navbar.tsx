"use client";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-xl font-semibold tracking-widest">
          CORE
        </h1>

        <div className="flex gap-8 text-gray-700 text-sm">
          <a className="hover:text-black cursor-pointer">Shop</a>
          <a className="hover:text-black cursor-pointer">Collections</a>
          <a className="hover:text-black cursor-pointer">About</a>
          <a className="hover:text-black cursor-pointer">Cart</a>
        </div>

      </div>

    </div>
  );
}