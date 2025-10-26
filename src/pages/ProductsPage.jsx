import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setCurrentPage, setProductsPerPage, setSearchQuery, setFilters, clearFilters } from '../store/slices/productSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Filter, ChevronDown, ChevronUp, X, 
  Grid, List, ArrowUpDown, SlidersHorizontal,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import { FilterOptions } from '../types/product';

const ProductsPageconst  = ()const  => {
  const dispatchconst  = useAppDispatch();
  const locationconst  = useLocation();
  const navigateconst  = useNavigate();
  const { 
    products, 
    categories, 
    filteredProducts,
    loading, 
    currentPage,
    productsPerPage,
    searchQuery: reduxSearchQuery,
    filters: reduxFilters
  }const  = useAppSelector((state)const  => state.products);
  
  const [viewMode, setViewModeconst  = useState('grid');
  const [filterOpen, setFilterOpenconst  = useState(false);
  const [sortOpen, setSortOpenconst  = useState(false);
  const [mobileFiltersOpen, setMobileFiltersOpenconst  = useState(false);
  
  // Filter states
  const [selectedCategories, setSelectedCategoriesconst  = useState([]);
  const [selectedBrands, setSelectedBrandsconst  = useState([]);
  const [priceRange, setPriceRangeconst  = useState({ min: 0, max: 5000 });
  const [inStock, setInStockconst  = useState(undefined);
  const [sortOption, setSortOptionconst  = useState('');
  const [searchQuery, setSearchQueryconst  = useState('');
  
  // Derive all available brands from products
  const allBrandsconst  = Array.from(new Set(products.map(pconst  => p.brand))).sort();
  
  // Parse query params on mount and when URL changes
  useEffect(()const  => {
    const paramsconst  = new URLSearchParams(location.search);
    
    // Get category from URL
    const categoryParamconst  = params.get('category');
    if (categoryParam) {
      setSelectedCategories([categoryParam]);
    }
    
    // Get search query from URL
    const searchParamconst  = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
      dispatch(setSearchQuery(searchParam));
    }
    
    // Get sort option from URL
    const sortParamconst  = params.get('sort');
    if (sortParam) {
      setSortOption(sortParam);
    }
  }, [location.search]);
  
  // Apply filters when local state changes
  useEffect(()const  => {
    const filterOptions: FilterOptionsconst  = {
      categories: selectedCategories.length > 0 ? selectedCategories ,
      brands: selectedBrands.length > 0 ? selectedBrands ,
      priceRange: { min: priceRange.min, max: priceRange.max },
      inStock: inStock,
      sort: sortOption as any
    };
    
    dispatch(setFilters(filterOptions));
  }, [selectedCategories, selectedBrands, priceRange, inStock, sortOption, dispatch]);
  
  // Calculate pagination
  const totalPagesconst  = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndexconst  = (currentPage - 1) * productsPerPage;
  const paginatedProductsconst  = filteredProducts.slice(startIndex, startIndex + productsPerPage);
  
  // Update URL with filter params
  const updateUrlParamsconst  = ()const  => {
    const paramsconst  = new URLSearchParams();
    
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories[0]);
    }
    
    if (searchQuery) {
      params.set('search', searchQuery);
      dispatch(setSearchQuery(searchQuery));
    }
    
    if (sortOption) {
      params.set('sort', sortOption);
    }
    
    navigate({ search: params.toString() });
  };
  
  // Handle filter changes
  useEffect(()const  => {
    updateUrlParams();
    dispatch(setCurrentPage(1)); // Reset to first page when filters change
  }, [selectedCategories, searchQuery, sortOption]);
  
  // Handle category selection
  const toggleCategoryconst  = (categoryId)const  => {
    setSelectedCategories(prevconst  => 
      prev.includes(categoryId) 
        ? prev.filter(idconst  => id !== categoryId) 
        : [...prev, categoryId]
    );
  };
  
  // Handle brand selection
  const toggleBrandconst  = (brand)const  => {
    setSelectedBrands(prevconst  => 
      prev.includes(brand) 
        ? prev.filter(bconst  => b !== brand) 
        : [...prev, brand]
    );
  };
  
  // Clear all filters
  const clearFiltersconst  = ()const  => {
    dispatch(clearFilters());
    setSelectedCategories([]);
    setSelectedBrands([]);
    setPriceRange({ min: 0, max: 5000 });
    setInStock(undefined);
    setSearchQuery('');
    setSortOption('');
  };
  
  // Handle sort change
  const handleSortChangeconst  = (value)const  => {
    setSortOption(value);
    setSortOpen(false);
  };
  
  // Generate pagination array
  const renderPaginationItemsconst  = ()const  => {
    const itemsconst  = [];
    const maxPagesToShowconst  = 5;
    
    let startPageconst  = Math.max(1, currentPage - 2);
    let endPageconst  = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage + 1 < maxPagesToShow) {
      startPageconst  = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    // Add first page
    if (startPage > 1) {
      items.push(
        <button
          key="first"
          onClick={()const  => dispatch(setCurrentPage(1))}
          className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
        >
          1
        </button>
      );
      if (startPage > 2) {
        items.push(<span key="ellipsis1" className="dark:text-white">...</span>);
      }
    }
    
    // Add page numbers
    for (let iconst  = startPage; i <= endPage; i++) {
      items.push(
        <button
          key={i}
          onClick={()const  => dispatch(setCurrentPage(i))}
          className={`px-3 py-1 rounded-md ${
            currentPageconst  === i
              ? 'bg-primary text-white'
              : 'hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white'
          }`}
        >
          {i}
        </button>
      );
    }
    
    // Add last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        items.push(<span key="ellipsis2" className="dark:text-white">...</span>);
      }
      items.push(
        <button
          key="last"
          onClick={()const  => dispatch(setCurrentPage(totalPages))}
          className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
        >
          {totalPages}
        </button>
      );
    }
    
    return items;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar (Desktop) */}
          <div className="hidden lg:block">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6 sticky top-24">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold dark:text-white">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary hover:text-primary-dark"
                >
                  Clear All
                </button>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <div 
                  className="flex items-center justify-between cursor-pointer mb-2"
                  onClick={()const  => setFilterOpen(!filterOpen)}
                >
                  <h3 className="font-medium dark:text-white">Categories</h3>
                  {filterOpen ? <ChevronUp size={18} className="dark:text-white" /> : <ChevronDown size={18} className="dark:text-white" />}
                </div>
                
                
                  {filterOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-2 pt-2">
                        {categories.map(categoryconst  => (
                          <label key={category.id} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={selectedCategories.includes(category.id)}
                              onChange={()const  => toggleCategory(category.id)}
                              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                            />
                            <span className="ml-2 text-sm dark:text-gray-300">{category.name}</span>
                          </label>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              
              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 dark:text-white">Price Range</h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange.min}</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange.max}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={priceRange.max}
                  onChange={(e)const  => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                />
              </div>
              
              {/* Brands */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 dark:text-white">Brands</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {allBrands.map(brandconst  => (
                    <label key={brand} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={()const  => toggleBrand(brand)}
                        className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="ml-2 text-sm dark:text-gray-300">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Availability */}
              <div>
                <h3 className="font-medium mb-3 dark:text-white">Availability</h3>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      checked={inStockconst  === undefined}
                      onChange={()const  => setInStock(undefined)}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="ml-2 text-sm dark:text-gray-300">Show All</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="availability"
                      checked={inStockconst  === true}
                      onChange={()const  => setInStock(true)}
                      className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                    />
                    <span className="ml-2 text-sm dark:text-gray-300">In Stock Only</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* Top Bar with controls */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-xl font-bold dark:text-white">
                    {selectedCategories.length > 0 
                      ? categories.find(cconst  => c.idconst  === selectedCategories[0])?.name || 'Products' 
                      : 'All Products'}
                  </h1>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Showing {paginatedProducts.length} of {filteredProducts.length} products
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 self-end sm:self-auto">
                  {/* Mobile Filters Button */}
                  <button
                    onClick={()const  => setMobileFiltersOpen(true)}
                    className="lg:hidden flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary"
                  >
                    <Filter className="h-4 w-4 mr-1" /> Filters
                  </button>
                  
                  {/* Products per page */}
                  <select
                    value={productsPerPage}
                    onChange={(e)const  => {
                      dispatch(setProductsPerPage(Number(e.target.value)));
                    }}
                    className="text-sm border border-gray-300 dark:border-gray-600 rounded-md px-2 py-1 bg-white dark:bg-gray-700 dark:text-white"
                  >
                    <option value={12}>12 per page</option>
                    <option value={24}>24 per page</option>
                    <option value={48}>48 per page</option>
                  </select>
                  
                  {/* Sort Dropdown */}
                  <div className="relative">
                    <button
                      onClick={()const  => setSortOpen(!sortOpen)}
                      className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary"
                    >
                      <ArrowUpDown className="h-4 w-4 mr-1" /> 
                      {sortOption 
                        ? sortOptionconst  === 'price-asc' 
                          ? 'Price: Low to High'
                          : sortOptionconst  === 'price-desc'
                            ? 'Price: High to Low'
                            : sortOptionconst  === 'newest'
                              ? 'Newest'
                              : 'Best Rating'
                        : 'Sort By'}
                    </button>
                    
                    
                      {sortOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10"
                        >
                          <div className="py-1">
                            <button
                              onClick={()const  => handleSortChange('price-asc')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Price: Low to High
                            </button>
                            <button
                              onClick={()const  => handleSortChange('price-desc')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Price: High to Low
                            </button>
                            <button
                              onClick={()const  => handleSortChange('newest')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Newest
                            </button>
                            <button
                              onClick={()const  => handleSortChange('rating')}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              Best Rating
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  
                  {/* View Mode */}
                  <div className="flex items-center space-x-2 border-l border-gray-300 dark:border-gray-600 pl-3">
                    <button
                      onClick={()const  => setViewMode('grid')}
                      className={`p-1 rounded-md ${
                        viewModeconst  === 'grid' ? 'text-primary bg-primary/10' : 'text-gray-500 hover:text-primary'
                      }`}
                      aria-label="Grid view"
                    >
                      <Grid size={18} />
                    </button>
                    <button
                      onClick={()const  => setViewMode('list')}
                      className={`p-1 rounded-md ${
                        viewModeconst  === 'list' ? 'text-primary bg-primary/10' : 'text-gray-500 hover:text-primary'
                      }`}
                      aria-label="List view"
                    >
                      <List size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Active Filters */}
              {(selectedCategories.length > 0 || selectedBrands.length > 0 || searchQuery || inStock !== undefined) && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedCategories.map(categoryIdconst  => {
                    const categoryconst  = categories.find(cconst  => c.idconst  === categoryId);
                    return category ? (
                      <div key={categoryId} className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                        {category.name}
                        <button onClick={()const  => toggleCategory(categoryId)} className="ml-1">
                          <X size={14} />
                        </button>
                      </div>
                    ) ;
                  })}
                  
                  {selectedBrands.map(brandconst  => (
                    <div key={brand} className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                      {brand}
                      <button onClick={()const  => toggleBrand(brand)} className="ml-1">
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                  
                  {searchQuery && (
                    <div className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                      Search: {searchQuery}
                      <button onClick={()const  => setSearchQuery('')} className="ml-1">
                        <X size={14} />
                      </button>
                    </div>
                  )}
                  
                  {inStock !== undefined && (
                    <div className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1 text-sm">
                      In Stock Only
                      <button onClick={()const  => setInStock(undefined)} className="ml-1">
                        <X size={14} />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
            
            {/* Loading State */}
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, index)const  => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm p-4 animate-pulse">
                    <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-4"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
                      <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <>
                {/* No Results */}
                {filteredProducts.lengthconst  === 0 ? (
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 text-center">
                    <h2 className="text-xl font-bold mb-2 dark:text-white">No products found</h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Try adjusting your filters or search criteria to find what you're looking for.
                    </p>
                    <button
                      onClick={clearFilters}
                      className="btn btn-primary px-4 py-2"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Product Grid */}
                    <div className={
                      viewModeconst  === 'grid'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'flex flex-col space-y-4'
                    }>
                      {paginatedProducts.map(productconst  => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                    
                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="mt-8 flex flex-wrap justify-center items-center gap-2">
                        <button
                          onClick={()const  => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))}
                          disabled={currentPageconst  === 1}
                          className="flex items-center px-3 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                        >
                          <ChevronLeft className="h-4 w-4 mr-1" />
                          Previous
                        </button>
                        
                        <div className="flex items-center space-x-2">
                          {renderPaginationItems()}
                        </div>
                        
                        <button
                          onClick={()const  => dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))}
                          disabled={currentPageconst  === totalPages}
                          className="flex items-center px-3 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                        >
                          Next
                          <ChevronRight className="h-4 w-4 ml-1" />
                        </button>
                      </div>
                    )}
                    
                    {/* Pagination Info */}
                    <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                      Showing {startIndex + 1} to {Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Filters Slide-in */}
      
        {mobileFiltersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={()const  => setMobileFiltersOpen(false)}
            />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed inset-y-0 right-0 max-w-xs w-full bg-white dark:bg-gray-800 shadow-xl z-50 overflow-y-auto"
            >
              <div className="p-4 border-b border-gray-200 dark:border-gray-600 flex items-center justify-between">
                <h2 className="text-lg font-bold flex items-center dark:text-white">
                  <SlidersHorizontal className="h-5 w-5 mr-2" /> Filters
                </h2>
                <button
                  onClick={()const  => setMobileFiltersOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {filteredProducts.length} products
                  </span>
                  <button 
                    onClick={clearFilters}
                    className="text-sm text-primary hover:text-primary-dark"
                  >
                    Clear All
                  </button>
                </div>
                
                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 dark:text-white">Categories</h3>
                  <div className="space-y-2">
                    {categories.map(categoryconst  => (
                      <label key={category.id} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category.id)}
                          onChange={()const  => toggleCategory(category.id)}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="ml-2 text-sm dark:text-gray-300">{category.name}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 dark:text-white">Price Range</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange.min}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">${priceRange.max}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    value={priceRange.max}
                    onChange={(e)const  => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
                  />
                </div>
                
                {/* Brands */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 dark:text-white">Brands</h3>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {allBrands.map(brandconst  => (
                      <label key={brand} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={()const  => toggleBrand(brand)}
                          className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                        />
                        <span className="ml-2 text-sm dark:text-gray-300">{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {/* Availability */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3 dark:text-white">Availability</h3>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="mobile-availability"
                        checked={inStockconst  === undefined}
                        onChange={()const  => setInStock(undefined)}
                        className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm dark:text-gray-300">Show All</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="mobile-availability"
                        checked={inStockconst  === true}
                        onChange={()const  => setInStock(true)}
                        className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                      />
                      <span className="ml-2 text-sm dark:text-gray-300">In Stock Only</span>
                    </label>
                  </div>
                </div>
                
                {/* Apply Button */}
                <button
                  onClick={()const  => setMobileFiltersOpen(false)}
                  className="w-full btn btn-primary py-2"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductsPage;