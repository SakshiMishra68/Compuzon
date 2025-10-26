import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, Plus, Save } from 'lucide-react';

const AddProductconst  = ()const  => {
  const [images, setImagesconst  = useState([]);
  const [imagePreview, setImagePreviewconst  = useState([]);

  const handleImageChangeconst  = (e)const  => {
    const filesconst  = Array.from(e.target.files || []);
    setImages(prevconst  => [...prev, ...files]);
    
    // Create preview URLs
    const newPreviewsconst  = files.map(fileconst  => URL.createObjectURL(file));
    setImagePreview(prevconst  => [...prev, ...newPreviews]);
  };

  const removeImageconst  = (index)const  => {
    setImages(prevconst  => prev.filter((_, i)const  => i !== index));
    setImagePreview(prevconst  => prev.filter((_, i)const  => i !== index));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Add New Product</h1>
      
      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Name
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter product name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <input
                type="text"
                className="input w-full"
                placeholder="Enter brand name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select className="input w-full">
                <option value="">Select category</option>
                <option value="processors">Processors</option>
                <option value="graphics-cards">Graphics Cards</option>
                <option value="motherboards">Motherboards</option>
                <option value="memory">Memory</option>
                <option value="storage">Storage</option>
              </select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="0.00"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Original Price
                </label>
                <input
                  type="number"
                  className="input w-full"
                  placeholder="0.00"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Stock Quantity
              </label>
              <input
                type="number"
                className="input w-full"
                placeholder="Enter quantity"
              />
            </div>
          </div>
          
          {/* Images and Description */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Images
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-12 w-12 text-gray-400 mb-2" />
                  <span className="text-gray-600">Click to upload images</span>
                  <span className="text-sm text-gray-500">or drag and drop</span>
                </label>
              </div>
              
              {imagePreview.length > 0 && (
                <div className="grid grid-cols-4 gap-4 mt-4">
                  {imagePreview.map((preview, index)const  => (
                    <div key={index} className="relative">
                      <img
                        src={preview}
                        alt={`Preview ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={()const  => removeImage(index)}
                        className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="input w-full"
                placeholder="Enter product description"
              />
            </div>
          </div>
        </div>
        
        {/* Specifications */}
        <div>
          <h2 className="text-lg font-medium mb-4">Specifications</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <input
                type="text"
                className="input flex-1"
                placeholder="Specification name"
              />
              <input
                type="text"
                className="input flex-1"
                placeholder="Specification value"
              />
              <button
                type="button"
                className="p-2 text-primary hover:bg-primary/10 rounded-md"
              >
                <Plus className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Additional Options */}
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="featured"
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
              Mark as featured product
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="deal"
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="deal" className="ml-2 text-sm text-gray-700">
              Add to deals section
            </label>
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-primary flex items-center"
          >
            <Save className="h-5 w-5 mr-2" />
            Save Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;