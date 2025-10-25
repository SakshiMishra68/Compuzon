import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../../types/product';

interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  total: number;
  count: number;
}

const initialState: CartState = {
  items: [],
  total: 0,
  count: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity?: number }>) => {
      const { product, quantity = 1 } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === product.id);
      
      if (existingItemIndex > -1) {
        state.items[existingItemIndex].quantity += quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
      
      cartSlice.caseReducers.calculateTotals(state);
      cartSlice.caseReducers.saveToStorage(state);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
      cartSlice.caseReducers.saveToStorage(state);
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        state.items = state.items.filter(item => item.id !== productId);
      } else {
        const item = state.items.find(item => item.id === productId);
        if (item) {
          item.quantity = quantity;
        }
      }
      
      cartSlice.caseReducers.calculateTotals(state);
      cartSlice.caseReducers.saveToStorage(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.count = 0;
      localStorage.removeItem('cart');
    },
    calculateTotals: (state) => {
      state.total = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      state.count = state.items.reduce((sum, item) => sum + item.quantity, 0);
    },
    saveToStorage: (state) => {
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    loadCartFromStorage: (state) => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        state.items = JSON.parse(storedCart);
        cartSlice.caseReducers.calculateTotals(state);
      }
    },
  },
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart, 
  loadCartFromStorage 
} = cartSlice.actions;

export default cartSlice.reducer;