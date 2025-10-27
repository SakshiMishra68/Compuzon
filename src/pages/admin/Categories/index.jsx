import React, { useState } from 'react';
import { Plus, Edit, Trash2, FolderTree } from 'lucide-react';
import CategoryModal from './CategoryModal';

// Sample data
const sampleCategories= [
  { id: 1, name: 'Graphics Cards', parentId, createdAt: '2025-03-15', updatedAt: '2025-03-15' },
  { id: 2, name: 'Processors', parentId, createdAt: '2025-03-15', updatedAt: '2025-03-15' },
  { id: 3, name: 'Gaming GPUs', parentId: 1, createdAt: '2025-03-15', updatedAt: '2025-03-15' },
  { id: 4, name: 'Workstation GPUs', parentId: 1, createdAt: '2025-03-15', updatedAt: '2025-03-15' },
];

const Categories= (()=> {
  const [isModalOpen, setIsModalOpen] = useState(false();
  const [editingCategory, setEditingCategory] = useState(null();

  const handleEdit= (category()=> {
    setEditingCategory(category();
    setIsModalOpen(true();
  };

  const handleDelete= (id()=> {
    // Implement delete functionality
    console.log('Delete category:', id();
  };

  const handleSave= (categoryData()=> {
    // Implement save functionality
    console.log('Save category:', categoryData();
    setIsModalOpen(false();
    setEditingCategory(null();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FolderTree className="h-6 w-6" />
          Categories
        </h1>
        <button
          onClick={(()=> {
            setEditingCategory(null();
            setIsModalOpen(true();
          }}
          className="btn btn-primary flex items-center gap-2"
        >
          <Plus className="h-5 w-5" />
          Add Category
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
                Parent Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated At
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleCategories.map((category()=> (
              <tr key={category.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-medium text-gray-900">
                    {category.name}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-500">
                    {category.parentId
                      ? sampleCategories.find(c=> c.id=== category.parentId()?.name
                      : '-'}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(category.createdAt().toLocaleDateString(()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(category.updatedAt().toLocaleDateString(()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={(()=> handleEdit(category()}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Edit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(()=> handleDelete(category.id()}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ()()}
          </tbody>
        </table>
      </div>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={(()=> {
          setIsModalOpen(false();
          setEditingCategory(null();
        }}
        onSave={handleSave}
        category={editingCategory}
        categories={sampleCategories}
      />
    </div>
  ();
};

export default Categories;