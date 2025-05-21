
import { Link } from "react-router-dom";
import { ChefHat, Wrench, Sparkles, Package, Lightbulb } from "lucide-react";
import { categories } from "@/data/products";

const iconMap: Record<string, React.ReactNode> = {
  ChefHat: <ChefHat size={32} />,
  Wrench: <Wrench size={32} />,
  Sparkles: <Sparkles size={32} />,
  Package: <Package size={32} />,
  Lightbulb: <Lightbulb size={32} />
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neno-dark mb-4">Browse By Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find exactly what you need by exploring our curated categories of premium home tools and essentials
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={`/shop?category=${category.name}`}
              className="group"
            >
              <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-6 text-center transition-all duration-300 group-hover:shadow-md group-hover:border-neno-primary">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-neno-primary bg-opacity-10 text-neno-primary group-hover:bg-neno-primary group-hover:text-white transition-all">
                    {iconMap[category.icon]}
                  </div>
                </div>
                <h3 className="text-lg font-medium text-neno-dark mb-1 group-hover:text-neno-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-500 text-sm">{category.count} Products</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
