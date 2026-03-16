"use client";

export default function ProductGrid() {
  const products = [
  {
    name: "Minimal Hoodie",
    price: "Rs 1750",
    image1: "/products/hoodie1.jpg",
    image2: "/products/hoodie2.jpg",
    hover: true,
  },
  {
    name: "Tech Jacket",
    price: "Rs 2000",
    image1: "/products/tech1.jpg",
    image2: "/products/tech2.jpg",
    hover: true,
  },
  {
    name: "Core T-Shirt",
    price: "Rs 1250",
    image1: "/products/tshirt1.jpg",
    image2: "/products/tshirt2.jpg",
    hover: true,
  },
];

  return (
    <section className="max-w-7xl mx-auto px-8 py-32">
      <h2 className="text-4xl font-light mb-16">Featured Collection</h2>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map((product, index) => (
          <div key={index} className="group cursor-pointer">

            <div className="relative overflow-hidden rounded-xl">

              <img
                src={product.image1}
                className={`w-full h-[420px] object-cover transition duration-500 ${
                product.hover ? "group-hover:opacity-0" : ""
                }`}
                />

              {product.hover && (
                <img
                  src={product.image2}
                  className="absolute top-0 left-0 w-full h-[420px] object-cover opacity-0 transition duration-500 group-hover:opacity-100"
                  />
              )}

            </div>

            <h3 className="mt-4 text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">{product.price}</p>

          </div>
        ))}
      </div>
    </section>
  );
}
