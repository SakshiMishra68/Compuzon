import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShoppingCart, User, Menu, X, 
  ChevronDown, Heart, LogIn, LayoutDashboard, 
  Monitor, Cpu, HardDrive, Keyboard
} from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { count: cartCount } = useAppSelector((state) => state.cart);
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const isAdmin = user?.role === 'admin';
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to search results
    if (searchQuery.trim()) {
      window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  const categories = [
    { name: 'Processors', icon: <Cpu size={18} /> },
    { name: 'Graphics Cards', icon: <Monitor size={18} /> },
    { name: 'Storage', icon: <HardDrive size={18} /> },
    { name: 'Peripherals', icon: <Keyboard size={18} /> },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="relative flex items-center flex-shrink-0 mr-6"
          >
            <span className="text-primary font-bold text-2xl">Compuzon</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative">
              <button 
                className="flex items-center font-medium hover:text-primary transition-colors"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    onMouseLeave={() => setCategoriesOpen(false)}
                  >
                    <div className="py-1">
                      {categories.map((category, index) => (
                        <Link
                          key={index}
                          to={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
                          className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          <span className="mr-3 text-gray-500 group-hover:text-primary transition-colors">
                            {category.icon}
                          </span>
                          {category.name}
                        </Link>
                      ))}
                      <div className="border-t border-gray-100 my-1"></div>
                      <Link
                        to="/products"
                        className="block px-4 py-2 text-sm text-primary font-medium hover:bg-gray-100"
                      >
                        View All Categories
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link to="/products" className="font-medium hover:text-primary transition-colors">
              Products
            </Link>
            
            <Link to="/deals" className="font-medium hover:text-primary transition-colors">
              Deals
            </Link>
          </nav>

          {/* Search, Cart and Account */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </form>
            </div>
            
            {/* Cart */}
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-primary rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Account */}
            <div className="relative">
              {isAuthenticated ? (
                <div className="hidden md:flex items-center cursor-pointer group">
                  <span className="mr-2 font-medium">{user?.name.split(' ')[0]}</span>
                  <User className="h-6 w-6 text-gray-700 group-hover:text-primary transition-colors" />
                  
                  <div className="absolute right-0 mt-36 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-300">
                    <Link to="/account" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <User className="mr-2 h-4 w-4" /> My Account
                    </Link>
                    <Link to="/wishlist" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      <Heart className="mr-2 h-4 w-4" /> Wishlist
                    </Link>
                    {isAdmin && (
                      <Link to="/admin" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        <LayoutDashboard className="mr-2 h-4 w-4" /> Admin Dashboard
                      </Link>
                    )}
                    <div className="border-t border-gray-100 my-1"></div>
                    <button 
                      onClick={() => dispatch(logout())}
                      className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogIn className="mr-2 h-4 w-4" /> Log Out
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className="hidden md:flex items-center">
                  <span className="mr-2 font-medium">Log In</span>
                  <User className="h-6 w-6 text-gray-700 hover:text-primary transition-colors" />
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search (shown below header) */}
        <div className="mt-4 md:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </form>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-gray-200 bg-white"
          >
            <div className="container py-4 space-y-3">
              <Link to="/" className="block py-2 font-medium">
                Home
              </Link>
              <button 
                className="flex items-center justify-between w-full py-2 font-medium"
                onClick={() => setCategoriesOpen(!categoriesOpen)}
              >
                <span>Categories</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${categoriesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {categoriesOpen && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="pl-4 space-y-2"
                  >
                    {categories.map((category, index) => (
                      <Link
                        key={index}
                        to={`/products?category=${category.name.toLowerCase().replace(' ', '-')}`}
                        className="flex items-center py-2"
                      >
                        <span className="mr-3 text-gray-500">
                          {category.icon}
                        </span>
                        {category.name}
                      </Link>
                    ))}
                    <Link
                      to="/products"
                      className="block py-2 text-primary font-medium"
                    >
                      View All Categories
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              
              <Link to="/products" className="block py-2 font-medium">
                Products
              </Link>
              <Link to="/deals" className="block py-2 font-medium">
                Deals
              </Link>
              
              <div className="border-t border-gray-200 pt-3">
                {isAuthenticated ? (
                  <>
                    <Link to="/account" className="flex items-center py-2">
                      <User className="mr-3 h-5 w-5 text-gray-500" />
                      My Account
                    </Link>
                    <Link to="/wishlist" className="flex items-center py-2">
                      <Heart className="mr-3 h-5 w-5 text-gray-500" />
                      Wishlist
                    </Link>
                    {isAdmin && (
                      <Link to="/admin" className="flex items-center py-2">
                        <LayoutDashboard className="mr-3 h-5 w-5 text-gray-500" />
                        Admin Dashboard
                      </Link>
                    )}
                    <button 
                      onClick={() => dispatch(logout())}
                      className="flex w-full items-center py-2 text-red-600"
                    >
                      <LogIn className="mr-3 h-5 w-5" />
                      Log Out
                    </button>
                  </>
                ) : (
                  <Link to="/login" className="flex items-center py-2">
                    <LogIn className="mr-3 h-5 w-5 text-gray-500" />
                    Log In / Register
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;