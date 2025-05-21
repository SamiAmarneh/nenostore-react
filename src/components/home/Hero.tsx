
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-gray-200 py-16 md:py-24">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div>
              <span className="inline-block bg-neno-primary bg-opacity-10 text-neno-primary px-3 py-1 rounded-full text-sm font-medium">
                Top Quality Tools
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neno-dark leading-tight">
              Transform Your Home with Our Premium Tools
            </h1>
            <p className="text-gray-600 text-lg max-w-md">
              Discover our wide selection of high-quality home tools, kitchen essentials, and organization solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop">
                <button className="btn-primary">
                  Shop Now
                </button>
              </Link>
              <Link to="/categories">
                <button className="border border-neno-dark text-neno-dark py-2 px-4 rounded-md hover:bg-neno-dark hover:text-white transition-all">
                  Explore Categories
                </button>
              </Link>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex flex-col">
                <span className="font-bold text-neno-dark text-2xl">5000+</span>
                <span className="text-gray-500 text-sm">Products</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="font-bold text-neno-dark text-2xl">15k+</span>
                <span className="text-gray-500 text-sm">Happy Customers</span>
              </div>
              <div className="w-px h-10 bg-gray-300"></div>
              <div className="flex flex-col">
                <span className="font-bold text-neno-dark text-2xl">99%</span>
                <span className="text-gray-500 text-sm">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?q=80&w=1000" 
              alt="Home Tools" 
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute -bottom-5 -left-5 bg-white rounded-lg shadow-lg p-4 max-w-[200px]">
              <div className="flex items-center gap-2">
                <div className="bg-neno-primary rounded-full p-2">
                  <span className="text-white font-bold">25%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-neno-dark">Special Offer</p>
                  <p className="text-xs text-gray-500">On Kitchen Essentials</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
