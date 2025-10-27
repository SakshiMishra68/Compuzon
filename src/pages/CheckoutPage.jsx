import React from 'react';
import { ShoppingBag, CreditCard } from 'lucide-react';

const CheckoutPage= (()=> {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        <ShoppingBag className="w-8 h-8" />
        Checkout
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input type="text" className="w-full p-2 border rounded" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Postal Code</label>
                <input type="text" className="w-full p-2 border rounded" />
              </div>
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <CreditCard className="w-6 h-6" />
            Payment Details
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input type="text" className="w-full p-2 border rounded" placeholder="**** **** **** ****" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Expiry Date</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="MM/YY" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input type="text" className="w-full p-2 border rounded" placeholder="***" />
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Complete Purchase
            </button>
          </form>
        </div>
      </div>
    </div>
  ();
};

export default CheckoutPage;