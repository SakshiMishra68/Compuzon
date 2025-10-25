import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Cpu, Monitor, MemoryStick, HardDrive, CircuitBoard, Power,
  Mouse, Network, ChevronRight, ShoppingBag, Star, TrendingUp,
  Zap, Headphones, Smartphone, Laptop, Server, Router
} from 'lucide-react';

const CategoriesPage: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const mainCategories = [
    {
      id: 'processors',
      name: 'Processors',
      icon: Cpu,
      description: 'Intel & AMD CPUs for gaming and workstations',
      productCount: 156,
      color: 'from-blue-500 to-blue-600',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      subCategories: [
        { id: 'intel-processors', name: 'Intel Processors', count: 89, description: 'Latest Intel Core series' },
        { id: 'amd-processors', name: 'AMD Processors', count: 67, description: 'AMD Ryzen & Threadripper' },
        { id: 'server-processors', name: 'Server Processors', count: 23, description: 'Enterprise-grade CPUs' },
        { id: 'mobile-processors', name: 'Mobile Processors', count: 45, description: 'Laptop & mobile CPUs' }
      ]
    },
    {
      id: 'graphics-cards',
      name: 'Graphics Cards',
      icon: Monitor,
      description: 'NVIDIA & AMD GPUs for gaming and content creation',
      productCount: 234,
      color: 'from-green-500 to-green-600',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      subCategories: [
        { id: 'nvidia-rtx', name: 'NVIDIA RTX Series', count: 78, description: 'Latest RTX 40 & 30 series' },
        { id: 'nvidia-gtx', name: 'NVIDIA GTX Series', count: 45, description: 'GTX 16 & 10 series' },
        { id: 'amd-radeon', name: 'AMD Radeon', count: 67, description: 'RX 7000 & 6000 series' },
        { id: 'workstation-gpu', name: 'Workstation GPUs', count: 44, description: 'Professional graphics cards' }
      ]
    },
    {
      id: 'memory',
      name: 'Memory (RAM)',
      icon: MemoryStick,
      description: 'DDR4 & DDR5 memory modules',
      productCount: 189,
      color: 'from-purple-500 to-purple-600',
      image: 'https://images.pexels.com/photos/6781008/pexels-photo-6781008.jpeg',
      subCategories: [
        { id: 'ddr5-memory', name: 'DDR5 Memory', count: 89, description: 'Latest DDR5 technology' },
        { id: 'ddr4-memory', name: 'DDR4 Memory', count: 78, description: 'Reliable DDR4 modules' },
        { id: 'gaming-memory', name: 'Gaming Memory', count: 56, description: 'High-speed RGB memory' },
        { id: 'server-memory', name: 'Server Memory', count: 34, description: 'ECC & registered memory' }
      ]
    },
    {
      id: 'storage',
      name: 'Storage',
      icon: HardDrive,
      description: 'SSDs, HDDs & NVMe drives',
      productCount: 298,
      color: 'from-orange-500 to-orange-600',
      image: 'https://images.pexels.com/photos/4195324/pexels-photo-4195324.jpeg',
      subCategories: [
        { id: 'nvme-ssd', name: 'NVMe SSDs', count: 123, description: 'Ultra-fast PCIe storage' },
        { id: 'sata-ssd', name: 'SATA SSDs', count: 89, description: 'Reliable SATA III drives' },
        { id: 'hard-drives', name: 'Hard Drives', count: 67, description: 'High-capacity HDDs' },
        { id: 'external-storage', name: 'External Storage', count: 45, description: 'Portable storage solutions' }
      ]
    },
    {
      id: 'motherboards',
      name: 'Motherboards',
      icon: CircuitBoard,
      description: 'Intel & AMD motherboards for all builds',
      productCount: 167,
      color: 'from-red-500 to-red-600',
      image: 'https://images.pexels.com/photos/3520694/pexels-photo-3520694.jpeg',
      subCategories: [
        { id: 'intel-motherboards', name: 'Intel Motherboards', count: 89, description: 'LGA 1700 & 1200 sockets' },
        { id: 'amd-motherboards', name: 'AMD Motherboards', count: 78, description: 'AM5 & AM4 sockets' },
        { id: 'gaming-motherboards', name: 'Gaming Motherboards', count: 56, description: 'RGB & overclocking features' },
        { id: 'workstation-motherboards', name: 'Workstation Motherboards', count: 23, description: 'Professional features' }
      ]
    },
    {
      id: 'power-supplies',
      name: 'Power Supplies',
      icon: Power,
      description: 'Modular & non-modular PSUs',
      productCount: 134,
      color: 'from-yellow-500 to-yellow-600',
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg',
      subCategories: [
        { id: 'modular-psu', name: 'Modular PSUs', count: 67, description: 'Fully modular cables' },
        { id: 'semi-modular-psu', name: 'Semi-Modular PSUs', count: 45, description: 'Partially modular design' },
        { id: 'non-modular-psu', name: 'Non-Modular PSUs', count: 22, description: 'Fixed cable design' },
        { id: 'server-psu', name: 'Server PSUs', count: 12, description: 'Enterprise power supplies' }
      ]
    },
    {
      id: 'peripherals',
      name: 'Peripherals',
      icon: Mouse,
      description: 'Gaming keyboards, mice & accessories',
      productCount: 456,
      color: 'from-indigo-500 to-indigo-600',
      image: 'https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg',
      subCategories: [
        { id: 'gaming-keyboards', name: 'Gaming Keyboards', count: 123, description: 'Mechanical & membrane keyboards' },
        { id: 'gaming-mice', name: 'Gaming Mice', count: 98, description: 'Wired & wireless gaming mice' },
        { id: 'headsets', name: 'Gaming Headsets', count: 87, description: 'Surround sound headsets' },
        { id: 'webcams', name: 'Webcams', count: 45, description: 'HD streaming cameras' }
      ]
    },
    {
      id: 'networking',
      name: 'Networking',
      icon: Network,
      description: 'Routers, switches & network equipment',
      productCount: 123,
      color: 'from-teal-500 to-teal-600',
      image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
      subCategories: [
        { id: 'wireless-routers', name: 'Wireless Routers', count: 45, description: 'WiFi 6 & 6E routers' },
        { id: 'network-switches', name: 'Network Switches', count: 34, description: 'Managed & unmanaged switches' },
        { id: 'wifi-adapters', name: 'WiFi Adapters', count: 28, description: 'USB & PCIe WiFi cards' },
        { id: 'network-cables', name: 'Network Cables', count: 16, description: 'Ethernet & fiber cables' }
      ]
    }
  ];

  const featuredCategories = [
    {
      id: 'gaming-pcs',
      name: 'Gaming PCs',
      description: 'Pre-built gaming systems ready to play',
      image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      productCount: 45,
      badge: 'Popular',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'workstations',
      name: 'Workstations',
      description: 'Professional workstation builds for creators',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      productCount: 28,
      badge: 'New',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'budget-builds',
      name: 'Budget Builds',
      description: 'Affordable PC components for every budget',
      image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg',
      productCount: 67,
      badge: 'Best Value',
      badgeColor: 'bg-orange-500'
    }
  ];

  const popularBrands = [
    { name: 'Intel', logo: '🔷', productCount: 189, color: 'bg-blue-100 text-blue-800' },
    { name: 'AMD', logo: '🔴', productCount: 156, color: 'bg-red-100 text-red-800' },
    { name: 'NVIDIA', logo: '🟢', productCount: 123, color: 'bg-green-100 text-green-800' },
    { name: 'ASUS', logo: '⚫', productCount: 234, color: 'bg-gray-100 text-gray-800' },
    { name: 'MSI', logo: '🔴', productCount: 198, color: 'bg-red-100 text-red-800' },
    { name: 'Corsair', logo: '⚡', productCount: 167, color: 'bg-yellow-100 text-yellow-800' },
    { name: 'Samsung', logo: '🔵', productCount: 145, color: 'bg-blue-100 text-blue-800' },
    { name: 'Western Digital', logo: '🟡', productCount: 134, color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Browse Categories
          </motion.h1>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Explore our comprehensive collection of PC components organized by category
          </motion.p>
        </div>

        {/* Featured Categories */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Featured Categories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <span className={`${category.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                    {category.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-gray-200 mb-4">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-300">{category.productCount} products</span>
                    <Link
                      to={`/products?category=${category.id}`}
                      className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 group-hover:translate-x-1"
                    >
                      Explore <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Main Categories Grid with Hover Navigation */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            All Categories
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => setHoveredCategory(category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <motion.div
                    className="group cursor-pointer h-full"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                  >
                    <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 text-white shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col`}>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <span className="text-sm font-bold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          {category.productCount}
                        </span>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                        <p className="text-white/90 text-sm mb-4 leading-relaxed">
                          {category.description}
                        </p>
                      </div>
                      
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          <span>{category.productCount} products</span>
                        </div>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>

                  {/* Hover Dropdown with Subcategories */}
                  <AnimatePresence>
                    {hoveredCategory === category.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 15, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-6 z-20"
                        style={{ minWidth: '320px' }}
                      >
                        <div className="flex items-center mb-4">
                          <div className={`p-2 bg-gradient-to-br ${category.color} rounded-lg mr-3`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                            {category.name}
                          </h4>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          {category.subCategories.map((subCategory) => (
                            <Link
                              key={subCategory.id}
                              to={`/products?category=${subCategory.id}`}
                              className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 group"
                            >
                              <div className="flex-1">
                                <h5 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                  {subCategory.name}
                                </h5>
                                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                  {subCategory.description}
                                </p>
                              </div>
                              <div className="flex items-center ml-4">
                                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full mr-2">
                                  {subCategory.count}
                                </span>
                                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                          <Link
                            to={`/products?category=${category.id}`}
                            className="flex items-center justify-center w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
                          >
                            View All {category.name}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular Brands */}
        <div className="mb-20">
          <motion.h2 
            className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Popular Brands
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {popularBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.05 }}
              >
                <Link
                  to={`/products?brand=${brand.name.toLowerCase()}`}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 text-center hover:shadow-lg transition-all duration-300 group block h-full"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {brand.logo}
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                    {brand.name}
                  </h3>
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${brand.color} dark:bg-gray-700 dark:text-gray-300`}>
                    {brand.productCount} products
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Statistics */}
        <motion.div 
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                2,400+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Total Products</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Top Brands</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                8
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Main Categories</div>
            </div>
            <div className="group">
              <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Customer Support</div>
            </div>
          </div>
        </motion.div>

        {/* Help Section */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white text-center shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Our expert team is here to help you find the perfect components for your build. 
            Get personalized recommendations and technical support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Contact Support
            </Link>
            <Link
              to="/build-guide"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105"
            >
              PC Build Guide
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CategoriesPage;