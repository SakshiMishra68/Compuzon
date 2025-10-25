import React from 'react';
import { motion } from 'framer-motion';
import { Tag, ArrowRight } from 'lucide-react';
import { useAppSelector } from '../store/hooks';
import ProductCard from '../components/product/ProductCard';

const DealsPage: React.FC = () => {
  const products = useAppSelector((state) => state.products.products);

  // Filter products with discounts (has originalPrice)
  const dealsProducts = products.filter(product => product.originalPrice);

  // Group deals by category
  const dealsByCategory = dealsProducts.reduce((acc, product) => {
    const category = product.category.name;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl overflow-hidden mb-12">
          <div className="container py-12 px-6 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hot Deals & Special Offers
              </h1>
              <p className="text-lg text-white/90 mb-8">
                Save big on premium PC components with our exclusive deals and limited-time offers.
              </p>
              <div className="flex items-center justify-center space-x-4">
                <Tag className="h-8 w-8" />
                <span className="text-xl font-semibold">Up to 40% OFF</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Deals by Category */}
        {Object.entries(dealsByCategory).map(([category, products]) => (
          <div key={category} className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{category} Deals</h2>
              <button className="text-primary hover:text-primary-dark flex items-center">
                View All <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map(product => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* Featured Deal */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                Limited Time Offer
              </span>
              <h2 className="text-3xl font-bold mb-4">
                Gaming Bundle Deal
              </h2>
              <p className="text-gray-600 mb-6">
                Get a high-performance gaming setup at an unbeatable price. 
                Bundle includes RTX 4070, Ryzen 7 processor, and more.
              </p>
              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-primary">$1,999</span>
                <span className="text-xl text-gray-500 line-through ml-4">$2,499</span>
                <span className="ml-4 bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-semibold">
                  Save $500
                </span>
              </div>
              <button className="btn btn-primary inline-flex items-center">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="relative h-64 lg:h-auto">
              <img
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
                alt="Gaming Bundle"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gray-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Never Miss a Deal
          </h2>
          <p className="text-gray-300 mb-6">
            Subscribe to our newsletter and be the first to know about exclusive offers and discounts.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 input"
            />
            <button type="submit" className="btn btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DealsPage;