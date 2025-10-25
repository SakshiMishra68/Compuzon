import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Product, Category, FilterOptions } from '../../types/product';
import { mockProducts } from '../../data/mockData';

interface ProductState {
  products: Product[];
  categories: Category[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  productsPerPage: number;
  searchQuery: string;
  filters: FilterOptions;
}

const initialState: ProductState = {
  products: [],
  categories: [],
  filteredProducts: [],
  loading: true,
  error: null,
  currentPage: 1,
  productsPerPage: 12,
  searchQuery: '',
  filters: {},
};

// Async thunk for loading mock data
export const loadMockData = createAsyncThunk(
  'products/loadMockData',
  async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
      
      // Extract unique categories
      const uniqueCategories = Array.from(
        new Set(action.payload.map(p => p.category.id))
      ).map(id => {
        const product = action.payload.find(p => p.category.id === id);
        return product ? product.category : { id: '', name: 'Unknown' };
      });
      
      state.categories = uniqueCategories;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setProductsPerPage: (state, action: PayloadAction<number>) => {
      state.productsPerPage = action.payload;
      state.currentPage = 1; // Reset to first page
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.currentPage = 1; // Reset to first page
      productSlice.caseReducers.applyFilters(state);
    },
    setFilters: (state, action: PayloadAction<FilterOptions>) => {
      state.filters = action.payload;
      state.currentPage = 1; // Reset to first page
      productSlice.caseReducers.applyFilters(state);
    },
    clearFilters: (state) => {
      state.filters = {};
      state.searchQuery = '';
      state.currentPage = 1;
      state.filteredProducts = state.products;
    },
    applyFilters: (state) => {
      let filtered = [...state.products];
      
      // Apply search
      if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        filtered = filtered.filter(product => 
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.category.name.toLowerCase().includes(query)
        );
      }
      
      // Apply category filter
      if (state.filters.categories && state.filters.categories.length > 0) {
        filtered = filtered.filter(product => 
          state.filters.categories!.includes(product.category.id)
        );
      }
      
      // Apply brand filter
      if (state.filters.brands && state.filters.brands.length > 0) {
        filtered = filtered.filter(product => 
          state.filters.brands!.includes(product.brand)
        );
      }
      
      // Apply price range filter
      if (state.filters.priceRange) {
        filtered = filtered.filter(product => 
          product.price >= state.filters.priceRange!.min && 
          product.price <= state.filters.priceRange!.max
        );
      }
      
      // Apply stock filter
      if (state.filters.inStock !== undefined) {
        filtered = filtered.filter(product => product.inStock === state.filters.inStock);
      }
      
      // Apply sorting
      if (state.filters.sort) {
        filtered.sort((a, b) => {
          switch (state.filters.sort) {
            case 'price-asc':
              return a.price - b.price;
            case 'price-desc':
              return b.price - a.price;
            case 'newest':
              return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
            case 'rating':
              return b.rating - a.rating;
            default:
              return 0;
          }
        });
      }
      
      state.filteredProducts = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMockData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadMockData.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(action.payload.map(p => p.category.id))
        ).map(id => {
          const product = action.payload.find(p => p.category.id === id);
          return product ? product.category : { id: '', name: 'Unknown' };
        });
        
        state.categories = uniqueCategories;
      })
      .addCase(loadMockData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load products';
      });
  },
});

export const {
  setProducts,
  setLoading,
  setError,
  setCurrentPage,
  setProductsPerPage,
  setSearchQuery,
  setFilters,
  clearFilters,
} = productSlice.actions;

export default productSlice.reducer;