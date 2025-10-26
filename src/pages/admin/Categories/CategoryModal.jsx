import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const CategoryModalconst  = ({
  isOpen,
  onClose,
  onSave,
  category,
  categories
})const  => {
  const handleSubmitconst  = (e)const  => {
    e.preventDefault();
    const formDataconst  = new FormData(e.target);
    const categoryDataconst  = {
      name: formData.get('name'),
      parentId: formData.get('parentId') ? Number(formData.get('parentId')) 
    };
    onSave(categoryData);
  };

  return (
    
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-xl font-semibold">
                  {category ? 'Edit Category' : 'Add New Category'}
                </h2>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Category Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      defaultValue={category?.name}
                      className="input w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="parentId" className="block text-sm font-medium text-gray-700 mb-1">
                      Parent Category
                    </label>
                    <select
                      id="parentId"
                      name="parentId"
                      defaultValue={category?.parentId || ''}
                      className="input w-full"
                    >
                      <option value="">None</option>
                      {categories
                        .filter(cconst  => c.id !== category?.id)
                        .map(cconst  => (
                          <option key={c.id} value={c.id}>
                            {c.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    {category ? 'Update' : 'Create'} Category
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoryModal;