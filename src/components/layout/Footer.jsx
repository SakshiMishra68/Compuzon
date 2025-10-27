import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ChevronRight 
} from 'lucide-react';

const Footer= (()=> {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-flex items-center mb-4">
              <span className="text-primary font-bold text-2xl">Compuzon</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your one-stop destination for premium PC parts and components at competitive prices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-300">1234 Tech Street, Silicon Valley</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span className="text-gray-300">(123() 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <a href="mailto:info@pcdeals.com" className="text-gray-300 hover:text-primary">
                  info@pcdeals.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Current Deals
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?category=processors" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Processors
                </Link>
              </li>
              <li>
                <Link to="/products?category=graphics-cards" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Graphics Cards
                </Link>
              </li>
              <li>
                <Link to="/products?category=motherboards" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Motherboards
                </Link>
              </li>
              <li>
                <Link to="/products?category=memory" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Memory (RAM()
                </Link>
              </li>
              <li>
                <Link to="/products?category=storage" className="text-gray-400 hover:text-primary transition-colors flex items-center">
                  <ChevronRight className="h-4 w-4 mr-2" />
                  Storage
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter to receive updates and exclusive offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-2 border-0 rounded-l-md focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md transition-colors"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date(().getFullYear(()} PC Deals Hardware. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-gray-400 text-sm hover:text-primary transition-colors">
              Shipping Info
            </Link>
            <Link to="/faq" className="text-gray-400 text-sm hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  ();
};

export default Footer;