import React from 'react';
import { motion } from 'framer-motion';
import {
  TrendingUp, TrendingDown, DollarSign, Users,
  ShoppingBag, ChevronRight, Package, Truck
} from 'lucide-react';

const Dashboard: React.FC = () => {
  // Statistics data (mock)
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,987.50',
      change: '+12.4%',
      isPositive: true,
      icon: <DollarSign className="h-6 w-6 text-white" />,
      bgColor: 'bg-primary',
    },
    {
      title: 'Orders',
      value: '158',
      change: '+8.2%',
      isPositive: true,
      icon: <ShoppingBag className="h-6 w-6 text-white" />,
      bgColor: 'bg-secondary',
    },
    {
      title: 'Customers',
      value: '1,254',
      change: '+18.7%',
      isPositive: true,
      icon: <Users className="h-6 w-6 text-white" />,
      bgColor: 'bg-accent',
    },
    {
      title: 'Conversion Rate',
      value: '3.6%',
      change: '-0.8%',
      isPositive: false,
      icon: <Package className="h-6 w-6 text-white" />,
      bgColor: 'bg-gray-700',
    }
  ];

  // Recent orders (mock)
  const recentOrders = [
    {
      id: 'ORD-1234',
      customer: 'John Doe',
      date: '2023-10-15',
      amount: '$249.99',
      status: 'Delivered',
      statusColor: 'text-green-600 bg-green-100',
    },
    {
      id: 'ORD-1233',
      customer: 'Jane Smith',
      date: '2023-10-14',
      amount: '$1,899.50',
      status: 'Processing',
      statusColor: 'text-yellow-600 bg-yellow-100',
    },
    {
      id: 'ORD-1232',
      customer: 'Michael Johnson',
      date: '2023-10-14',
      amount: '$599.00',
      status: 'Shipped',
      statusColor: 'text-blue-600 bg-blue-100',
    },
    {
      id: 'ORD-1231',
      customer: 'Emily Davis',
      date: '2023-10-13',
      amount: '$349.99',
      status: 'Delivered',
      statusColor: 'text-green-600 bg-green-100',
    },
    {
      id: 'ORD-1230',
      customer: 'Robert Wilson',
      date: '2023-10-12',
      amount: '$1,299.99',
      status: 'Cancelled',
      statusColor: 'text-red-600 bg-red-100',
    }
  ];

  // Top selling products (mock)
  const topSellingProducts = [
    {
      id: 1,
      name: 'NVIDIA GeForce RTX 4090 24GB',
      category: 'Graphics Cards',
      sold: 28,
      amount: '$44,799.72',
    },
    {
      id: 2,
      name: 'AMD Ryzen 9 7950X',
      category: 'Processors',
      sold: 45,
      amount: '$31,499.55',
    },
    {
      id: 3,
      name: 'Samsung 990 PRO 2TB NVMe SSD',
      category: 'Storage',
      sold: 67,
      amount: '$16,749.33',
    },
    {
      id: 4,
      name: 'ASUS ROG Strix X670E-E Gaming WiFi',
      category: 'Motherboards',
      sold: 36,
      amount: '$17,999.64',
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Dashboard Overview</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                  {stat.icon}
                </div>
              </div>
              <div className={`flex items-center mt-3 ${
                stat.isPositive ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.isPositive ? 
                  <TrendingUp className="h-4 w-4 mr-1" /> : 
                  <TrendingDown className="h-4 w-4 mr-1" />
                }
                <span className="text-sm font-medium">{stat.change} from last month</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Main Content Grids */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm lg:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Orders</h3>
            <a href="#" className="text-sm text-primary hover:text-primary-dark flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentOrders.map((order, index) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-primary">
                        {order.id}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.amount}
                      </td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${order.statusColor}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Top Selling Products */}
        <motion.div 
          className="bg-white rounded-lg shadow-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-semibold">Top Selling Products</h3>
            <a href="#" className="text-sm text-primary hover:text-primary-dark flex items-center">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </a>
          </div>
          <div className="p-3">
            <ul className="divide-y divide-gray-200">
              {topSellingProducts.map((product) => (
                <li key={product.id} className="py-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{product.name}</p>
                      <p className="text-xs text-gray-500">{product.category}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="text-sm text-gray-700">
                      <span className="font-medium">{product.sold}</span> units sold
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {product.amount}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
      
      {/* Order Status Summary */}
      <motion.div 
        className="bg-white rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.6 }}
      >
        <div className="px-6 py-5 border-b border-gray-200">
          <h3 className="text-lg font-semibold">Order Status Summary</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 text-green-600 rounded-full mb-3">
                <Package className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">42</h4>
              <p className="text-sm text-gray-600">New Orders</p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg p-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 text-yellow-600 rounded-full mb-3">
                <ShoppingBag className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">28</h4>
              <p className="text-sm text-gray-600">Processing</p>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-3">
                <Truck className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">36</h4>
              <p className="text-sm text-gray-600">Shipped</p>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-full mb-3">
                <Users className="h-6 w-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900">52</h4>
              <p className="text-sm text-gray-600">Delivered</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;