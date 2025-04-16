import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMoneyBillWave, 
  FaChartPie, 
  FaClipboardList,
  FaPiggyBank,
  FaRobot,
  FaCalculator,
  FaLightbulb,
  FaUniversity
} from 'react-icons/fa';
import BudgetAllocator from '../components/budget/BudgetAllocator';
import BudgetChart from '../components/budget/BudgetChart';
import BudgetGoals from '../components/budget/BudgetGoals';
import BudgetSummary from '../components/budget/BudgetSummary';
import BudgetAI from '../components/budget/BudgetAI';

const Budget = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(5000);
  const [allocations, setAllocations] = useState({
    housing: 25,
    food: 15,
    transportation: 10,
    utilities: 8,
    entertainment: 12,
    savings: 20,
    other: 10
  });
  const [showAI, setShowAI] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [calcValue, setCalcValue] = useState('');

  const handleCalcInput = (value) => {
    setCalcValue(prev => prev + value);
  };

  const calculateResult = () => {
    try {
      setCalcValue(eval(calcValue).toString());
    } catch {
      setCalcValue('Error');
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-b from-white to-[#F8F5FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#1A0E2C] mb-4">
            Smart <span className="text-[#4FACFE]">Budget</span> Planner
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Take control of your finances with our intuitive budgeting tools
          </p>
        </motion.div>

        {/* Educational Content Section - Now at the top */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <FaLightbulb className="text-[#D9A273] text-2xl" />
            <h3 className="text-xl font-bold text-[#1A0E2C]">Budgeting Principles</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#F8F5FF] to-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#6A11CB] p-2 rounded-full">
                  <FaUniversity className="text-white" />
                </div>
                <h4 className="font-bold text-[#1A0E2C]">50/30/20 Rule</h4>
              </div>
              <p className="text-gray-600">
                Allocate 50% of income to needs (housing, utilities), 30% to wants (entertainment), 
                and 20% to savings and debt repayment. This balanced approach ensures financial health.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F5FF] to-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#FF9A8B] p-2 rounded-full">
                  <FaPiggyBank className="text-white" />
                </div>
                <h4 className="font-bold text-[#1A0E2C]">Pay Yourself First</h4>
              </div>
              <p className="text-gray-600">
                Automate savings transfers immediately after payday. Treat savings like a non-negotiable 
                bill to build wealth consistently.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#F8F5FF] to-white p-5 rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#4FACFE] p-2 rounded-full">
                  <FaChartPie className="text-white" />
                </div>
                <h4 className="font-bold text-[#1A0C2C]">Zero-Based Budgeting</h4>
              </div>
              <p className="text-gray-600">
                Assign every dollar a purpose. Income minus expenses should equal zero, ensuring 
                complete control over your money flow.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <BudgetAllocator 
              monthlyIncome={monthlyIncome}
              setMonthlyIncome={setMonthlyIncome}
              allocations={allocations}
              setAllocations={setAllocations}
            />
            
            <BudgetGoals />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <BudgetChart allocations={allocations} />
            <BudgetSummary 
              monthlyIncome={monthlyIncome}
              allocations={allocations}
            />

            {/* Calculator Section */}
            <motion.div 
              className="bg-white rounded-xl shadow-lg p-6 border border-gray-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-[#1A0E2C] flex items-center gap-2">
                  <FaCalculator className="text-[#D9A273]" />
                  Quick Calculator
                </h3>
                <button 
                  onClick={() => setShowCalculator(!showCalculator)}
                  className="text-sm text-[#6A11CB] hover:underline"
                >
                  {showCalculator ? 'Hide' : 'Show'}
                </button>
              </div>

              {showCalculator && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={calcValue}
                    readOnly
                    className="w-full p-3 border border-gray-300 rounded-lg text-right text-xl font-mono"
                  />
                  <div className="grid grid-cols-4 gap-2">
                    {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn) => (
                      <button
                        key={btn}
                        onClick={() => btn === '=' ? calculateResult() : handleCalcInput(btn)}
                        className={`p-3 rounded-lg font-medium ${
                          btn === '=' 
                            ? 'bg-[#6A11CB] text-white' 
                            : 'bg-[#F8F5FF] text-[#1A0E2C] hover:bg-[#E6DDFF]'
                        }`}
                      >
                        {btn}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setCalcValue('')}
                    className="w-full p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200"
                  >
                    Clear
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Floating AI Button */}
        <motion.button
          onClick={() => setShowAI(true)}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-[#6A11CB] to-[#2575FC] text-white rounded-full p-5 shadow-xl hover:shadow-2xl transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <FaRobot className="text-2xl" />
          <span className="sr-only">Open Budget AI</span>
        </motion.button>

        {/* Budget AI Modal */}
        {showAI && (
          <BudgetAI onClose={() => setShowAI(false)} />
        )}
      </div>
    </div>
  );
};

export default Budget;