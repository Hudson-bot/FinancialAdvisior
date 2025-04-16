import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaTrash, FaEdit, FaCheck, FaTimes } from "react-icons/fa";

const BudgetCategories = ({ categories, setCategories }) => {
  const [newCategory, setNewCategory] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const defaultCategories = [
    "Housing", "Transportation", "Food", 
    "Utilities", "Healthcare", "Entertainment",
    "Savings", "Debt", "Other"
  ];

  const colorGradients = [
    "from-[#FF9A8B] to-[#FF6B95]", // Housing
    "from-[#4FACFE] to-[#00F2FE]", // Transportation
    "from-[#6A11CB] to-[#2575FC]", // Food
    "from-[#FFC53D] to-[#FF9500]", // Utilities
    "from-[#30E8BF] to-[#FF8235]", // Healthcare
    "from-[#F5515F] to-[#A1051D]", // Entertainment
    "from-[#0BD850] to-[#00B09B]", // Savings
    "from-[#8E2DE2] to-[#4A00E0]", // Debt
    "from-[#D9A273] to-[#8B5A00]"  // Other
  ];

  const handleAddCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory("");
    }
  };

  const handleDeleteCategory = (category) => {
    setCategories(categories.filter(c => c !== category));
  };

  const startEditing = (category) => {
    setEditingId(category);
    setEditValue(category);
  };

  const saveEdit = () => {
    if (editValue.trim() && !categories.includes(editValue.trim())) {
      setCategories(categories.map(c => c === editingId ? editValue.trim() : c));
      setEditingId(null);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const addDefaultCategories = () => {
    const toAdd = defaultCategories.filter(c => !categories.includes(c));
    if (toAdd.length > 0) {
      setCategories([...categories, ...toAdd]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#1A0E2C]">Budget Categories</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addDefaultCategories}
          className="text-sm bg-[#F8F5FF] text-[#1A0E2C] py-1 px-3 rounded-lg hover:bg-[#E6DDFF] transition-colors"
        >
          Add Defaults
        </motion.button>
      </div>

      <div className="mb-6 flex items-center">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Add new category"
          className="flex-1 p-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#D9A273] focus:border-[#D9A273] outline-none"
          onKeyPress={(e) => e.key === 'Enter' && handleAddCategory()}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddCategory}
          className="bg-gradient-to-r from-[#D9A273] to-[#FF9A8B] text-white p-3 rounded-r-lg"
        >
          <FaPlus />
        </motion.button>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No categories added yet. Add some to get started!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              whileHover={{ y: -2 }}
              className={`bg-gradient-to-br ${colorGradients[index % colorGradients.length]} rounded-lg p-4 text-white`}
            >
              <div className="flex justify-between items-center">
                {editingId === category ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="flex-1 bg-white/20 border border-white/30 rounded px-2 py-1 text-white focus:outline-none focus:ring-1 focus:ring-white"
                    autoFocus
                    onKeyPress={(e) => e.key === 'Enter' && saveEdit()}
                  />
                ) : (
                  <span className="font-medium">{category}</span>
                )}
                
                <div className="flex space-x-2">
                  {editingId === category ? (
                    <>
                      <button 
                        onClick={saveEdit}
                        className="hover:text-green-200 transition-colors"
                      >
                        <FaCheck />
                      </button>
                      <button 
                        onClick={cancelEdit}
                        className="hover:text-red-200 transition-colors"
                      >
                        <FaTimes />
                      </button>
                    </>
                  ) : (
                    <>
                      <button 
                        onClick={() => startEditing(category)}
                        className="hover:text-yellow-200 transition-colors"
                      >
                        <FaEdit />
                      </button>
                      <button 
                        onClick={() => handleDeleteCategory(category)}
                        className="hover:text-red-200 transition-colors"
                      >
                        <FaTrash />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p>Tip: Categories are used to organize your budgets and expenses.</p>
      </div>
    </motion.div>
  );
};

export default BudgetCategories;