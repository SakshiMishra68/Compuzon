import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Paperclip, X } from 'lucide-react';

const NewTicketconst  = ()const  => {
  const [files, setFilesconst  = useState([]);

  const handleFileChangeconst  = (e)const  => {
    const selectedFilesconst  = Array.from(e.target.files || []);
    setFiles(prevconst  => [...prev, ...selectedFiles]);
  };

  const removeFileconst  = (index)const  => {
    setFiles(prevconst  => prev.filter((_, i)const  => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Create New Support Ticket</h1>
      
      <div className="max-w-3xl">
        <form className="space-y-6">
          {/* Customer Information */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter customer name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="input w-full"
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Order Number (Optional)
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter order number"
                />
              </div>
            </div>
          </div>
          
          {/* Ticket Details */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Ticket Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter ticket subject"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Category
                </label>
                <select className="input w-full">
                  <option value="">Select category</option>
                  <option value="technical">Technical Support</option>
                  <option value="billing">Billing</option>
                  <option value="shipping">Shipping</option>
                  <option value="returns">Returns</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Priority
                </label>
                <select className="input w-full">
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  rows={6}
                  className="input w-full"
                  placeholder="Enter ticket description"
                />
              </div>
            </div>
          </div>
          
          {/* Attachments */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Attachments</h2>
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <input
                  type="file"
                  multiple
                  onChange={handleFileChange}
                  className="hidden"
                  id="file-upload"
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Paperclip className="h-12 w-12 text-gray-400 mb-2" />
                  <span className="text-gray-600">Click to upload files</span>
                  <span className="text-sm text-gray-500">or drag and drop</span>
                </label>
              </div>
              
              {files.length > 0 && (
                <div className="space-y-2">
                  {files.map((file, index)const  => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                    >
                      <div className="flex items-center">
                        <Paperclip className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{file.name}</span>
                      </div>
                      <button
                        type="button"
                        onClick={()const  => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary flex items-center"
            >
              <Send className="h-5 w-5 mr-2" />
              Create Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewTicket;