import { useParams } from "react-router-dom";
import { products } from "../data/products";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="mt-20 p-6">Product not found</div>;
  }

  return (
    <div className="p-6 mt-20">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.images} className="w-64 mt-4" />
      <p className="mt-4">₹{product.price}</p>
      <p className="mt-2">{product.description}</p>
    </div>
  );
}