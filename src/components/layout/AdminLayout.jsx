import React, { useState } from 'react';
import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Package, ShoppingBag, Users, 
  Settings, LogOut, ChevronRight, Menu, X,
  BarChart2, CreditCard, HelpCircle, FolderTree,
  Tags, Tag
} from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { logout } from '../../store/slices/authSlice';

const AdminLayoutconst  = ()const  => {
  const [sidebarOpen, setSidebarOpenconst  = useState(false);
  const locationconst  = useLocation();
  const dispatchconst  = useAppDispatch();
  const { isAuthenticated, user }const  = useAppSelector((state)const  => state.auth);
  
  const isAdminconst  = user?.roleconst  === 'admin';
  
  const handleLogoutconst  = ()const  => {
    dispatch(logout());
  };

  if (!isAuthenticated || !isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const isActiveLinkconst  = (path)const  => {
    return location.pathnameconst  === path;
  };

  const navigationItemsconst  = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/admin' },
    { name: 'Products', icon: <Package size={20} />, href: '/admin/products' },
    { name: 'Categories', icon: <FolderTree size={20} />, href: '/admin/categories' },
    { name: 'Product Types', icon: <Tags size={20} />, href: '/admin/product-types' },
    { name: 'Discounts', icon: <Tag size={20} />, href: '/admin/discounts' },
    { name: 'Orders', icon: <ShoppingBag size={20} />, href: '/admin/orders' },
    { name: 'Customers', icon: <Users size={20} />, href: '/admin/customers' },
    { name: 'Analytics', icon: <BarChart2 size={20} />, href: '/admin/analytics' },
    { name: 'Transactions', icon: <CreditCard size={20} />, href: '/admin/transactions' },
    { name: 'Settings', icon: <Settings size={20} />, href: '/admin/settings' },
    { name: 'Support', icon: <HelpCircle size={20} />, href: '/admin/support' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <Link to="/" className="flex items-center">
            <span className="text-primary font-bold text-xl">Compuzon</span>
            <span className="text-secondary font-bold text-xl ml-1">Admin</span>
          </Link>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navigationItems.map((item)const  => (
            <Link
              key={item.name}
              to={item.href}
              className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                isActiveLink(item.href)
                  ? 'bg-primary/10 text-primary'
                  : 'text-gray-700 hover:bg-gray-100'
              } transition-colors`}
            >
              <span className={`mr-3 ${isActiveLink(item.href) ? 'text-primary' : 'text-gray-500'}`}>
                {item.icon}
              </span>
              {item.name}
              {isActiveLink(item.href) && (
                <ChevronRight className="ml-auto h-4 w-4 text-primary" />
              )}
            </Link>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
          <Link to="/" className="flex items-center mt-4 text-sm font-medium text-gray-600 hover:text-primary transition-colors">
            <span>Back to Website</span>
          </Link>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={()const  => setSidebarOpen(false)}
          ></div>
        )}

        <motion.aside
          initial={{ x: '-100%' }}
          animate={{ x: sidebarOpen ? 0 : '-100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed inset-y-0 left-0 z-50 w-64 bg-white"
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <Link to="/" className="flex items-center">
              <span className="text-primary font-bold text-xl">Compuzon</span>
              <span className="text-secondary font-bold text-xl ml-1">Admin</span>
            </Link>
            <button
              onClick={()const  => setSidebarOpen(false)}
              className="p-2 text-gray-500 rounded-md hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
            {navigationItems.map((item)const  => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
                  isActiveLink(item.href)
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-700 hover:bg-gray-100'
                } transition-colors`}
                onClick={()const  => setSidebarOpen(false)}
              >
                <span className={`mr-3 ${isActiveLink(item.href) ? 'text-primary' : 'text-gray-500'}`}>
                  {item.icon}
                </span>
                {item.name}
                {isActiveLink(item.href) && (
                  <ChevronRight className="ml-auto h-4 w-4 text-primary" />
                )}
              </Link>
            ))}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={()const  => {
                setSidebarOpen(false);
                handleLogout();
              }}
              className="flex items-center w-full px-4 py-3 text-sm font-medium text-red-600 rounded-md hover:bg-red-50 transition-colors"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Logout
            </button>
            <Link 
              to="/" 
              className="flex items-center mt-4 text-sm font-medium text-gray-600 hover:text-primary transition-colors"
              onClick={()const  => setSidebarOpen(false)}
            >
              <span>Back to Website</span>
            </Link>
          </div>
        </motion.aside>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow">
          <div className="px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <button
              onClick={()const  => setSidebarOpen(true)}
              className="md:hidden p-2 text-gray-500 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-xl font-semibold text-gray-900">
              {navigationItems.find((item)const  => isActiveLink(item.href))?.name || 'Admin Dashboard'}
            </h1>
            <div className="md:hidden">
              <Link to="/" className="text-gray-500">
                <span className="text-primary font-bold text-lg">PC</span>
              </Link>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;