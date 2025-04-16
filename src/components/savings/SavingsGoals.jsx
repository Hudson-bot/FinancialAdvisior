import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaPlus, FaTrash, FaEdit } from 'react-icons/fa';

const SavingsGoals = () => {
  const [goals, setGoals] = useState([
    { id: 1, name: 'Emergency Fund', target: 10000, saved: 3500, deadline: '2024-12-31' },
    { id: 2, name: 'Vacation', target: 5000, saved: 1200, deadline: '2024-08-15' },
    { id: 3, name: 'New Car', target: 25000, saved: 8000, deadline: '2025-06-30' }
  ]);
  const [isAdding, setIsAdding] = useState(false);
  const [newGoal, setNewGoal] = useState({
    name: '',
    target: '',
    saved: '',
    deadline: ''
  });

  const addGoal = () => {
    if (!newGoal.name || !newGoal.target) return;
    
    const goal = {
      id: Date.now(),
      name: newGoal.name,
      target: Number(newGoal.target),
      saved: Number(newGoal.saved) || 0,
      deadline: newGoal.deadline || null
    };
    
    setGoals([...goals, goal]);
    setNewGoal({ name: '', target: '', saved: '', deadline: '' });
    setIsAdding(false);
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  const updateSaved = (id, amount) => {
    setGoals(goals.map(goal => 
      goal.id === id ? { ...goal, saved: Math.max(0, amount) } : goal
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-[#1A0E2C] flex items-center gap-2">
          <FaBullseye className="text-[#D67B8A]" /> My Savings Goals
        </h2>
        <button 
          onClick={() => setIsAdding(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#4B1F52] text-white rounded-lg hover:bg-[#3A183F] transition"
        >
          <FaPlus /> Add Goal
        </button>
      </div>

      {isAdding && (
        <motion.div 
          className="mb-6 p-4 bg-gray-50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h3 className="font-medium mb-3">Add New Goal</h3>
          <div className="grid gap-4">
            <input
              type="text"
              placeholder="Goal name"
              value={newGoal.name}
              onChange={(e) => setNewGoal({...newGoal, name: e.target.value})}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Target amount ($)"
              value={newGoal.target}
              onChange={(e) => setNewGoal({...newGoal, target: e.target.value})}
              className="p-2 border rounded"
            />
            <input
              type="number"
              placeholder="Already saved ($)"
              value={newGoal.saved}
              onChange={(e) => setNewGoal({...newGoal, saved: e.target.value})}
              className="p-2 border rounded"
            />
            <input
              type="date"
              placeholder="Deadline"
              value={newGoal.deadline}
              onChange={(e) => setNewGoal({...newGoal, deadline: e.target.value})}
              className="p-2 border rounded"
            />
            <div className="flex gap-2">
              <button
                onClick={addGoal}
                className="flex-1 bg-[#D67B8A] text-white py-2 rounded hover:bg-[#C56A7A] transition"
              >
                Save Goal
              </button>
              <button
                onClick={() => setIsAdding(false)}
                className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      )}

      <div className="space-y-4">
        {goals.length === 0 ? (
          <p className="text-gray-500 text-center py-4">No savings goals yet. Add your first goal!</p>
        ) : (
          goals.map(goal => (
            <motion.div 
              key={goal.id}
              className="border rounded-lg p-4 hover:shadow-md transition"
              whileHover={{ y: -2 }}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg">{goal.name}</h3>
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-[#D67B8A]">
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => deleteGoal(goal.id)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
              
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>${goal.saved.toLocaleString()} saved</span>
                  <span>${goal.target.toLocaleString()} target</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-[#4B1F52] h-2.5 rounded-full" 
                    style={{ width: `${Math.min(100, (goal.saved / goal.target) * 100)}%` }}
                  ></div>
                </div>
                <div className="text-right text-xs mt-1">
                  {Math.round((goal.saved / goal.target) * 100)}% complete
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Add to savings</label>
                  <div className="flex">
                    <input
                      type="number"
                      placeholder="Amount"
                      onChange={(e) => updateSaved(goal.id, goal.saved + Number(e.target.value))}
                      className="flex-1 p-2 border rounded-l"
                    />
                    <button className="bg-[#D67B8A] text-white px-3 rounded-r">
                      Add
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Deadline</label>
                  <div className="p-2 bg-gray-100 rounded">
                    {goal.deadline || 'No deadline'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default SavingsGoals;