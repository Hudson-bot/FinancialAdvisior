import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPiggyBank, FaPlus, FaTrash } from 'react-icons/fa';

const BudgetGoals = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', target: 10000, saved: 3500 },
    { id: 2, name: 'Vacation', target: 5000, saved: 1200 }
  ]);
  const [newGoal, setNewGoal] = useState({ name: '', target: '' });

  const addGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    setGoals([...goals, {
      id: Date.now(),
      name: newGoal.name,
      target: Number(newGoal.target),
      saved: 0
    }]);
    setNewGoal({ name: '', target: '' });
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-[#FF9A8B] to-[#FF6B95] p-3 rounded-full">
          <FaPiggyBank className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A0E2C]">Savings Goals</h2>
      </div>

      <div className="space-y-4 mb-6">
        {goals.map(goal => (
          <div key={goal.id} className="p-4 border rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold">{goal.name}</h3>
              <button 
                onClick={() => setGoals(goals.filter(g => g.id !== goal.id))}
                className="text-gray-400 hover:text-red-500"
              >
                <FaTrash />
              </button>
            </div>
            <div className="flex justify-between text-sm mb-1">
              <span>${goal.saved.toLocaleString()} saved</span>
              <span>${goal.target.toLocaleString()} target</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-[#4FACFE] h-2 rounded-full" 
                style={{ width: `${Math.min(100, (goal.saved / goal.target) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newGoal.name}
          onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
          placeholder="Goal name"
          className="flex-1 p-2 border rounded"
        />
        <input
          type="number"
          value={newGoal.target}
          onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
          placeholder="$ Target"
          className="w-24 p-2 border rounded"
        />
        <button
          onClick={addGoal}
          className="bg-[#4FACFE] text-white p-2 rounded flex items-center justify-center"
        >
          <FaPlus />
        </button>
      </div>
    </motion.div>
  );
};

export default BudgetGoals;