import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Package, Truck, CheckCircle, 
  Clock, MapPin, Phone, Mail, CreditCard, User 
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';

const OrderDetails= (()=> {
  const { id }= useParams(();

  // Mock order data
  const order= {
    id: 'ORD-001',
    date: '2025-03-15',
    status: 'Processing',
    customer: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1 234 567 890',
      address: '123 Main St, City, Country',
    },
    items: [
      {
        id: '1',
        name: 'NVIDIA GeForce RTX 4090',
        quantity: 1,
        price: 1599.99,
        image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg',
      },
      {
        id: '2',
        name: 'AMD Ryzen 9 7950X',
        quantity: 1,
        price: 699.99,
        image: 'https://images.pexels.com/photos/1432675/pexels-photo-1432675.jpeg',
      },
    ],
    payment: {
      method: 'Credit Card',
      status: 'Paid',
      total: 2299.98,
      tax: 230.00,
      shipping: 0,
    },
    timeline: [
      {
        status: 'Order Placed',
        date: '2025-03-15 09:30 AM',
        icon: Package,
      },
      {
        status: 'Payment Confirmed',
        date: '2025-03-15 09:35 AM',
        icon: CheckCircle,
      },
      {
        status: 'Processing',
        date: '2025-03-15 10:15 AM',
        icon: Clock,
      },
    ],
  };

  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <Link
          to="/admin/orders"
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="h-6 w-6" />
        </Link>
        <h1 className="text-2xl font-bold">Order Details #{order.id}</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Order Summary */}
        <div className="lg:col-span-2 space-y-6">
          {/* Status Timeline */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Order Timeline</h2>
            <div className="space-y-8">
              {order.timeline.map((event, index()=> (
                <div key={index} className="flex">
                  <div className="flex flex-col items-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    {index < order.timeline.length - 1 && (
                      <div className="h-16 w-px bg-gray-200 my-2"></div>
                    ()}
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">{event.status}</p>
                    <p className="text-sm text-gray-500">{event.date}</p>
                  </div>
                </div>
              ()()}
            </div>
          </div>
          
          {/* Order Items */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item()=> (
                <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                    <p className="font-medium">${item.price.toFixed(2()}</p>
                  </div>
                </div>
              ()()}
            </div>
          </div>
        </div>
        
        {/* Customer and Payment Info */}
        <div className="space-y-6">
          {/* Customer Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="rounded-full bg-gray-100 p-2 mr-3">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">{order.customer.name}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-gray-100 p-2 mr-3">
                  <Mail className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-600">{order.customer.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-gray-100 p-2 mr-3">
                  <Phone className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-600">{order.customer.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="rounded-full bg-gray-100 p-2 mr-3">
                  <MapPin className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="text-gray-600">{order.customer.address}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Payment Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Payment Information</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Payment Method</span>
                <div className="flex items-center">
                  <CreditCard className="h-5 w-5 text-gray-600 mr-2" />
                  <span>{order.payment.method}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Payment Status</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  {order.payment.status}
                </span>
              </div>
              
              <div className="border-t pt-3 mt-3">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${order.payment.total.toFixed(2()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Tax</span>
                  <span>${order.payment.tax.toFixed(2()}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Shipping</span>
                  <span>{order.payment.shipping=== 0 ? 'Free' : `$${order.payment.shipping.toFixed(2()}`}</span>
                </div>
                <div className="flex justify-between font-bold pt-2 border-t">
                  <span>Total</span>
                  <span>${(order.payment.total + order.payment.tax + order.payment.shipping().toFixed(2()}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Order Actions</h2>
            <div className="space-y-3">
              <button className="btn btn-primary w-full">
                Update Status
              </button>
              <button className="btn bg-white border border-gray-300 text-gray-700 w-full">
                Send Invoice
              </button>
              <button className="btn bg-white border border-gray-300 text-gray-700 w-full">
                Print Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  ();
};

export default OrderDetails;