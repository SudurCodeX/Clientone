import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="border rounded-xl p-4 hover:shadow-lg transition relative">
        
        {/* TAG BADGE */}
        {product.tag && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
            {product.tag}
          </span>
        )}

        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-60 object-cover rounded-lg"
        />

        <h2 className="mt-3 font-semibold">{product.name}</h2>
        <p className="text-gray-500">₹{product.price}</p>
      </div>
    </Link>
  );
}