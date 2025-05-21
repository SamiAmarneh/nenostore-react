
import { Link } from "react-router-dom";

const PromoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block bg-neno-primary bg-opacity-10 text-neno-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                New Arrivals
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-neno-dark mb-2">
                Kitchen Essentials Collection
              </h3>
              <p className="text-gray-600 mb-6">
                Upgrade your kitchen with our premium tools and accessories
              </p>
              <Link to="/shop?category=Kitchen">
                <button className="btn-primary">
                  Shop Now
                </button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556910638-6cdac31d47d1?q=80&w=600"
              alt="Kitchen Essentials"
              className="absolute bottom-0 right-0 w-1/2 h-auto object-contain"
            />
          </div>

          <div className="bg-neno-dark rounded-lg p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <span className="inline-block bg-neno-secondary bg-opacity-20 text-neno-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                Special Offer
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                20% Off Power Tools
              </h3>
              <p className="text-gray-300 mb-6">
                Professional grade tools for DIY enthusiasts and pros
              </p>
              <Link to="/shop?category=Tools">
                <button className="bg-neno-secondary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-all">
                  View Deals
                </button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600"
              alt="Power Tools"
              className="absolute bottom-0 right-0 w-1/2 h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
