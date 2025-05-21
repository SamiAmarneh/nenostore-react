
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Star, Truck, Shield, RotateCcw, ShoppingBag, Heart, Share2 } from "lucide-react";
import { getProductById, getProductsByCategory } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { toast } from "@/components/ui/use-toast";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const product = getProductById(id || "");
  
  if (!product) {
    return (
      <div className="container-custom py-16 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8">The product you are looking for doesn't exist or has been removed.</p>
        <Link to="/shop">
          <button className="btn-primary">Continue Shopping</button>
        </Link>
      </div>
    );
  }

  const finalPrice = product.sale
    ? product.price * (1 - (product.discount || 0) / 100)
    : product.price;
    
  const relatedProducts = getProductsByCategory(product.category).filter(p => p.id !== product.id).slice(0, 4);
  
  const incrementQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  // Simulated multiple product images (in a real app, you'd have multiple images per product)
  const productImages = [
    product.image,
    "https://images.unsplash.com/photo-1608042314453-ae338d80c427?q=80&w=500",
    "https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?q=80&w=500"
  ];

  return (
    <div className="container-custom py-12">
      {/* Breadcrumb */}
      <nav className="flex text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-neno-primary">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-neno-primary">Shop</Link>
        <span className="mx-2">/</span>
        <Link 
          to={`/shop?category=${product.category}`}
          className="hover:text-neno-primary"
        >
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{product.name}</span>
      </nav>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div>
          <div className="relative pt-[100%] bg-gray-100 rounded-lg overflow-hidden mb-4">
            <img 
              src={productImages[activeImageIndex]} 
              alt={product.name}
              className="absolute inset-0 w-full h-full object-contain"
            />
            {product.sale && (
              <div className="absolute top-4 left-4 bg-neno-secondary text-white text-sm font-medium px-2 py-1 rounded">
                {product.discount}% OFF
              </div>
            )}
          </div>
          <div className="grid grid-cols-3 gap-4">
            {productImages.map((image, index) => (
              <button 
                key={index} 
                className={`border rounded-md overflow-hidden ${activeImageIndex === index ? 'border-neno-primary' : 'border-gray-200'}`}
                onClick={() => setActiveImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-24 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-neno-dark mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={16} fill={index < Math.round(product.rating) ? "currentColor" : "none"} />
              ))}
            </div>
            <span className="text-gray-500">{product.reviews} reviews</span>
          </div>
          
          <div className="mb-6">
            {product.sale ? (
              <div className="flex items-center">
                <span className="text-2xl font-bold text-neno-secondary mr-3">
                  ${finalPrice.toFixed(2)}
                </span>
                <span className="text-gray-500 line-through text-lg">
                  ${product.price.toFixed(2)}
                </span>
              </div>
            ) : (
              <span className="text-2xl font-bold text-neno-dark">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>
          
          <div className="mb-6">
            <p className="text-gray-700">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center">
              <span className="text-gray-700 mr-4">Availability:</span>
              {product.stock > 0 ? (
                <span className="text-green-600 font-medium">In Stock ({product.stock} available)</span>
              ) : (
                <span className="text-red-600 font-medium">Out of Stock</span>
              )}
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={decrementQuantity}
                >
                  <Minus size={16} />
                </button>
                <span className="px-4 py-2 min-w-[40px] text-center">
                  {quantity}
                </span>
                <button 
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100"
                  onClick={incrementQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
              
              {/* Add to Cart & Buy Now */}
              <button 
                className="btn-primary flex items-center"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingBag size={18} className="mr-2" />
                Add to Cart
              </button>
              
              <button 
                className="btn-secondary flex items-center"
                onClick={handleBuyNow}
                disabled={product.stock === 0}
              >
                Buy Now
              </button>

              <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                <Heart size={20} />
              </button>

              <button className="p-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100">
                <Share2 size={20} />
              </button>
            </div>
          </div>
          
          {/* Shipping & Returns */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <div className="flex">
              <Truck size={20} className="text-neno-primary mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-neno-dark">Free Delivery</p>
                <p className="text-sm text-gray-600">Orders over $50 qualify for free shipping</p>
              </div>
            </div>
            <div className="flex">
              <RotateCcw size={20} className="text-neno-primary mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-neno-dark">Easy Returns</p>
                <p className="text-sm text-gray-600">30-day return policy for eligible items</p>
              </div>
            </div>
            <div className="flex">
              <Shield size={20} className="text-neno-primary mr-2 flex-shrink-0" />
              <div>
                <p className="font-medium text-neno-dark">Warranty</p>
                <p className="text-sm text-gray-600">All products come with a 1-year warranty</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Product Details Tabs */}
      <div className="mb-16">
        <Tabs defaultValue="description">
          <TabsList className="w-full border-b border-gray-200 flex mb-6">
            <TabsTrigger value="description" className="flex-1 text-lg py-4 px-6">
              Description
            </TabsTrigger>
            <TabsTrigger value="specifications" className="flex-1 text-lg py-4 px-6">
              Specifications
            </TabsTrigger>
            <TabsTrigger value="reviews" className="flex-1 text-lg py-4 px-6">
              Reviews ({product.reviews})
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="p-4">
            <div className="text-gray-700 space-y-4">
              <p>{product.description}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam egestas, nunc a tincidunt malesuada, nisl nunc egestas nunc, eget egestas nunc a tincidunt malesuada. Nullam egestas, nunc a tincidunt malesuada, nisl nunc egestas nunc.</p>
              <p>Nullam egestas, nunc a tincidunt malesuada, nisl nunc egestas nunc, eget egestas nunc a tincidunt malesuada. Nullam egestas, nunc a tincidunt malesuada.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>High-quality materials for durability</li>
                <li>Ergonomic design for comfortable use</li>
                <li>Versatile application for various projects</li>
                <li>Energy-efficient operation</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications" className="p-4">
            <div className="border-b border-gray-200 mb-4 pb-4">
              <h3 className="font-medium text-neno-dark mb-4">Technical Specifications</h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600 w-1/3">Material</td>
                    <td className="py-2 text-gray-900">Stainless Steel / Plastic</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600">Dimensions</td>
                    <td className="py-2 text-gray-900">10.5 × 7.2 × 3.6 inches</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600">Weight</td>
                    <td className="py-2 text-gray-900">2.5 lbs (1.1 kg)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600">Color</td>
                    <td className="py-2 text-gray-900">Silver / Black</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600">Warranty</td>
                    <td className="py-2 text-gray-900">1 Year Limited</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4 text-gray-600">Origin</td>
                    <td className="py-2 text-gray-900">Imported</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div>
              <h3 className="font-medium text-neno-dark mb-4">Package Includes</h3>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Main product unit</li>
                <li>User manual</li>
                <li>Warranty card</li>
                <li>Accessories (if applicable)</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="p-4">
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Customer reviews will appear here.</p>
              <button className="btn-primary">Write a Review</button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold text-neno-dark mb-8">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
