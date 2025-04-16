import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaChartLine } from 'react-icons/fa';

const SavingsCalculator = ({ onClose }) => {
  const [goalAmount, setGoalAmount] = useState(10000);
  const [currentSavings, setCurrentSavings] = useState(0);
  const [monthlyContribution, setMonthlyContribution] = useState(500);
  const [interestRate, setInterestRate] = useState(3.5);
  const [result, setResult] = useState(null);

  const calculateSavings = () => {
    let months = 0;
    let total = currentSavings;
    const monthlyRate = interestRate / 100 / 12;
    
    while (total < goalAmount && months < 600) { // Limit to 50 years
      total = total * (1 + monthlyRate) + monthlyContribution;
      months++;
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    setResult({
      months,
      years,
      remainingMonths,
      total: total.toFixed(2),
      achievable: total >= goalAmount
    });
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
      >
        <div className="bg-[#D67B8A] text-white p-4 rounded-t-xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <FaChartLine className="text-xl" />
            <h3 className="font-bold">Savings Calculator</h3>
          </div>
          <button onClick={onClose} className="text-white">
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Savings Goal Amount ($)</label>
              <input
                type="number"
                value={goalAmount}
                onChange={(e) => setGoalAmount(Number(e.target.value))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D67B8A]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Current Savings ($)</label>
              <input
                type="number"
                value={currentSavings}
                onChange={(e) => setCurrentSavings(Number(e.target.value))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D67B8A]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Monthly Contribution ($)</label>
              <input
                type="number"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D67B8A]"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Annual Interest Rate (%)</label>
              <input
                type="number"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D67B8A]"
              />
            </div>

            <button
              onClick={calculateSavings}
              className="w-full bg-[#D67B8A] text-white py-3 rounded-lg hover:bg-[#C56A7A] transition font-medium"
            >
              Calculate
            </button>

            {result && (
              <div className={`mt-6 p-4 rounded-lg ${result.achievable ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                <h4 className="font-bold text-lg mb-2">
                  {result.achievable ? 'Goal Achievable!' : 'Goal Not Reached in 50 Years'}
                </h4>
                {result.achievable ? (
                  <p>You'll reach your goal in {result.years > 0 ? `${result.years} years and ` : ''}{result.remainingMonths} months.</p>
                ) : (
                  <p>At this rate, you won't reach your goal within 50 years.</p>
                )}
                <p className="mt-2">Final amount: ${result.total}</p>
                {!result.achievable && (
                  <p className="mt-2 text-sm">Consider increasing your monthly contributions.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SavingsCalculator;