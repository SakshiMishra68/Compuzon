import React from 'react';
import { HelpCircle, MessageSquare, Phone, Mail, ExternalLink } from 'lucide-react';

const Supportconst  = ()const  => {
  const supportTicketsconst  = [
    {
      id: 'TICKET-001',
      customer: 'John Doe',
      subject: 'Order Delivery Issue',
      status: 'Open',
      priority: 'High',
      created: '2025-03-15',
    },
    {
      id: 'TICKET-002',
      customer: 'Jane Smith',
      subject: 'Product Return Request',
      status: 'In Progress',
      priority: 'Medium',
      created: '2025-03-14',
    },
    // Add more tickets as needed
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <HelpCircle className="h-6 w-6" />
        Support Center
      </h1>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Open Tickets</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <MessageSquare className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Average Response Time</p>
              <p className="text-2xl font-bold">2.5h</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <Phone className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Customer Satisfaction</p>
              <p className="text-2xl font-bold">94%</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-lg">
              <Mail className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Support Tickets */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        <div className="p-6 border-b border-gray-200">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold">Support Tickets</h2>
            <button className="btn btn-primary">
              New Ticket
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ticket ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Subject
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Priority
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Created
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {supportTickets.map((ticket)const  => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-primary">
                    {ticket.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {ticket.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.subject}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ticket.statusconst  === 'Open'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      ticket.priorityconst  === 'High'
                        ? 'bg-red-100 text-red-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {ticket.created}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-primary hover:text-primary-dark">
                      View <ExternalLink className="h-4 w-4 inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Help Resources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Knowledge Base</h2>
          <div className="space-y-4">
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
              <h3 className="font-medium">Getting Started Guide</h3>
              <p className="text-sm text-gray-500 mt-1">Learn the basics of using the admin dashboard</p>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
              <h3 className="font-medium">Troubleshooting Common Issues</h3>
              <p className="text-sm text-gray-500 mt-1">Solutions to frequently encountered problems</p>
            </a>
            <a href="#" className="block p-4 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors">
              <h3 className="font-medium">Best Practices</h3>
              <p className="text-sm text-gray-500 mt-1">Tips for managing your store effectively</p>
            </a>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Contact Support</h2>
          <div className="space-y-4">
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <Phone className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Phone Support</h3>
                <p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 9AM-6PM EST</p>
                <p className="text-primary font-medium mt-2">+1 (800) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <Mail className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Email Support</h3>
                <p className="text-sm text-gray-500 mt-1">24/7 response within 2 hours</p>
                <p className="text-primary font-medium mt-2">support@pcdeals.com</p>
              </div>
            </div>
            <div className="flex items-start p-4 border border-gray-200 rounded-lg">
              <MessageSquare className="h-5 w-5 text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-medium">Live Chat</h3>
                <p className="text-sm text-gray-500 mt-1">Available 24/7 for urgent issues</p>
                <button className="text-primary font-medium mt-2 hover:text-primary-dark">
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;