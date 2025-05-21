
import { getFeaturedProducts } from "@/data/products";
import ProductGrid from "../ui/ProductGrid";

const FeaturedSection = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neno-dark mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of top-quality tools and essentials for your home
          </p>
        </div>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedSection;
