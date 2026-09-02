import type { IProduct } from "../../lib/types/Product";

interface ProductCardProps {
  product: IProduct;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card">
      <p className="name">{product.name}</p>
      <div className="image"></div>
      <p className="price">{product.price}$</p>
      <button>SALE</button>
    </div>
  );
};
