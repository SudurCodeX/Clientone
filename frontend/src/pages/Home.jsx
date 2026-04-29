import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] text-gray-900">

      {/* 🔥 HERO */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight">
            Elevate Your Style
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Minimal design. Maximum impact. Built for modern living.
          </p>

          <Link
            to="/products"
            className="inline-block mt-8 px-8 py-3 rounded-full 
            bg-white text-black font-medium 
            hover:scale-105 transition shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🔥 CATEGORY STRIP */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {[
            { name: "Men", link: "/products?category=Men", img: "https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=800" },
            { name: "Women", link: "/products?category=Women", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800" },
            { name: "Kids", link: "/products?category=Kids", img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800" },
          ].map((cat) => (
            <Link key={cat.name} to={cat.link} className="group relative h-[420px] rounded-2xl overflow-hidden">
              <img src={cat.img} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <h3 className="text-white text-2xl font-semibold">{cat.name}</h3>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* 🔥 FEATURED PRODUCTS */}
      <section className="py-24 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-semibold">Featured</h2>
            <Link to="/products" className="text-sm text-gray-500 hover:text-black">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((p) => (
              <div key={p.id} className="hover:-translate-y-2 hover:shadow-lg rounded-xl transition">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 SPLIT PROMO (BIG BRAND STYLE) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-4xl font-semibold leading-tight">
              Designed for Everyday Confidence
            </h2>

            <p className="mt-5 text-gray-600 text-lg">
              Discover refined essentials built with precision and timeless aesthetics.
            </p>

            <Link
              to="/products"
              className="inline-block mt-6 px-6 py-3 rounded-full 
              bg-black text-white hover:bg-gray-800 transition"
            >
              Explore Collection
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800"
            className="rounded-2xl shadow-lg"
          />

        </div>
      </section>

      {/* 🔥 FULL WIDTH BANNER */}
      <section className="relative h-[400px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1600"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative text-center text-white">
          <h2 className="text-4xl font-semibold">
            New Season Arrivals
          </h2>
          <Link
            to="/products"
            className="inline-block mt-6 px-6 py-3 bg-white text-black rounded-full"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* 🔥 NEW ARRIVALS GRID */}
      <section className="py-24 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-semibold mb-12">
            New Arrivals
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.map((p) => (
              <div key={p.id} className="hover:-translate-y-2 hover:shadow-lg rounded-xl transition">
                <ProductCard product={p} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 🔥 NEWSLETTER */}
      <section className="bg-black text-white py-28 text-center">
        <h2 className="text-3xl font-semibold">
          Join Nexaloom Club
        </h2>

        <p className="text-gray-400 mt-3">
          Early access. Exclusive drops. Premium experience.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 rounded-full text-black w-full"
          />
          <button className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </section>

    </div>
  );
}