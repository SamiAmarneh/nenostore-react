
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ChevronDown, ChevronUp, SlidersHorizontal, X } from "lucide-react";
import ProductGrid from "@/components/ui/ProductGrid";
import { Product, products, categories } from "@/data/products";

const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>("featured");
  const [showFilters, setShowFilters] = useState(false);
  
  // Initialize filters from URL params
  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
  }, []);

  // Apply filters
  useEffect(() => {
    let result = [...products];
    
    // Filter by category
    if (selectedCategories.length > 0) {
      result = result.filter(product => selectedCategories.includes(product.category));
    }
    
    // Filter by price
    result = result.filter(
      product => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result = result.filter(product => product.new).concat(result.filter(product => !product.new));
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    
    setFilteredProducts(result);
  }, [selectedCategories, priceRange, sortBy]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => {
      if (prev.includes(category)) {
        return prev.filter(c => c !== category);
      } else {
        return [...prev, category];
      }
    });
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSortBy("featured");
    setSearchParams({});
  };

  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold text-neno-dark mb-8">Shop Our Products</h1>
      
      {/* Mobile filter button */}
      <div className="md:hidden mb-4">
        <button 
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-between w-full bg-white border border-gray-200 rounded-md px-4 py-2"
        >
          <div className="flex items-center">
            <SlidersHorizontal size={18} className="mr-2" />
            <span>Filters</span>
          </div>
          {showFilters ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar */}
        <div className={`w-full md:w-64 ${showFilters ? 'block' : 'hidden'} md:block`}>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-medium text-neno-dark">Filters</h2>
              <button 
                onClick={clearFilters}
                className="text-sm text-neno-primary hover:underline"
              >
                Clear All
              </button>
            </div>
            
            {/* Category filter */}
            <div className="mb-8">
              <h3 className="font-medium text-neno-dark mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex items-center">
                    <Checkbox 
                      id={`category-${category.name}`}
                      checked={selectedCategories.includes(category.name)}
                      onCheckedChange={() => handleCategoryChange(category.name)}
                    />
                    <Label 
                      htmlFor={`category-${category.name}`}
                      className="ml-2 text-gray-600 cursor-pointer"
                    >
                      {category.name} <span className="text-gray-400">({category.count})</span>
                    </Label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Price range filter */}
            <div>
              <h3 className="font-medium text-neno-dark mb-4">Price Range</h3>
              <Slider
                defaultValue={[0, 200]}
                max={200}
                step={1}
                value={priceRange}
                onValueChange={(value) => setPriceRange(value as number[])}
              />
              <div className="flex justify-between mt-2 text-sm text-gray-500">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        <div className="flex-1">
          {/* Sort and results count */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <p className="text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
            <div className="flex items-center">
              <label htmlFor="sort" className="mr-2 text-gray-600">Sort by:</label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-neno-primary"
              >
                <option value="featured">Featured</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
          
          {/* Selected filters */}
          {(selectedCategories.length > 0) && (
            <div className="flex flex-wrap gap-2 mb-6">
              {selectedCategories.map(category => (
                <div 
                  key={category}
                  className="flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {category}
                  <button 
                    onClick={() => handleCategoryChange(category)}
                    className="ml-1 text-gray-500 hover:text-gray-700"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          )}
          
          {/* Products */}
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="bg-gray-50 p-8 rounded-md text-center">
              <p className="text-lg text-gray-600">No products found matching your filters.</p>
              <button 
                onClick={clearFilters}
                className="mt-4 btn-primary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
