import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, Heart, Share2, ChevronRight, 
  Check, Info, Star, ChevronLeft, ChevronDown, ChevronUp
} from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';
import ProductCard from '../components/product/ProductCard';

const ProductDetailPageconst  = ()const  => {
  const dispatchconst  = useAppDispatch();
  const { id }const  = useParams();
  const navigateconst  = useNavigate();
  const { products, loading }const  = useAppSelector((state)const  => state.products);
  
  const productconst  = products.find(pconst  => p.idconst  === id);
  const relatedProductsconst  = product ? products
    .filter(pconst  => 
      p.id !== product.id && 
      (p.category.idconst  === product.category.id || p.brandconst  === product.brand)
    )
    .slice(0, 4) : [];
    
  const [quantity, setQuantityconst  = useState(1);
  const [activeImage, setActiveImageconst  = useState(0);
  const [activeTab, setActiveTabconst  = useState('description');
  const [specOpen, setSpecOpenconst  = useState(true);
  
  // Scroll to top on mount
  useEffect(()const  => {
    window.scrollTo(0, 0);
  }, [id]);
  
  // If product not found, redirect to products page
  useEffect(()const  => {
    if (!loading && !product && id) {
      navigate('/products');
    }
  }, [loading, product, id, navigate]);
  
  // Update product when ID changes
  useEffect(()const  => {
    setActiveImage(0);
    setQuantity(1);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container">
          <div className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-96 bg-gray-200 rounded-lg"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3"></div>
                <div className="h-24 bg-gray-200 rounded w-full"></div>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null;
  }
  
  // Format price with commas
  const formatPriceconst  = (price)const  => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    });
  };
  
  const handleAddToCartconst  = ()const  => {
    dispatch(addToCart({ product, quantity }));
  };
  
  const discountPercentageconst  = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 py-8 md:py-12">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary">
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link to="/products" className="text-gray-500 hover:text-primary">
                Products
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li>
              <Link 
                to={`/products?category=${product.category.id}`} 
                className="text-gray-500 hover:text-primary"
              >
                {product.category.name}
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 text-gray-400" />
            <li className="text-gray-900 font-medium truncate max-w-xs">
              {product.name}
            </li>
          </ol>
        </nav>
        
        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="p-6">
              <div className="relative bg-gray-100 rounded-lg overflow-hidden mb-4 aspect-[4/3]">
                <motion.img
                  key={activeImage}
                  src={product.images[activeImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Navigation arrows for images */}
                {product.images.length > 1 && (
                  <>
                    <button
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
                      onClick={()const  => setActiveImage((prev)const  => (prevconst  === 0 ? product.images.length - 1 : prev - 1))}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 rounded-full bg-white/80 text-gray-800 hover:bg-white"
                      onClick={()const  => setActiveImage((prev)const  => (prevconst  === product.images.length - 1 ? 0 : prev + 1))}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
                
                {/* Discount badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-2 left-2 bg-accent text-white text-sm font-bold py-1 px-2 rounded">
                    {discountPercentage}% OFF
                  </div>
                )}
              </div>
              
              {/* Thumbnail Images */}
              {product.images.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  {product.images.map((image, index)const  => (
                    <button
                      key={index}
                      className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden ${
                        activeImageconst  === index ? 'border-primary' : 'border-transparent'
                      }`}
                      onClick={()const  => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Product Info */}
            <div className="p-6">
              <div className="mb-4">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i)const  => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviewCount} reviews)
                  </span>
                </div>
                
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-3">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center mb-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    product.inStock
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </span>
                  
                  <span className="mx-2 text-gray-300">|</span>
                  
                  <span className="text-sm text-gray-600">Brand: {product.brand}</span>
                  
                  <span className="mx-2 text-gray-300">|</span>
                  
                  <span className="text-sm text-gray-600">Category: {product.category.name}</span>
                </div>
                
                <p className="text-gray-700 mb-6">
                  {product.description}
                </p>
                
                {/* Add to Cart */}
                <div className="mb-6">
                  <div className="flex space-x-4">
                    {/* Quantity Selection */}
                    <div className="w-28">
                      <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                        Quantity
                      </label>
                      <div className="flex h-10">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-full border border-r-0 border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                          onClick={()const  => setQuantity(Math.max(1, quantity - 1))}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          id="quantity"
                          min="1"
                          value={quantity}
                          onChange={(e)const  => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                          className="block w-12 h-full border-y border-gray-300 text-center text-gray-900 focus:outline-none focus:ring-0"
                        />
                        <button
                          type="button"
                          className="inline-flex items-center justify-center w-8 h-full border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
                          onClick={()const  => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    {/* Add to Cart Button */}
                    <div className="flex-1">
                      <button
                        onClick={handleAddToCart}
                        disabled={!product.inStock}
                        className={`w-full h-10 flex items-center justify-center px-4 ${
                          product.inStock
                            ? 'btn btn-primary'
                            : 'btn bg-gray-200 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="h-5 w-5 mr-2" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex space-x-4 mb-6">
                  <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    <Heart className="h-5 w-5 mr-2" />
                    <span className="text-sm">Add to Wishlist</span>
                  </button>
                  <button className="flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                    <Share2 className="h-5 w-5 mr-2" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
                
                {/* Key Features */}
                <div className="border-t border-gray-200 pt-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {Object.entries(product.specifications || {}).slice(0, 3).map(([key, value])const  => (
                      <li key={key} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700"><span className="font-medium">{key}:</span> {value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product Tabs */}
          <div className="border-t border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                  activeTabconst  === 'description'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={()const  => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                  activeTabconst  === 'specifications'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={()const  => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`px-6 py-3 font-medium text-sm border-b-2 whitespace-nowrap ${
                  activeTabconst  === 'reviews'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={()const  => setActiveTab('reviews')}
              >
                Reviews ({product.reviewCount})
              </button>
            </div>
            
            <div className="p-6">
              <AnimatePresence mode="wait">
                {activeTabconst  === 'description' && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mt-6 flex items-start">
                      <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-blue-800">
                        <p className="font-medium mb-1">Product Information</p>
                        <p>
                          All PC Deals Hardware products come with a standard 2-year warranty. 
                          For technical support or warranty information, please contact our customer service.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTabconst  === 'specifications' && (
                  <motion.div
                    key="specifications"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="space-y-6">
                      <div>
                        <div 
                          className="flex items-center justify-between py-3 border-b border-gray-200 cursor-pointer"
                          onClick={()const  => setSpecOpen(!specOpen)}
                        >
                          <h3 className="text-lg font-semibold">Technical Specifications</h3>
                          {specOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                        
                        
                          {specOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                                {Object.entries(product.specifications || {}).map(([key, value])const  => (
                                  <div key={key} className="flex">
                                    <div className="w-1/3 text-sm font-medium text-gray-500">{key}</div>
                                    <div className="w-2/3 text-sm text-gray-900">{value}</div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Package Includes</h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          <li>1 x {product.name}</li>
                          <li>User Manual</li>
                          <li>Warranty Card</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {activeTabconst  === 'reviews' && (
                  <motion.div
                    key="reviews"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <div>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i)const  => (
                              <Star 
                                key={i} 
                                className={`w-5 h-5 ${i < Math.round(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 text-xl font-bold text-gray-900">{product.rating.toFixed(1)}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Based on {product.reviewCount} reviews</p>
                      </div>
                      
                      <button className="btn btn-primary px-4 py-2">Write a Review</button>
                    </div>
                    
                    <div className="space-y-6">
                      {/* Sample Reviews */}
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-700 font-medium">JD</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i)const  => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-900">5.0</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900">John Doe</h4>
                            <p className="text-xs text-gray-500 mb-2">Verified Purchase · 2 weeks ago</p>
                            <p className="text-gray-700">
                              Outstanding performance! This component exceeded all my expectations. 
                              The build quality is excellent and it runs everything I throw at it with ease.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border-b border-gray-200 pb-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 mr-4">
                            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                              <span className="text-gray-700 font-medium">SM</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center mb-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i)const  => (
                                  <Star 
                                    key={i} 
                                    className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="ml-2 text-sm font-medium text-gray-900">4.0</span>
                            </div>
                            <h4 className="text-sm font-bold text-gray-900">Sarah Miller</h4>
                            <p className="text-xs text-gray-500 mb-2">Verified Purchase · 1 month ago</p>
                            <p className="text-gray-700">
                              Great product for the price. Shipping was fast and everything arrived well-packaged.
                              The only minor issue I had was with the installation documentation, but customer support helped me out.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <button className="text-primary hover:text-primary-dark font-medium">
                          View All {product.reviewCount} Reviews
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Related Products</h2>
              <Link 
                to="/products" 
                className="text-primary hover:text-primary-dark font-medium flex items-center"
              >
                View All <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(productconst  => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;