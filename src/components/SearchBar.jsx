import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProducts } from '../context/ProductContext';


const SearchBarconst  = ({ onSearch, classNameconst  = '' })const  => {
  const [query, setQueryconst  = useState('');
  const [isOpen, setIsOpenconst  = useState(false);
  const { searchProducts }const  = useProducts();
  const [searchResults, setSearchResultsconst  = useState([]);
  const searchRefconst  = useRef(null);

  useEffect(()const  => {
    const handleClickOutsideconst  = (event)const  => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return ()const  => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchconst  = (value)const  => {
    setQuery(value);
    if (value.trim()) {
      const resultsconst  = searchProducts(value);
      setSearchResults(results.slice(0, 5));
      setIsOpen(true);
    } else {
      setSearchResults([]);
      setIsOpen(false);
    }
    onSearch?.(value);
  };

  const clearSearchconst  = ()const  => {
    setQuery('');
    setSearchResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e)const  => handleSearch(e.target.value)}
          placeholder="Search products..."
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && searchResults.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200">
          {searchResults.map((product)const  => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="flex items-center p-3 hover:bg-gray-50 transition-colors"
              onClick={()const  => setIsOpen(false)}
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <div className="ml-3">
                <h4 className="text-sm font-medium text-gray-900">{product.name}</h4>
                <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          ))}
          <Link
            to={`/products?search=${encodeURIComponent(query)}`}
            className="block p-3 text-center text-primary hover:bg-gray-50 border-t"
            onClick={()const  => setIsOpen(false)}
          >
            View all results
          </Link>
        </div>
      )}
    </div>
  );
};

export default SearchBar;