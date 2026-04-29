import { useLocation } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  // Filter products
  const filteredProducts = category
    ? products.filter(
        (p) =>
          p.category &&
          p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <div className="mt-20">

      {/* 🔥 CATEGORY HERO */}
      {category && (
        <section
          className="h-[60vh] bg-cover bg-center flex items-center justify-center text-white relative"
          style={{
            backgroundImage:
              category === "Men"
                ? "url('https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1600')"
                : category === "Women"
                ? "url('https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1600')"
                : "url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1600')",
          }}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

          {/* Content */}
          <div className="relative text-center px-6 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              {category} Collection
            </h1>

            <p className="mt-4 text-gray-200 text-lg">
              {category === "Men" &&
                "Refined essentials for the modern man. Minimal, versatile styles designed for everyday confidence."}

              {category === "Women" &&
                "Elegant, bold, and timeless. Fashion that blends comfort with sophistication."}

              {category === "Kids" &&
                "Playful, colorful, and comfy outfits made for fun and everyday adventures."}
            </p>

            <button className="mt-6 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition duration-300">
              Explore {category}
            </button>
          </div>
        </section>
      )}

      {/* 🛍 PRODUCTS */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6">
          {category ? `${category} Products` : "All Products"}
        </h2>

        {filteredProducts.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {filteredProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}