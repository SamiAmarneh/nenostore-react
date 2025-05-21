
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag, Search, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-neno-dark">Neno</span>
            <span className="text-2xl font-light text-neno-primary">Store</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-neno-dark hover:text-neno-primary transition-colors">
              Home
            </Link>
            <Link to="/shop" className="text-neno-dark hover:text-neno-primary transition-colors">
              Shop
            </Link>
            <div className="group relative">
              <button className="text-neno-dark hover:text-neno-primary transition-colors">
                Categories
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    to="/shop?category=Kitchen"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-neno-primary"
                  >
                    Kitchen
                  </Link>
                  <Link
                    to="/shop?category=Tools"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-neno-primary"
                  >
                    Tools
                  </Link>
                  <Link
                    to="/shop?category=Cleaning"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-neno-primary"
                  >
                    Cleaning
                  </Link>
                  <Link
                    to="/shop?category=Storage"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-neno-primary"
                  >
                    Storage
                  </Link>
                  <Link
                    to="/shop?category=Lighting"
                    className="block px-4 py-2 hover:bg-gray-50 hover:text-neno-primary"
                  >
                    Lighting
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-neno-dark hover:text-neno-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-neno-dark hover:text-neno-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-neno-primary hidden md:block">
              <Search size={20} />
            </button>
            <button className="text-gray-600 hover:text-neno-primary hidden md:block">
              <User size={20} />
            </button>
            <button className="text-gray-600 hover:text-neno-primary hidden md:block">
              <Heart size={20} />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-neno-primary relative">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neno-secondary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container-custom py-4 space-y-4">
            <Link
              to="/"
              className="block text-neno-dark hover:text-neno-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block text-neno-dark hover:text-neno-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <div className="space-y-2">
              <p className="font-medium text-neno-dark">Categories</p>
              <div className="pl-4 space-y-2">
                <Link
                  to="/shop?category=Kitchen"
                  className="block text-gray-600 hover:text-neno-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kitchen
                </Link>
                <Link
                  to="/shop?category=Tools"
                  className="block text-gray-600 hover:text-neno-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Tools
                </Link>
                <Link
                  to="/shop?category=Cleaning"
                  className="block text-gray-600 hover:text-neno-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cleaning
                </Link>
                <Link
                  to="/shop?category=Storage"
                  className="block text-gray-600 hover:text-neno-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Storage
                </Link>
                <Link
                  to="/shop?category=Lighting"
                  className="block text-gray-600 hover:text-neno-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Lighting
                </Link>
              </div>
            </div>
            <Link
              to="/about"
              className="block text-neno-dark hover:text-neno-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-neno-dark hover:text-neno-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
