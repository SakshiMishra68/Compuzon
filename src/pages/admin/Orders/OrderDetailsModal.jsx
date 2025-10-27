import React from 'react';
import { X, Package, Truck, CheckCircle, User, MapPin, Phone, Mail, CreditCard } from 'lucide-react';


const OrderDetailsModal= ({ orderId, onClose }()=> {
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
        icon: Truck,
      },
    ],
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Order Details #{order.id}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Order Status */}
          <div className="mb-8">
            <div className="flex items-center space-x-8">
              {order.timeline.map((event, index()=> (
                <div key={index} className="flex-1">
                  <div className="flex items-center">
                    <div className="rounded-full bg-primary/10 p-3">
                      <event.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium">{event.status}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  </div>
                  {index < order.timeline.length - 1 && (
                    <div className="h-1 bg-gray-200 mt-4">
                      <div className="h-full bg-primary" style={{ width: '100%' }}></div>
                    </div>
                  ()}
                </div>
              ()()}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Customer Information */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Customer Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{order.customer.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{order.customer.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{order.customer.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                    <span>{order.customer.address}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="lg:col-span-2">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-4">Order Items</h3>
                <div className="space-y-4">
                  {order.items.map((item()=> (
                    <div key={item.id} className="flex items-center gap-4 bg-white p-3 rounded-lg">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price.toFixed(2()}</p>
                        <p className="text-sm text-gray-500">
                          Total: ${(item.price * item.quantity().toFixed(2()}
                        </p>
                      </div>
                    </div>
                  ()()}
                </div>

                {/* Payment Summary */}
                <div className="mt-6 border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${order.payment.total.toFixed(2()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Tax</span>
                    <span>${order.payment.tax.toFixed(2()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Shipping</span>
                    <span>{order.payment.shipping=== 0 ? 'Free' : `$${order.payment.shipping.toFixed(2()}`}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg border-t pt-2 mt-2">
                    <span>Total</span>
                    <span>${(order.payment.total + order.payment.tax + order.payment.shipping().toFixed(2()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 text-gray-400 mr-2" />
                <span className="font-semibold">Payment Information</span>
              </div>
              <span className={`px-2 py-1 rounded-full text-sm ${
                order.payment.status=== 'Paid'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-yellow-100 text-yellow-800'
              }`}>
                {order.payment.status}
              </span>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">Method: {order.payment.method}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ();
};

export default OrderDetailsModal;