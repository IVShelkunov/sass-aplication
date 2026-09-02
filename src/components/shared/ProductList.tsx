import type { IProduct } from "../../lib/types/Product";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products: IProduct[] = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Fridge", price: 1000 },
    { id: 3, name: "Smartphone", price: 700 },
    { id: 4, name: "Airpods", price: 200 },
  ];
  return (
    <div className="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
