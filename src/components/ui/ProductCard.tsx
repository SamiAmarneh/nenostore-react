
import { Link } from "react-router-dom";
import { ShoppingBag, Heart, Eye } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const finalPrice = product.sale
    ? product.price * (1 - (product.discount || 0) / 100)
    : product.price;

  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative pt-[100%]">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Badge overlays */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.new && (
            <span className="bg-neno-primary text-white text-xs px-2 py-1 rounded">New</span>
          )}
          {product.sale && (
            <span className="bg-neno-secondary text-white text-xs px-2 py-1 rounded">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Action buttons overlay */}
        <div 
          className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button 
            className="bg-white p-2 rounded-full hover:bg-neno-primary hover:text-white transition-colors"
            title="Quick view"
          >
            <Eye size={18} />
          </button>
          <button 
            className="bg-white p-2 rounded-full hover:bg-neno-primary hover:text-white transition-colors"
            title="Add to wishlist"
          >
            <Heart size={18} />
          </button>
          <button 
            className="bg-white p-2 rounded-full hover:bg-neno-primary hover:text-white transition-colors"
            title="Add to cart"
            onClick={() => addToCart(product)}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`} className="group">
          <h3 className="font-medium text-neno-dark group-hover:text-neno-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            {product.sale ? (
              <div className="flex items-center">
                <span className="text-neno-secondary font-semibold">${finalPrice.toFixed(2)}</span>
                <span className="ml-2 text-gray-400 text-sm line-through">${product.price.toFixed(2)}</span>
              </div>
            ) : (
              <span className="text-neno-dark font-semibold">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="flex items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}>
                  ★
                </span>
              ))}
            </div>
            <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
