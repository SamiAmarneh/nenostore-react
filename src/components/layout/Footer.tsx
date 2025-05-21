
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neno-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">Neno</span>
              <span className="text-2xl font-light text-neno-primary">Store</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Your ultimate destination for high-quality home tools and accessories. We provide the best products for your home improvement needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-neno-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-neno-primary">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-neno-primary">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-neno-primary">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-neno-primary">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-neno-primary">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-neno-primary">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-neno-primary">Blog</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Kitchen" className="text-gray-300 hover:text-neno-primary">Kitchen</Link>
              </li>
              <li>
                <Link to="/shop?category=Tools" className="text-gray-300 hover:text-neno-primary">Tools</Link>
              </li>
              <li>
                <Link to="/shop?category=Cleaning" className="text-gray-300 hover:text-neno-primary">Cleaning</Link>
              </li>
              <li>
                <Link to="/shop?category=Storage" className="text-gray-300 hover:text-neno-primary">Storage</Link>
              </li>
              <li>
                <Link to="/shop?category=Lighting" className="text-gray-300 hover:text-neno-primary">Lighting</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-300">123 Main Street, Anytown, ST 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0" size={18} />
                <span className="text-gray-300">info@nenostore.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Neno Store. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
