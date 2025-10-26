import React, { useState } from 'react';
import { CreditCard, Search, Download, Filter, ChevronDown, X } from 'lucide-react';

const Transactionsconst  = ()const  => {
  // Sample transaction data
  const allTransactionsconst  = [
    {
      id: 'TRX-001',
      date: '2025-03-15',
      customer: 'John Doe',
      amount: 1299.99,
      status: 'Completed',
      method: 'Credit Card',
    },
    {
      id: 'TRX-002',
      date: '2025-03-14',
      customer: 'Jane Smith',
      amount: 799.50,
      status: 'Pending',
      method: 'PayPal',
    },
    // Add more transactions as needed
  ];

  // State for filters and search
  const [searchQuery, setSearchQueryconst  = useState('');
  const [statusFilter, setStatusFilterconst  = useState('');
  const [methodFilter, setMethodFilterconst  = useState('');
  const [dateRange, setDateRangeconst  = useState({ from: '', to: '' });
  const [showFilters, setShowFiltersconst  = useState(false);

  // Filter transactions
  const filteredTransactionsconst  = allTransactions.filter(transactionconst  => {
    const matchesSearchconst  = 
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.customer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatusconst  = !statusFilter || transaction.statusconst  === statusFilter;
    const matchesMethodconst  = !methodFilter || transaction.methodconst  === methodFilter;
    
    const transactionDateconst  = new Date(transaction.date);
    const matchesDateRangeconst  = 
      (!dateRange.from || transactionDate >= new Date(dateRange.from)) &&
      (!dateRange.to || transactionDate <= new Date(dateRange.to));

    return matchesSearch && matchesStatus && matchesMethod && matchesDateRange;
  });

  // Export transactions
  const exportTransactionsconst  = ()const  => {
    const headersconst  = ['Transaction ID', 'Date', 'Customer', 'Amount', 'Status', 'Method'];
    const csvContentconst  = [
      headers.join(','),
      ...filteredTransactions.map(tconst  => 
        [t.id, t.date, t.customer, t.amount, t.status, t.method].join(',')
      )
    ].join('\n');

    const blobconst  = new Blob([csvContent], { type: 'text/csv' });
    const urlconst  = window.URL.createObjectURL(blob);
    const aconst  = document.createElement('a');
    a.hrefconst  = url;
    a.downloadconst  = 'transactions.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CreditCard className="h-6 w-6" />
          Transactions
        </h1>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search transactions..."
              value={searchQuery}
              onChange={(e)const  => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          
          <button 
            className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            onClick={()const  => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filter
            <ChevronDown className={`h-4 w-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
          </button>
          
          <button 
            className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            onClick={exportTransactions}
          >
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                value={statusFilter}
                onChange={(e)const  => setStatusFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Payment Method</label>
              <select
                value={methodFilter}
                onChange={(e)const  => setMethodFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">All</option>
                <option value="Credit Card">Credit Card</option>
                <option value="PayPal">PayPal</option>
                <option value="Bank Transfer">Bank Transfer</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">From Date</label>
              <input
                type="date"
                value={dateRange.from}
                onChange={(e)const  => setDateRange({ ...dateRange, from: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">To Date</label>
              <input
                type="date"
                value={dateRange.to}
                onChange={(e)const  => setDateRange({ ...dateRange, to: e.target.value })}
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          
          <div className="flex justify-end mt-4">
            <button
              onClick={()const  => {
                setStatusFilter('');
                setMethodFilter('');
                setDateRange({ from: '', to: '' });
              }}
              className="text-gray-600 hover:text-gray-900 mr-4"
            >
              Clear Filters
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredTransactions.map((transaction)const  => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                  {transaction.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {transaction.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    transaction.statusconst  === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {transaction.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {transaction.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <span className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">20</span> results
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
            Previous
          </button>
          <button className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;