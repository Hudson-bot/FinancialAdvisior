import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaShieldAlt, FaCoins } from 'react-icons/fa';

const RiskAssessment = ({ setRiskProfile, investmentAmount, setInvestmentAmount }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  
  const questions = [
    {
      id: 1,
      question: "How would you react if your portfolio dropped 20% in a month?",
      options: [
        { text: "Sell everything to prevent further loss", value: "conservative" },
        { text: "Hold and wait for recovery", value: "moderate" },
        { text: "Buy more at the lower price", value: "aggressive" }
      ],
      icon: <FaShieldAlt className="text-indigo-500" />
    },
    {
      id: 2,
      question: "Your investment time horizon is:",
      options: [
        { text: "Less than 3 years", value: "conservative" },
        { text: "3-10 years", value: "moderate" },
        { text: "10+ years", value: "aggressive" }
      ],
      icon: <FaChartLine className="text-indigo-500" />
    },
    {
      id: 3,
      question: "What's your primary investment goal?",
      options: [
        { text: "Preserve my capital", value: "conservative" },
        { text: "Balance growth and safety", value: "moderate" },
        { text: "Maximize growth potential", value: "aggressive" }
      ],
      icon: <FaCoins className="text-indigo-500" />
    }
  ];

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate final risk profile
      const riskCounts = newAnswers.reduce((acc, val) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
      }, {});
      
      // Determine majority answer
      let finalProfile = 'moderate'; // default
      if (riskCounts.aggressive > riskCounts.conservative && riskCounts.aggressive > riskCounts.moderate) {
        finalProfile = 'aggressive';
      } else if (riskCounts.conservative > riskCounts.aggressive && riskCounts.conservative > riskCounts.moderate) {
        finalProfile = 'conservative';
      }
      
      setRiskProfile(finalProfile);
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6 mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Assessment Profile</h2>
      
      {/* Investment Amount Input */}
      <div className="mb-8">
        <label className="block text-gray-700 font-medium mb-2">Investment Amount ($)</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          min="100"
          step="100"
        />
      </div>
      
      {/* Risk Assessment Questions */}
      {currentQuestion < questions.length ? (
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-4">
            {questions[currentQuestion].icon}
            <h3 className="text-lg font-semibold text-gray-900">
              {questions[currentQuestion].question}
            </h3>
          </div>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswer(option.value)}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
                whileHover={{ x: 5 }}
              >
                {option.text}
              </motion.button>
            ))}
          </div>
          
          <div className="text-sm text-gray-500 mt-2">
            Question {currentQuestion + 1} of {questions.length}
          </div>
        </div>
      ) : (
        <div className="text-center py-4">
          <div className="text-green-500 text-4xl mb-3">✓</div>
          <h3 className="text-xl font-bold mb-2">Assessment Complete!</h3>
          <p className="text-gray-600">Your portfolio recommendations are ready.</p>
        </div>
      )}
    </motion.div>
  );
};

export default RiskAssessment;