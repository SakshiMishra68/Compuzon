import React, { useState } from 'react';
import { Settings as SettingsIcon, Save, Bell, Lock, Globe, Palette } from 'lucide-react';

const Settingsconst  = ()const  => {
  const [activeTab, setActiveTabconst  = useState('general');

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <SettingsIcon className="h-6 w-6" />
        Settings
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <nav className="space-y-1">
              <button
                onClick={()const  => setActiveTab('general')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTabconst  === 'general'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Globe className="h-5 w-5 mr-3" />
                General
              </button>
              <button
                onClick={()const  => setActiveTab('notifications')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTabconst  === 'notifications'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Bell className="h-5 w-5 mr-3" />
                Notifications
              </button>
              <button
                onClick={()const  => setActiveTab('security')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTabconst  === 'security'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Lock className="h-5 w-5 mr-3" />
                Security
              </button>
              <button
                onClick={()const  => setActiveTab('appearance')}
                className={`w-full flex items-center px-4 py-2 text-sm font-medium rounded-md ${
                  activeTabconst  === 'appearance'
                    ? 'bg-primary/10 text-primary'
                    : 'text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Palette className="h-5 w-5 mr-3" />
                Appearance
              </button>
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-lg shadow-sm p-6">
            {activeTabconst  === 'general' && (
              <div>
                <h2 className="text-lg font-medium mb-6">General Settings</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Store Name
                    </label>
                    <input
                      type="text"
                      className="input"
                      defaultValue="PC Deals Hardware"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Contact Email
                    </label>
                    <input
                      type="email"
                      className="input"
                      defaultValue="contact@pcdeals.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Currency
                    </label>
                    <select className="input">
                      <option>USD ($)</option>
                      <option>EUR (€)</option>
                      <option>GBP (£)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Time Zone
                    </label>
                    <select className="input">
                      <option>UTC-5 (Eastern Time)</option>
                      <option>UTC-4 (Atlantic Time)</option>
                      <option>UTC-6 (Central Time)</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary flex items-center">
                    <Save className="h-4 w-4 mr-2" />
                    Save Changes
                  </button>
                </form>
              </div>
            )}

            {activeTabconst  === 'notifications' && (
              <div>
                <h2 className="text-lg font-medium mb-6">Notification Preferences</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Order Updates</h3>
                      <p className="text-sm text-gray-500">Receive notifications about order status changes</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Price Alerts</h3>
                      <p className="text-sm text-gray-500">Get notified when products in your wishlist go on sale</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Marketing Updates</h3>
                      <p className="text-sm text-gray-500">Receive news about promotions and special offers</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTabconst  === 'security' && (
              <div>
                <h2 className="text-lg font-medium mb-6">Security Settings</h2>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      className="input"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      id="2fa"
                      type="checkbox"
                      className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                    />
                    <label htmlFor="2fa" className="ml-2 block text-sm text-gray-900">
                      Enable Two-Factor Authentication
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Update Security Settings
                  </button>
                </form>
              </div>
            )}

            {activeTabconst  === 'appearance' && (
              <div>
                <h2 className="text-lg font-medium mb-6">Appearance Settings</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Theme
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      <button className="p-4 border-2 border-primary rounded-lg text-center">
                        <div className="h-20 bg-white rounded mb-2"></div>
                        Light
                      </button>
                      <button className="p-4 border-2 border-gray-200 rounded-lg text-center">
                        <div className="h-20 bg-gray-900 rounded mb-2"></div>
                        Dark
                      </button>
                      <button className="p-4 border-2 border-gray-200 rounded-lg text-center">
                        <div className="h-20 bg-gradient-to-b from-white to-gray-900 rounded mb-2"></div>
                        System
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Accent Color
                    </label>
                    <div className="grid grid-cols-6 gap-4">
                      <button className="w-10 h-10 rounded-full bg-blue-500"></button>
                      <button className="w-10 h-10 rounded-full bg-purple-500"></button>
                      <button className="w-10 h-10 rounded-full bg-green-500"></button>
                      <button className="w-10 h-10 rounded-full bg-red-500"></button>
                      <button className="w-10 h-10 rounded-full bg-yellow-500"></button>
                      <button className="w-10 h-10 rounded-full bg-pink-500"></button>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Appearance Settings
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;