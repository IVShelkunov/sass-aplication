import type { IProduct } from "../../lib/types/Product";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {
  const products: IProduct[] = [
    { id: 1, name: "Laptop", price: 800, sale: false },
    { id: 2, name: "Fridge", price: 1000, sale: false },
    { id: 3, name: "Smartphone", price: 700, sale: true },
    { id: 4, name: "Airpods", price: 200, sale: false },
  ];
  return (
    <div className="list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
