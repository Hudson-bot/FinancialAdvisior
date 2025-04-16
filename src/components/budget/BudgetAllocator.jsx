import React from 'react';
import { motion } from 'framer-motion';
import { FaMoneyBillWave } from 'react-icons/fa';

const BudgetAllocator = ({ monthlyIncome, setMonthlyIncome, allocations, setAllocations }) => {
  const categories = [
    { name: 'Housing', key: 'housing', color: '#4FACFE' },
    { name: 'Food', key: 'food', color: '#00F2FE' },
    { name: 'Transportation', key: 'transportation', color: '#6A11CB' },
    { name: 'Utilities', key: 'utilities', color: '#2575FC' },
    { name: 'Entertainment', key: 'entertainment', color: '#FF9A8B' },
    { name: 'Savings', key: 'savings', color: '#FF6B95' },
    { name: 'Other', key: 'other', color: '#D9A273' }
  ];

  const handleAllocationChange = (key, value) => {
    const newValue = Math.max(0, Math.min(100, Number(value)));
    setAllocations(prev => ({
      ...prev,
      [key]: newValue
    }));
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-[#4FACFE] to-[#00F2FE] p-3 rounded-full">
          <FaMoneyBillWave className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A0E2C]">Budget Allocator</h2>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Monthly Income ($)</label>
        <input
          type="number"
          value={monthlyIncome}
          onChange={(e) => setMonthlyIncome(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4FACFE]"
        />
      </div>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.key} className="flex items-center gap-4">
            <div 
              className="w-4 h-4 rounded-full" 
              style={{ backgroundColor: category.color }}
            />
            <span className="w-32 font-medium">{category.name}</span>
            <input
              type="range"
              min="0"
              max="100"
              value={allocations[category.key]}
              onChange={(e) => handleAllocationChange(category.key, e.target.value)}
              className="flex-1"
              style={{ accentColor: category.color }}
            />
            <input
              type="number"
              value={allocations[category.key]}
              onChange={(e) => handleAllocationChange(category.key, e.target.value)}
              className="w-20 p-2 border rounded text-center"
            />
            <span className="w-20 text-right">
              ${(monthlyIncome * allocations[category.key] / 100).toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BudgetAllocator;