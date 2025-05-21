
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  
  const cartTotal = getCartTotal();
  const shipping = cartTotal > 50 ? 0 : 5.99;
  const tax = cartTotal * 0.08;
  const orderTotal = cartTotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="container-custom py-16 text-center">
        <div className="max-w-md mx-auto">
          <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
          <Link to="/shop">
            <Button className="btn-primary">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      <h1 className="text-3xl font-bold text-neno-dark mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Cart Items */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="hidden md:grid grid-cols-12 bg-gray-50 p-4 border-b border-gray-200">
              <div className="col-span-6 font-medium text-neno-dark">Product</div>
              <div className="col-span-2 font-medium text-neno-dark text-center">Price</div>
              <div className="col-span-2 font-medium text-neno-dark text-center">Quantity</div>
              <div className="col-span-2 font-medium text-neno-dark text-right">Total</div>
            </div>
            
            {cartItems.map((item) => {
              const finalPrice = item.product.sale
                ? item.product.price * (1 - (item.product.discount || 0) / 100)
                : item.product.price;
                
              const itemTotal = finalPrice * item.quantity;
              
              return (
                <div key={item.product.id} className="border-b border-gray-200 last:border-0">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 items-center">
                    {/* Product */}
                    <div className="md:col-span-6 flex items-center">
                      <div className="w-20 h-20 bg-gray-100 rounded-md mr-4 overflow-hidden flex-shrink-0">
                        <Link to={`/product/${item.product.id}`}>
                          <img 
                            src={item.product.image} 
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </Link>
                      </div>
                      <div>
                        <Link 
                          to={`/product/${item.product.id}`}
                          className="font-medium text-neno-dark hover:text-neno-primary"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">{item.product.category}</p>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden text-gray-500">Price:</span>
                      <span className="font-medium">${finalPrice.toFixed(2)}</span>
                    </div>
                    
                    {/* Quantity */}
                    <div className="md:col-span-2 flex justify-between md:justify-center items-center">
                      <span className="md:hidden text-gray-500">Quantity:</span>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button 
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 py-1 min-w-[30px] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                    
                    {/* Total */}
                    <div className="md:col-span-2 flex justify-between md:justify-end items-center">
                      <span className="md:hidden text-gray-500">Total:</span>
                      <div className="flex items-center">
                        <span className="font-medium mr-4">${itemTotal.toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Cart Actions */}
          <div className="flex flex-wrap justify-between items-center mt-6 gap-4">
            <Link to="/shop">
              <Button variant="outline" className="flex items-center">
                <ShoppingBag size={16} className="mr-2" />
                Continue Shopping
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="text-red-500 border-red-500 hover:bg-red-50 hover:text-red-600"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
            <h2 className="text-xl font-bold text-neno-dark mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between">
                <span className="text-lg font-bold text-neno-dark">Total</span>
                <span className="text-lg font-bold text-neno-primary">${orderTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="btn-primary w-full flex items-center justify-center text-lg" size="lg">
              Proceed to Checkout
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <div className="mt-6 text-sm text-gray-500 text-center">
              <p className="mb-2">Secure checkout powered by Visa Payment Gateway</p>
              <div className="flex justify-center space-x-2">
                <div className="bg-gray-100 rounded p-1">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="20" rx="2" fill="#172B85"/>
                    <path d="M13.0905 6.2168L10.3333 13.8797H12.5273L15.2845 6.2168H13.0905Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.27666 6.21687L7.14563 11.4915L6.90689 10.5061C6.45595 9.2799 5.22128 7.9032 3.81335 7.18754L5.7846 13.8768H8.03263L11.5195 6.21687H9.27666Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.31718 7.03455C6.12503 6.2168 5.08415 6.14551 3.95026 6.14551H0.0283203L0 6.32977C3.06278 7.11188 5.08415 8.9801 5.94263 11.3494L5.08415 7.46543C4.96403 7.17516 4.67995 7.03455 4.31211 7.03455H6.31718Z" fill="#F9A533"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.7646 6.2168C24.7715 6.2168 23.9768 6.57878 23.4836 7.42103L20.1111 13.88H22.359L22.9387 12.3006H26.2099L26.5537 13.88H28.5608L26.5537 6.2168H25.7646ZM23.5774 10.7778C23.9212 9.72875 24.8045 7.85455 24.8045 7.85455C24.798 7.86162 25.0099 7.3121 25.1301 6.97003L25.2973 7.78343C25.2973 7.78343 25.8833 9.82697 26.0551 10.7778H23.5774Z" fill="white"/>
                    <path d="M19.3143 9.8684C19.3143 11.5358 17.6517 13.0122 15.0273 13.0122L15.0339 13.0122C15.0285 13.0122 15.0232 13.0122 15.0178 13.0122C17.6422 13.0122 19.3049 11.5358 19.3049 9.8684C19.3049 8.20097 17.6422 6.72461 15.0178 6.72461C15.0232 6.72461 15.0285 6.72461 15.0339 6.72461L15.0273 6.72461C17.6517 6.72461 19.3143 8.20097 19.3143 9.8684Z" fill="#F9A533"/>
                  </svg>
                </div>
                <div className="bg-gray-100 rounded p-1">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="20" rx="2" fill="#252525"/>
                    <path d="M11.2984 13.2831H9.39648L10.7035 6.71289H12.6055L11.2984 13.2831Z" fill="#EB001B"/>
                    <path d="M19.9813 6.83033C19.4951 6.63281 18.7492 6.41699 17.8117 6.41699C15.9783 6.41699 14.6953 7.33936 14.6875 8.66504C14.6719 9.65918 15.6016 10.2129 16.2852 10.5449C16.9844 10.8848 17.209 11.1035 17.209 11.3955C17.2012 11.8398 16.6602 12.0508 16.1602 12.0508C15.4648 12.0508 15.0859 11.9316 14.5 11.6621L14.2305 11.5195L13.9414 13.0605C14.5156 13.3184 15.5469 13.5498 16.6133 13.5576C18.5703 13.5576 19.8301 12.6504 19.8457 11.2324C19.8535 10.4336 19.3301 9.81934 18.2676 9.3125C17.6133 8.99414 17.209 8.78125 17.209 8.45508C17.209 8.15625 17.5547 7.84961 18.3105 7.84961C18.9434 7.84179 19.4062 7.99414 19.7618 8.14648L19.9501 8.23047L20.2393 6.74414L19.9813 6.83033Z" fill="#00A1DF"/>
                    <path d="M22.9693 10.6328C23.1213 10.2266 23.7791 8.50195 23.7791 8.50195C23.7713 8.51758 23.9233 8.08789 24.0049 7.82812L24.1256 8.41992C24.1256 8.41992 24.5201 10.2812 24.5936 10.6328C24.2893 10.6328 23.3362 10.6328 22.9693 10.6328ZM25.3847 6.71289H23.954C23.5002 6.71289 23.1643 6.8457 22.9693 7.33936L20.1526 13.2832H22.1057C22.1057 13.2832 22.4651 12.291 22.5307 12.1016H25.0025C25.0557 12.3398 25.2432 13.2832 25.2432 13.2832H27L25.3847 6.71289Z" fill="white"/>
                    <path d="M8.29816 6.71289L6.46316 11.0469L6.29347 10.1719C5.99941 9.09961 4.99551 7.92383 3.87832 7.31836L5.5962 13.2754H7.56472L10.2596 6.71289H8.29816Z" fill="white"/>
                    <path d="M5.10052 7.30273C4.94489 6.83789 4.53927 6.69922 4.04177 6.68359H1.1797L1.15625 6.81445C3.55989 7.39258 5.17708 8.67383 5.82833 10.1719L5.10052 7.30273Z" fill="#EB001B"/>
                  </svg>
                </div>
                <div className="bg-gray-100 rounded p-1">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="20" rx="2" fill="#016FD0"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M16.4733 13.6572H15.2969V8.09668H16.4733V13.6572Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.7504 8.18461C21.4176 8.05269 20.9268 7.91089 20.3096 7.91089C18.9324 7.91089 17.9385 8.63014 17.9356 9.70783C17.9302 10.5001 18.6343 10.9478 19.1559 11.2085C19.6895 11.4746 19.8621 11.6481 19.8621 11.8796C19.8595 12.2346 19.4089 12.3987 18.9918 12.3987C18.4118 12.3987 18.1017 12.2985 17.6244 12.0776L17.4172 11.9721L17.1963 13.0885C17.5966 13.2696 18.3487 13.4316 19.1304 13.4369C20.6029 13.4369 21.5798 12.7256 21.5878 11.5815C21.5906 10.9505 21.2203 10.4652 20.3633 10.0726C19.8486 9.81421 19.5329 9.64534 19.5356 9.40393C19.5356 9.18959 19.7882 8.9587 20.3633 8.9587C20.8404 8.94882 21.1826 9.07525 21.4471 9.20169L21.5932 9.27602L21.7504 8.18461Z" fill="white"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M25.0909 8.09668H23.9947C23.5766 8.09668 23.2867 8.20506 23.1165 8.62055L21.1152 13.6584H22.6045C22.6045 13.6584 22.8651 13.0093 22.9179 12.8657C23.0693 12.8657 24.459 12.8669 24.6506 12.8669C24.6908 13.0502 24.8248 13.6584 24.8248 13.6584H26.1434L25.0909 8.09668ZM23.3262 11.8045C23.4347 11.5328 23.9214 10.1935 23.9214 10.1935C23.9187 10.2012 24.0487 9.8667 24.1228 9.66536L24.2196 10.1661C24.2196 10.1661 24.5192 11.5656 24.5728 11.8045H23.3262Z" fill="white"/>
                    <path d="M14.4639 8.09668L13.0645 12.0022L12.9222 11.2809C12.6701 10.3806 11.8079 9.38553 10.8379 8.879L12.2045 13.656H13.7106L16.0097 8.09668H14.4639Z" fill="white"/>
                    <path d="M11.4082 8.09505H9.10322L9.08594 8.1991C10.6649 8.54799 11.7712 9.31155 12.2992 10.2798L11.7686 8.6312C11.6797 8.28248 11.574 8.11756 11.4082 8.09505Z" fill="#F9A533"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
