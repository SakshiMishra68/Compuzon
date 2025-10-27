import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { store } from './store';

// Components
import AppInitializer from './components/AppInitializer';

// Layout components
import Layout from './components/layout/Layout';
import AdminLayout from './components/layout/AdminLayout';

// Page components
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
import AccountPage from './pages/AccountPage';
import WishlistPage from './pages/WishlistPage';
import DealsPage from './pages/DealsPage';

// Admin pages
import AdminDashboard from './pages/admin/Dashboard';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminCustomers from './pages/admin/Customers';
import AdminAnalytics from './pages/admin/Analytics';
import AdminTransactions from './pages/admin/Transactions';
import AdminSettings from './pages/admin/Settings';
import AdminSupport from './pages/admin/Support';
import AddProduct from './pages/admin/Products/AddProduct';
import OrderDetails from './pages/admin/Orders/OrderDetails';
import Categories from './pages/admin/Categories';
import ProductTypes from './pages/admin/ProductTypes';
import Discounts from './pages/admin/Discounts';

// Protected route
import ProtectedRoute from './components/auth/ProtectedRoute';

function App(() {
  return (
    <Provider store={store}>
      <AppInitializer>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="products" element={<ProductsPage />} />
              
              <Route path="categories" element={<CategoriesPage />} />
              <Route path="products/:id" element={<ProductDetailPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="checkout" element={<CheckoutPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="wishlist" element={<WishlistPage />} />
              <Route path="deals" element={<DealsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
            
            {/* Admin routes */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<AdminProducts />} />
              <Route path="products/add" element={<AddProduct />} />
              <Route path="orders" element={<AdminOrders />} />
              <Route path="orders/:id" element={<OrderDetails />} />
              <Route path="customers" element={<AdminCustomers />} />
              <Route path="analytics" element={<AdminAnalytics />} />
              <Route path="transactions" element={<AdminTransactions />} />
              <Route path="settings" element={<AdminSettings />} />
              <Route path="support" element={<AdminSupport />} />
              <Route path="categories" element={<Categories />} />
              <Route path="product-types" element={<ProductTypes />} />
              <Route path="discounts" element={<Discounts />} />
            </Route>
          </Routes>
        </Router>
      </AppInitializer>
    </Provider>
  ();
}

export default App;