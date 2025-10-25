import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store/hooks';
import { addToCart } from '../store/slices/cartSlice';

const WishlistPage: React.FC = () => {
  // Mock wishlist data
  const wishlistItems = [
    {
      id: '1',
      name: 'NVIDIA GeForce RTX 4090 24GB',
      price: 1599.99,
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      inStock: true
    },
    {
      id: '2',
      name: 'AMD Ryzen 9 7950X',
      price: 699.99,
      image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg',
      inStock: true
    },
    // Add more items as needed
  ];

  const dispatch = useAppDispatch();

  const handleAddToCart = (item: any) => {
    dispatch(addToCart({ product: item }));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8">
        <Heart className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your wishlist is empty</h2>
        <p className="text-gray-500 mb-6">Save items you'd like to buy later!</p>
        <Link 
          to="/products" 
          className="btn btn-primary flex items-center"
        >
          Browse Products <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-12">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <button
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                aria-label="Remove from wishlist"
              >
                <Trash2 className="h-5 w-5 text-red-500" />
              </button>
            </div>
            
            <div className="p-4">
              <Link 
                to={`/products/${item.id}`}
                className="text-lg font-medium text-gray-900 hover:text-primary transition-colors line-clamp-2 h-14 mb-2"
              >
                {item.name}
              </Link>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
                <span className={`text-sm ${
                  item.inStock ? 'text-green-600' : 'text-red-600'
                }`}>
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
              
              <button
                onClick={() => handleAddToCart(item)}
                disabled={!item.inStock}
                className={`w-full btn ${
                  item.inStock
                    ? 'btn-primary'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                } flex items-center justify-center`}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;