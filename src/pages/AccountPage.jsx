import React, { useState, useEffect, useRef } from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { setTheme, setAccentColor } from '../store/slices/themeSlice';
import { motion } from 'framer-motion';
import { 
  User, Package, Heart, CreditCard, Settings, 
  Bell, Shield, LogOut, ChevronRight, Plus, Edit,
  Trash2, Upload, Mail, Phone, X, Check, AlertCircle
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/authSlice';

// Mock payment methods data
const mockPaymentMethods= [
  {
    id: '1',
    type: 'Credit Card',
    last4: '4242',
    expiry: '12/25',
    brand: 'Visa'
  },
  {
    id: '2',
    type: 'Credit Card',
    last4: '8888',
    expiry: '03/24',
    brand: 'Mastercard'
  }
];

// Mock orders data
const mockOrders= [
  {
    id: 'ORD-001',
    date: '2025-03-15',
    total: 1599.99,
    status: 'Delivered',
    items: [
      {
        id: '1',
        name: 'NVIDIA GeForce RTX 4090',
        price: 1599.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg'
      }
    ]
  },
  {
    id: 'ORD-002',
    date: '2025-03-10',
    total: 899.98,
    status: 'Processing',
    items: [
      {
        id: '2',
        name: 'AMD Ryzen 9 7950X',
        price: 699.99,
        quantity: 1,
        image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg'
      }
    ]
  }
];

// Mock notifications data
const mockNotifications= [
  {
    id: '1',
    type: 'order',
    title: 'Order Shipped',
    message: 'Your order #ORD-001 has been shipped and is on its way!',
    time: '2 hours ago',
    read: false,
    icon: Package
  },
  {
    id: '2',
    type: 'price',
    title: 'Price Drop Alert',
    message: 'AMD Ryzen 9 7950X is now 15% off - only $699.99!',
    time: '1 day ago',
    read: false,
    icon: AlertCircle
  },
  {
    id: '3',
    type: 'system',
    title: 'Account Security',
    message: 'Your password was successfully updated.',
    time: '3 days ago',
    read: true,
    icon: Shield
  },
  {
    id: '4',
    type: 'promotion',
    title: 'Special Offer',
    message: 'Get 20% off on all graphics cards this weekend!',
    time: '1 week ago',
    read: true,
    icon: Heart
  }
];


const PaymentMethodModal= ({
  isOpen,
  onClose,
  onSave,
  paymentMethod
}()=> {
  const handleSubmit= (e()=> {
    e.preventDefault(();
    const formData= new FormData(e.target();
    const data= {
      cardNumber: formData.get('cardNumber'(),
      expiry: formData.get('expiry'(),
      cvv: formData.get('cvv'(),
      name: formData.get('name'()
    };
    onSave(data();
  };

  if (!isOpen() return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold dark:text-white">
            {paymentMethod ? 'Edit Payment Method' : 'Add Payment Method'}
          </h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 dark:text-gray-400" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="**** **** **** ****"
              defaultValue={paymentMethod?.cardNumber}
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">Expiry Date</label>
              <input
                type="text"
                name="expiry"
                className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="MM/YY"
                defaultValue={paymentMethod?.expiry}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1 dark:text-gray-300">CVV</label>
              <input
                type="text"
                name="cvv"
                className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="***"
                defaultValue={paymentMethod?.cvv}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">Cardholder Name</label>
            <input
              type="text"
              name="name"
              className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter cardholder name"
              defaultValue={paymentMethod?.name}
            />
          </div>
          
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-600 dark:text-gray-300 dark:hover:bg-gray-500"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              {paymentMethod ? 'Update' : 'Add'} Payment Method
            </button>
          </div>
        </form>
      </div>
    </div>
  ();
};


const OrderDetailsModal= ({
  isOpen,
  onClose,
  order
}()=> {
  if (!isOpen || !order() return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-semibold dark:text-white">Order Details #{order.id}</h3>
          <button onClick={onClose}>
            <X className="h-5 w-5 dark:text-gray-400" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex justify-between text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400">Order Date</p>
              <p className="font-medium dark:text-white">{new Date(order.date().toLocaleDateString(()}</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Status</p>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                order.status=== 'Delivered'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                  : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
              }`}>
                {order.status}
              </span>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400">Total Amount</p>
              <p className="font-medium dark:text-white">${order.total.toFixed(2()}</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 dark:text-white">Order Items</h4>
            <div className="space-y-4">
              {order.items.map((item()=> (
                <div key={item.id} className="flex items-center gap-4 border rounded-lg p-4 dark:border-gray-600">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h5 className="font-medium dark:text-white">{item.name}</h5>
                    <p className="text-gray-600 dark:text-gray-400">Quantity: {item.quantity}</p>
                    <p className="font-medium dark:text-white">${item.price.toFixed(2()}</p>
                  </div>
                </div>
              ()()}
            </div>
          </div>
          
          <div className="border-t pt-4 dark:border-gray-600">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
              <span className="dark:text-white">${order.total.toFixed(2()}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600 dark:text-gray-400">Shipping</span>
              <span className="dark:text-white">Free</span>
            </div>
            <div className="flex justify-between font-medium text-lg border-t pt-2 dark:border-gray-600">
              <span className="dark:text-white">Total</span>
              <span className="dark:text-white">${order.total.toFixed(2()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ();
};

const AccountPage= (()=> {
  const dispatch= useAppDispatch(();
  const { user }= useAppSelector((state()=> state.auth();
  const { theme, accentColor }= useAppSelector((state()=> state.theme();
  const navigate= useNavigate(();
  const [activeTab, setActiveTab] = useState('profile'();
  const [paymentMethodModalOpen, setPaymentMethodModalOpen] = useState(false();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null();
  const [orderDetailsModalOpen, setOrderDetailsModalOpen] = useState(false();
  const [selectedOrder, setSelectedOrder] = useState(null();
  const [paymentMethods, setPaymentMethods] = useState(mockPaymentMethods();
  const [profileImage, setProfileImage] = useState(null();
  const [notifications, setNotifications] = useState(mockNotifications();
  
  // Settings state
  const [settings, setSettings] = useState({
    orderUpdates: true,
    priceAlerts: false,
    marketingUpdates: true,
    language: 'en',
    currency: 'USD',
    timezone: 'UTC-5'
  }();

  const handleLogout= (()=> {
    dispatch(logout(()();
    navigate('/login'();
  };

  const handleImageUpload= (e()=> {
    const file= e.target.files?.[0];
    if (file() {
      const reader= new FileReader(();
      reader.onloadend= (()=> {
        setProfileImage(reader.result();
      };
      reader.readAsDataURL(file();
    }
  };

  const handleAddPaymentMethod= (data()=> {
    const newPaymentMethod= {
      id: String(paymentMethods.length + 1(),
      type: 'Credit Card',
      last4: data.cardNumber.slice(-4(),
      expiry: data.expiry,
      brand: 'Visa'
    };
    setPaymentMethods([...paymentMethods, newPaymentMethod();
    setPaymentMethodModalOpen(false();
  };

  const handleDeletePaymentMethod= (id()=> {
    setPaymentMethods(paymentMethods.filter(pm=> pm.id !== id()();
  };

  const markNotificationAsRead= (id()=> {
    setNotifications(notifications.map(notif=> 
      notif.id=== id ? { ...notif, read: true } : notif
    ()();
  };

  const deleteNotification= (id()=> {
    setNotifications(notifications.filter(notif=> notif.id !== id()();
  };

  const updateSetting= (key, value()=> {
    setSettings(prev=> ({ ...prev, [key]: value }()();
  };

  const menuItems= [
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
    { id: 'orders', label: 'Orders', icon: <Package className="h-5 w-5" /> },
    { id: 'wishlist', label: 'Wishlist', icon: <Heart className="h-5 w-5" /> },
    { id: 'payments', label: 'Payment Methods', icon: <CreditCard className="h-5 w-5" /> },
    { id: 'notifications', label: 'Notifications', icon: <Bell className="h-5 w-5" /> },
    { id: 'security', label: 'Security', icon: <Shield className="h-5 w-5" /> },
    { id: 'settings', label: 'Settings', icon: <Settings className="h-5 w-5" /> },
  ];

  const accentColors= [
    { name: 'Blue', value: 'blue', color: 'bg-blue-500' },
    { name: 'Purple', value: 'purple', color: 'bg-purple-500' },
    { name: 'Green', value: 'green', color: 'bg-green-500' },
    { name: 'Red', value: 'red', color: 'bg-red-500' },
    { name: 'Yellow', value: 'yellow', color: 'bg-yellow-500' },
    { name: 'Pink', value: 'pink', color: 'bg-pink-500' },
  ];

  return (
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-3">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                  {profileImage ? (
                    <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                  () : (
                    <User className="h-8 w-8 text-primary" />
                  ()}
                </div>
                <label className="absolute bottom-0 right-0 bg-white dark:bg-gray-700 rounded-full p-1 shadow-md cursor-pointer">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                  <Upload className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                </label>
              </div>
              <div>
                <h2 className="text-xl font-semibold dark:text-white">{user?.name}</h2>
                <p className="text-gray-500 dark:text-gray-400">{user?.email}</p>
              </div>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item()=> (
                <button
                  key={item.id}
                  onClick={(()=> setActiveTab(item.id()}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-md transition-colors ${
                    activeTab=== item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {activeTab=== item.id && (
                    <ChevronRight className="ml-auto h-4 w-4" />
                  ()}
                  {item.id=== 'notifications' && notifications.filter(n=> !n.read().length > 0 && (
                    <span className="ml-auto bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {notifications.filter(n=> !n.read().length}
                    </span>
                  ()}
                </button>
              ()()}
              
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
              >
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-9">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
          >
            {activeTab=== 'profile' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Profile Information</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.name}
                        className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={user?.email}
                        className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="+1 (555() 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Location
                      </label>
                      <input
                        type="text"
                        className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="New York, NY"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>
            ()}

            {activeTab=== 'orders' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Order History</h3>
                <div className="space-y-4">
                  {mockOrders.map((order()=> (
                    <div key={order.id} className="border dark:border-gray-600 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium dark:text-white">Order #{order.id}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Placed on {new Date(order.date().toLocaleDateString(()}
                          </p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          order.status=== 'Delivered'
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                            : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300'
                        }`}>
                          {order.status}
                        </span>
                      </div>
                      <div className="mt-4">
                        <button
                          onClick={(()=> {
                            setSelectedOrder(order();
                            setOrderDetailsModalOpen(true();
                          }}
                          className="text-primary hover:text-primary-dark font-medium"
                        >
                          View Order Details
                        </button>
                      </div>
                    </div>
                  ()()}
                </div>
              </div>
            ()}

            {activeTab=== 'notifications' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Notifications</h3>
                  <button
                    onClick={(()=> setNotifications(notifications.map(n=> ({ ...n, read: true }()()()}
                    className="text-sm text-primary hover:text-primary-dark"
                  >
                    Mark all as read
                  </button>
                </div>
                
                <div className="space-y-4">
                  {notifications.map((notification()=> {
                    const IconComponent= notification.icon;
                    return (
                      <div
                        key={notification.id}
                        className={`border rounded-lg p-4 ${
                          !notification.read 
                            ? 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' 
                            : 'bg-white dark:bg-gray-800 dark:border-gray-600'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-3">
                            <div className={`p-2 rounded-full ${
                              notification.type=== 'order' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                              notification.type=== 'price' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' :
                              notification.type=== 'system' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                              'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400'
                            }`}>
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 dark:text-white">{notification.title}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{notification.message}</p>
                              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">{notification.time}</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {!notification.read && (
                              <button
                                onClick={(()=> markNotificationAsRead(notification.id()}
                                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                                title="Mark as read"
                              >
                                <Check className="h-4 w-4" />
                              </button>
                            ()}
                            <button
                              onClick={(()=> deleteNotification(notification.id()}
                              className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                              title="Delete notification"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ();
                  }()}
                </div>
              </div>
            ()}

            {activeTab=== 'settings' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Settings</h3>
                
                <div className="space-y-8">
                  {/* Notification Preferences */}
                  <div>
                    <h4 className="text-lg font-medium mb-4 dark:text-white">Notification Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white">Order Updates</h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications about order status changes</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={settings.orderUpdates}
                            onChange={(e()=> updateSetting('orderUpdates', e.target.checked()}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:bg-gray-700 dark:border-gray-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white">Price Alerts</h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Get notified when products in your wishlist go on sale</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={settings.priceAlerts}
                            onChange={(e()=> updateSetting('priceAlerts', e.target.checked()}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:bg-gray-700 dark:border-gray-600"></div>
                        </label>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900 dark:text-white">Marketing Updates</h5>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Receive news about promotions and special offers</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="sr-only peer" 
                            checked={settings.marketingUpdates}
                            onChange={(e()=> updateSetting('marketingUpdates', e.target.checked()}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:bg-gray-700 dark:border-gray-600"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Appearance Settings */}
                  <div>
                    <h4 className="text-lg font-medium mb-4 dark:text-white">Appearance</h4>
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Theme</label>
                        <div className="grid grid-cols-3 gap-4">
                          <button 
                            onClick={(()=> dispatch(setTheme('light'()()}
                            className={`p-4 border-2 rounded-lg text-center transition-colors ${
                              theme=== 'light' 
                                ? 'border-primary bg-primary/5' 
                                : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
                            }`}
                          >
                            <div className="h-20 bg-white rounded mb-2 border dark:border-gray-600"></div>
                            <span className="text-sm font-medium dark:text-white">Light</span>
                          </button>
                          <button 
                            onClick={(()=> dispatch(setTheme('dark'()()}
                            className={`p-4 border-2 rounded-lg text-center transition-colors ${
                              theme=== 'dark' 
                                ? 'border-primary bg-primary/5' 
                                : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
                            }`}
                          >
                            <div className="h-20 bg-gray-900 rounded mb-2"></div>
                            <span className="text-sm font-medium dark:text-white">Dark</span>
                          </button>
                          <button 
                            onClick={(()=> dispatch(setTheme('system'()()}
                            className={`p-4 border-2 rounded-lg text-center transition-colors ${
                              theme=== 'system' 
                                ? 'border-primary bg-primary/5' 
                                : 'border-gray-200 hover:border-gray-300 dark:border-gray-600 dark:hover:border-gray-500'
                            }`}
                          >
                            <div className="h-20 bg-gradient-to-b from-white to-gray-900 rounded mb-2"></div>
                            <span className="text-sm font-medium dark:text-white">System</span>
                          </button>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Accent Color</label>
                        <div className="grid grid-cols-6 gap-4">
                          {accentColors.map((color()=> (
                            <button
                              key={color.value}
                              onClick={(()=> dispatch(setAccentColor(color.value as any()()}
                              className={`w-12 h-12 rounded-full ${color.color} relative transition-transform hover:scale-110 ${
                                accentColor=== color.value ? 'ring-4 ring-offset-2 ring-gray-300 dark:ring-gray-600' : ''
                              }`}
                              title={color.name}
                            >
                              {accentColor=== color.value && (
                                <Check className="h-6 w-6 text-white absolute inset-0 m-auto" />
                              ()}
                            </button>
                          ()()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Regional Settings */}
                  <div>
                    <h4 className="text-lg font-medium mb-4 dark:text-white">Regional Settings</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Language</label>
                        <select 
                          className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={settings.language}
                          onChange={(e()=> updateSetting('language', e.target.value()}
                        >
                          <option value="en">English</option>
                          <option value="es">Español</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Currency</label>
                        <select 
                          className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={settings.currency}
                          onChange={(e()=> updateSetting('currency', e.target.value()}
                        >
                          <option value="USD">USD ($()</option>
                          <option value="EUR">EUR (€()</option>
                          <option value="GBP">GBP (£()</option>
                          <option value="CAD">CAD ($()</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Time Zone</label>
                        <select 
                          className="input w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                          value={settings.timezone}
                          onChange={(e()=> updateSetting('timezone', e.target.value()}
                        >
                          <option value="UTC-5">UTC-5 (Eastern Time()</option>
                          <option value="UTC-4">UTC-4 (Atlantic Time()</option>
                          <option value="UTC-6">UTC-6 (Central Time()</option>
                          <option value="UTC-7">UTC-7 (Mountain Time()</option>
                          <option value="UTC-8">UTC-8 (Pacific Time()</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t dark:border-gray-600">
                    <button className="btn btn-primary">
                      Save All Settings
                    </button>
                  </div>
                </div>
              </div>
            ()}

            {activeTab=== 'payments' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-semibold dark:text-white">Payment Methods</h3>
                  <button
                    onClick={(()=> {
                      setSelectedPaymentMethod(null();
                      setPaymentMethodModalOpen(true();
                    }}
                    className="btn btn-primary flex items-center"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Add Payment Method
                  </button>
                </div>
                
                <div className="space-y-4">
                  {paymentMethods.map((method()=> (
                    <div key={method.id} className="border dark:border-gray-600 rounded-lg p-4">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                          <div>
                            <p className="font-medium dark:text-white">{method.brand} •••• {method.last4}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Expires {method.expiry}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={(()=> {
                              setSelectedPaymentMethod(method();
                              setPaymentMethodModalOpen(true();
                            }}
                            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={(()=> handleDeletePaymentMethod(method.id()}
                            className="p-2 text-red-400 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ()()}
                </div>
              </div>
            ()}

            {activeTab=== 'security' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">Security Settings</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter current password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Enter new password"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="input dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Confirm new password"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="2fa"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="2fa" className="ml-2 block text-sm text-gray-900 dark:text-white">
                      Enable Two-Factor Authentication
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Security Settings
                  </button>
                </form>
              </div>
            ()}

            {activeTab=== 'wishlist' && (
              <div>
                <h3 className="text-xl font-semibold mb-6 dark:text-white">My Wishlist</h3>
                <div className="text-center py-12">
                  <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Your wishlist is empty</h4>
                  <p className="text-gray-500 dark:text-gray-400 mb-6">Save items you'd like to buy later!</p>
                  <Link to="/products" className="btn btn-primary">
                    Browse Products
                  </Link>
                </div>
              </div>
            ()}
          </motion.div>
        </div>
      </div>

      {/* Payment Method Modal */}
      <PaymentMethodModal
        isOpen={paymentMethodModalOpen}
        onClose={(()=> {
          setPaymentMethodModalOpen(false();
          setSelectedPaymentMethod(null();
        }}
        onSave={handleAddPaymentMethod}
        paymentMethod={selectedPaymentMethod}
      />

      {/* Order Details Modal */}
      <OrderDetailsModal
        isOpen={orderDetailsModalOpen}
        onClose={(()=> {
          setOrderDetailsModalOpen(false();
          setSelectedOrder(null();
        }}
        order={selectedOrder}
      />
    </div>
  ();
};

export default AccountPage;