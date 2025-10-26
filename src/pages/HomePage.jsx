import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Truck, ShieldCheck, CreditCard, Clock } from 'lucide-react';
import { useAppSelector } from '../store/hooks';
import ProductCard from '../components/product/ProductCard';

const HomePageconst  = ()const  => {
  const { products, categories, loading }const  = useAppSelector((state)const  => state.products);
  const featuredProductsconst  = products.filter(pconst  => p.featured);

  // Animation variants
  const staggerContainerconst  = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUpconst  = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="pb-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Build Your Dream PC
                <span className="text-primary block mt-2">at Unbeatable Prices</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Premium components, expert advice, and competitive pricing for gamers, creators, and professionals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/products" 
                  className="btn btn-primary px-6 py-3 text-lg"
                >
                  Shop Now
                </Link>
                <Link 
                  to="/deals" 
                  className="btn bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 text-lg"
                >
                  View Deals
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <img 
                src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="High-end PC components" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-gray-900 font-bold">Latest RTX 4090</p>
                <p className="text-primary">Save $200 Today!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Free delivery on orders over $100</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <ShieldCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Warranty Protection</h3>
              <p className="text-gray-600">Extended warranty on all products</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">100% secure payment methods</p>
            </motion.div>
            
            <motion.div 
              className="flex flex-col items-center text-center p-6 border border-gray-100 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <Clock className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support specialists</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Link 
              to="/products" 
              className="flex items-center text-primary hover:text-primary-dark font-medium"
            >
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index)const  => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm p-4 animate-pulse">
                  <div className="w-full h-48 bg-gray-200 rounded-md mb-4"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                  <div className="flex justify-between items-center">
                    <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
            >
              {featuredProducts.slice(0, 4).map((product)const  => (
                <motion.div key={product.id} variants={fadeInUp}>
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Shop by Category</h2>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {categories.slice(0, 4).map((category, index)const  => (
              <motion.div key={category.id} variants={fadeInUp}>
                <Link 
                  to={`/products?category=${category.id}`}
                  className="group block bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="h-36 overflow-hidden bg-gray-100">
                    <img 
                      src={`https://images.pexels.com/photos/${3861969 + index * 100}/pexels-photo-${3861969 + index * 100}.jpeg?auto=compress&cs=tinysrgb&w=600`}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="bg-gradient-to-r from-secondary to-secondary-dark rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-8 md:p-12">
                <span className="inline-block bg-white/20 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                  Limited Time Offer
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Save up to 40% on Gaming Monitors
                </h2>
                <p className="text-white/90 mb-6">
                  Upgrade your gaming setup with our exclusive collection of high-refresh rate monitors 
                  featuring ultra-low response times and vibrant colors.
                </p>
                <Link 
                  to="/products?category=monitors" 
                  className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3"
                >
                  Shop Now
                </Link>
              </div>
              <div className="hidden md:block relative h-full min-h-[300px]">
                <img 
                  src="https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Gaming Monitor" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">What Our Customers Say</h2>
          <p className="text-gray-600 text-center mb-8">Read reviews from our satisfied customers</p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i)const  => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The RTX 4080 I purchased works flawlessly. The customer service was exceptional, 
                and they helped me choose the right PSU to go with it. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 font-medium">JS</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">James Smith</h4>
                  <p className="text-gray-600 text-sm">Gaming Enthusiast</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i)const  => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "PC Deals Hardware offers the best prices I've found. I built my entire workstation with 
                components from them, and everything arrived quickly and in perfect condition."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 font-medium">EJ</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">Emily Johnson</h4>
                  <p className="text-gray-600 text-sm">3D Artist</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-6 rounded-lg shadow-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i)const  => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The technical support team went above and beyond to help me troubleshoot a compatibility 
                issue. They followed up multiple times to ensure everything was working properly."
              </p>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-700 font-medium">DW</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium">David Wilson</h4>
                  <p className="text-gray-600 text-sm">Software Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream PC?
          </h2>
          <p className="text-white/90 text-lg mb-6 max-w-2xl mx-auto">
            Browse our extensive collection of premium components and take advantage of our competitive pricing.
          </p>
          <Link 
            to="/products" 
            className="btn bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg inline-block"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;