import type { IProduct } from "../../lib/types/Product";

interface ProductCardProps {
  product: IProduct;
}
export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card">
      {product.sale && <div className="sale-label">SALE -40%</div>}
      <p className="name">{product.name}</p>
      <div className="image"></div>
      <p className="price">{product.price}$</p>
      <button>BUY</button>
    </div>
  );
};
