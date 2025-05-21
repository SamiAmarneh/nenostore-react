
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  reviews: number;
  stock: number;
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  discount?: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Kitchen Knife Set",
    price: 129.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=1000",
    description: "Professional 8-piece knife set with ergonomic handles and high-carbon stainless steel blades. Includes chef's knife, bread knife, utility knife, paring knife, and kitchen shears.",
    rating: 4.8,
    reviews: 256,
    stock: 45,
    featured: true
  },
  {
    id: "2",
    name: "Electric Hand Mixer",
    price: 49.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1585237017125-24baf8d7406f?q=80&w=1000",
    description: "5-speed hand mixer with stainless steel beaters and dough hooks. Powerful 250W motor for all your mixing needs.",
    rating: 4.5,
    reviews: 128,
    stock: 32,
    featured: true
  },
  {
    id: "3",
    name: "Cordless Power Drill",
    price: 89.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1581147036324-c47a03ff9d4f?q=80&w=1000",
    description: "20V lithium-ion battery powered drill with variable speed settings and LED work light. Includes carrying case and 12 drill bits.",
    rating: 4.7,
    reviews: 198,
    stock: 28,
    sale: true,
    discount: 15,
    featured: true
  },
  {
    id: "4",
    name: "Adjustable Wrench Set",
    price: 34.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1504222490345-c075b6008014?q=80&w=1000",
    description: "Set of 3 adjustable wrenches in different sizes. Chrome-plated finish with comfortable grip handles.",
    rating: 4.6,
    reviews: 87,
    stock: 53
  },
  {
    id: "5",
    name: "Robot Vacuum Cleaner",
    price: 199.99,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?q=80&w=1000",
    description: "Smart robot vacuum with mapping technology and app control. 120-minute runtime and automatic recharging.",
    rating: 4.4,
    reviews: 156,
    stock: 19,
    new: true,
    featured: true
  },
  {
    id: "6",
    name: "Microfiber Cleaning Set",
    price: 24.99,
    category: "Cleaning",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=1000",
    description: "10-piece microfiber cleaning set including cloths, mop heads, and dusters. Machine washable and reusable.",
    rating: 4.5,
    reviews: 215,
    stock: 64
  },
  {
    id: "7",
    name: "Storage Bin 3-Pack",
    price: 29.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1595079676326-5d0c24022525?q=80&w=1000",
    description: "Set of 3 stackable storage bins with lids. Clear design for easy visibility of contents.",
    rating: 4.3,
    reviews: 176,
    stock: 41
  },
  {
    id: "8",
    name: "Closet Organizer System",
    price: 79.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1630699144339-420f59b4747a?q=80&w=1000",
    description: "Expandable closet organization system with shelves, hanging rods, and drawer units. Easy to install with included hardware.",
    rating: 4.6,
    reviews: 98,
    stock: 23,
    sale: true,
    discount: 20
  },
  {
    id: "9",
    name: "Smart LED Light Bulb 4-Pack",
    price: 39.99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1633145899658-15abb9a86ed3?q=80&w=1000",
    description: "WiFi-enabled LED smart bulbs compatible with voice assistants. Adjustable brightness and color temperature.",
    rating: 4.7,
    reviews: 134,
    stock: 37,
    new: true
  },
  {
    id: "10",
    name: "Adjustable Floor Lamp",
    price: 69.99,
    category: "Lighting",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1000",
    description: "Modern floor lamp with adjustable height and angle. Energy-efficient LED with 3 color temperature settings.",
    rating: 4.5,
    reviews: 87,
    stock: 18
  },
  {
    id: "11",
    name: "Non-Stick Cookware Set",
    price: 149.99,
    category: "Kitchen",
    image: "https://images.unsplash.com/photo-1584990347449-b88298101c65?q=80&w=1000",
    description: "10-piece non-stick cookware set including pots, pans, and utensils. Dishwasher safe and PFOA-free.",
    rating: 4.6,
    reviews: 215,
    stock: 32,
    sale: true,
    discount: 10
  },
  {
    id: "12",
    name: "Multi-Tool Set",
    price: 45.99,
    category: "Tools",
    image: "https://images.unsplash.com/photo-1426927308491-6380b6a9936f?q=80&w=1000",
    description: "15-in-1 multi-tool with pliers, knife, screwdrivers, and more. Stainless steel construction with carrying case.",
    rating: 4.8,
    reviews: 178,
    stock: 42,
    new: true,
    featured: true
  }
];

export const categories = [
  { name: "Kitchen", icon: "ChefHat", count: getProductCountByCategory("Kitchen") },
  { name: "Tools", icon: "Wrench", count: getProductCountByCategory("Tools") },
  { name: "Cleaning", icon: "Sparkles", count: getProductCountByCategory("Cleaning") },
  { name: "Storage", icon: "Package", count: getProductCountByCategory("Storage") },
  { name: "Lighting", icon: "Lightbulb", count: getProductCountByCategory("Lighting") }
];

function getProductCountByCategory(category: string): number {
  return products.filter(product => product.category === category).length;
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.new);
};

export const getSaleProducts = (): Product[] => {
  return products.filter(product => product.sale);
};
