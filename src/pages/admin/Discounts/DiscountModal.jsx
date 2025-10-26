import React from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


const DiscountModalconst  = ({
  isOpen,
  onClose,
  onSave,
  discount
})const  => {
  const handleSubmitconst  = (e)const  => {
    e.preventDefault();
    const formDataconst  = new FormData(e.target);
    const discountDataconst  = {
      discountName: formData.get('discountName'),
      discountPercent: Number(formData.get('discountPercent')),
      startDate: formData.get('startDate'),
      endDate: formData.get('endDate'),
    };
    onSave(discountData);
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
                  {discount ? 'Edit Discount' : 'Add New Discount'}
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
                    <label htmlFor="discountName" className="block text-sm font-medium text-gray-700 mb-1">
                      Discount Name
                    </label>
                    <input
                      type="text"
                      id="discountName"
                      name="discountName"
                      defaultValue={discount?.discountName}
                      className="input w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="discountPercent" className="block text-sm font-medium text-gray-700 mb-1">
                      Discount Percentage
                    </label>
                    <input
                      type="number"
                      id="discountPercent"
                      name="discountPercent"
                      min="0"
                      max="100"
                      defaultValue={discount?.discountPercent}
                      className="input w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      defaultValue={discount?.startDate}
                      className="input w-full"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      id="endDate"
                      name="endDate"
                      defaultValue={discount?.endDate}
                      className="input w-full"
                      required
                    />
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
                    {discount ? 'Update' : 'Create'} Discount
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

export default DiscountModal;