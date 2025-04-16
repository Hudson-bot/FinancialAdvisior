import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList } from 'react-icons/fa';

const BudgetSummary = ({ monthlyIncome, allocations }) => {
  const totalAllocated = Object.values(allocations).reduce((sum, val) => sum + val, 0);
  const remaining = 100 - totalAllocated;

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-[#D9A273] to-[#FF9A8B] p-3 rounded-full">
          <FaClipboardList className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A0E2C]">Budget Summary</h2>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Monthly Income:</span>
          <span>${monthlyIncome.toLocaleString()}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total Allocated:</span>
          <span>{totalAllocated}%</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Remaining:</span>
          <span className={remaining < 0 ? 'text-red-500' : 'text-green-500'}>
            {remaining}%
          </span>
        </div>
        <div className="pt-4 border-t">
          <div className="flex justify-between font-bold">
            <span>Available to Spend:</span>
            <span>${(monthlyIncome * remaining / 100).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BudgetSummary;