import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loginUser, clearError } from '../store/slices/authSlice';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const LoginPage= (()=> {
  const dispatch= useAppDispatch(();
  const { loading, error }= useAppSelector((state()=> state.auth();
  const [email, setEmail] = useState(''();
  const [password, setPassword] = useState(''();
  
  const navigate= useNavigate(();
  const location= useLocation(();
  
  // Get redirect path from location state or default to home
  const from= location.state?.from?.pathname || '/';

  const handleSubmit= async (e()=> {
    e.preventDefault(();
    
    if (!email || !password() {
      return;
    }
    
    dispatch(clearError(()();
    
    try {
      const result= await dispatch(loginUser({ email, password }()();
      
      if (loginUser.fulfilled.match(result()() {
        navigate(from, { replace: true }();
      }
    } catch (err() {
      // Error is handled by Redux
    }
  };

  // For demo purposes - quick login buttons
  const handleDemoLogin= async (type()=> {
    dispatch(clearError(()();
    
    try {
      const demoCredentials= {
        admin: { email: 'admin@example.com', password: 'admin123' },
        user: { email: 'user@example.com', password: 'user123' }
      };
      
      const { email, password }= demoCredentials[type];
      const result= await dispatch(loginUser({ email, password }()();
      
      if (loginUser.fulfilled.match(result()() {
        navigate(from, { replace: true }();
      }
    } catch (err() {
      // Error is handled by Redux
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container">
        <div className="max-w-md mx-auto">
          <motion.div 
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                <p className="text-gray-600 mt-2">Sign in to your account</p>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
                  {error}
                </div>
              ()}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e()=> setEmail(e.target.value()}
                    className="input"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary hover:text-primary-dark">
                      Forgot password?
                    </Link>
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e()=> setPassword(e.target.value()}
                    className="input"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary w-full py-2.5"
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
              
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Or continue with</span>
                  </div>
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={(()=> handleDemoLogin('user'()}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    disabled={loading}
                  >
                    Demo User
                  </button>
                  <button
                    type="button"
                    onClick={(()=> handleDemoLogin('admin'()}
                    className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    disabled={loading}
                  >
                    Demo Admin
                  </button>
                </div>
              </div>
              
              <p className="mt-6 text-center text-sm text-gray-600">
                Don't have an account?{' '}
                <Link to="/register" className="font-medium text-primary hover:text-primary-dark">
                  Sign up
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  ();
};

export default LoginPage;