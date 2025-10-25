import React, { useState } from 'react';
import { Plus, Edit, Trash2, Tag } from 'lucide-react';
import DiscountModal from './DiscountModal';

// Sample data
const sampleDiscounts = [
  {
    id: 1,
    discountName: 'Summer Sale',
    discountPercent: 20,
    startDate: '2025-06-01',
    endDate: '2025-06-30',
    createdAt: '2025-03-15',
    updatedAt: '2025-03-15'
  },
  {
    id: 2,
    discountName: 'Black Friday',
    discountPercent: 30,
    startDate: '2025-11-25',
    endDate: '2025-11-30',
    createdAt: '2025-03-15',
    updatedAt: '2025-03-15'
  },
];

const Discounts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingDiscount, setEditingDiscount] = useState<any>(null);

  const handleEdit = (discount: any) => {
    setEditingDiscount(discount);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    // Implement delete functionality
    console.log('Delete discount:', id);
  };

  const handleSave = (discountData: any) => {
    // Implement save functionality
    console.log('Save discount:', discountData);
    setIsModalOpen(false);
    setEditingDiscount(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Tag className="h-6 w-6" />
          Discounts
        </h1>
        <button
          onClick={() => {
            setEditingDiscount(null);
            setIsModalOpen(true);
          }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Discount
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Discount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Duration
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleDiscounts.map((discount) => {
              const now = new Date();
              const startDate = new Date(discount.startDate);
              const endDate = new Date(discount.endDate);
              const status = now < startDate ? 'Upcoming' : now > endDate ? 'Expired' : 'Active';

              return (
                <tr key={discount.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm font-medium text-gray-900">
                      {discount.discountName}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {discount.discountPercent}%
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-500">
                      {new Date(discount.startDate).toLocaleDateString()} - {new Date(discount.endDate).toLocaleDateString()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      status === 'Active' ? 'bg-green-100 text-green-800' :
                      status === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(discount)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(discount.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <DiscountModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingDiscount(null);
        }}
        onSave={handleSave}
        discount={editingDiscount}
      />
    </div>
  );
};

export default Discounts;