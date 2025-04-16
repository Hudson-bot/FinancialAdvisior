import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartLine, 
  FaRobot, 
  FaCoins, 
  FaShieldAlt,
  FaGlobeAmericas,
  FaPercentage,
  FaMoneyBillWave,
  FaLightbulb,
  FaPiggyBank,
  FaCalculator
} from 'react-icons/fa';
import InvestmentAI from '../components/investment/InvestmentAI';
import InvestmentPortfolio from '../components/investment/InvestmentPortfolio';
import SectorPerformance from '../components/investment/SectorPerformance';
import IncomeAllocator from '../components/investment/IncomeAllocator';
import RiskAssessment from '../components/investment/RiskAssessment';

// New color palette from your screenshot
const colors = {
  primary: '#1E88E5',    // Blue
  secondary: '#00ACC1',  // Teal
  accent: '#5C6BC0',     // Indigo
  background: '#E3F2FD', // Light blue
  textDark: '#263238',   // Dark gray
  textLight: '#ECEFF1'   // Light gray
};

const Investments = () => {
  const [showAI, setShowAI] = useState(false);
  const [riskProfile, setRiskProfile] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState(5000);

  // Educational content
  const investmentConcepts = [
    {
      title: "Compound Growth",
      icon: <FaChartLine className="text-3xl" />,
      description: "Investing early allows your money to grow exponentially over time through compounding returns.",
      formula: "A = P(1 + r)^t"
    },
    {
      title: "Diversification",
      icon: <FaCoins className="text-3xl" />,
      description: "Spreading investments across different assets reduces risk without sacrificing potential returns.",
      tip: "Aim for at least 3 different asset classes"
    },
    {
      title: "Risk vs Reward",
      icon: <FaShieldAlt className="text-3xl" />,
      description: "Higher potential returns usually come with higher volatility. Find your comfort zone.",
      example: "Stocks (high risk) vs Bonds (low risk)"
    }
  ];

  const investmentTypes = [
    {
      name: "Stocks",
      description: "Ownership shares in public companies",
      icon: <FaChartLine className="text-2xl" style={{ color: colors.primary }} />,
      risk: "Medium-High"
    },
    {
      name: "Bonds",
      description: "Fixed-income government/corporate debt",
      icon: <FaShieldAlt className="text-2xl" style={{ color: colors.secondary }} />,
      risk: "Low"
    },
    {
      name: "ETFs",
      description: "Baskets of securities tracking an index",
      icon: <FaCoins className="text-2xl" style={{ color: colors.accent }} />,
      risk: "Medium"
    },
    {
      name: "REITs",
      description: "Real estate investment trusts",
      icon: <FaGlobeAmericas className="text-2xl" style={{ color: colors.primary }} />,
      risk: "Medium"
    },
    {
      name: "Crypto",
      description: "Digital currency investments",
      icon: <FaPercentage className="text-2xl" style={{ color: colors.secondary }} />,
      risk: "High"
    }
  ];

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
            <div className="bg-gradient-from-[#6A11CB] to-[#2575FC] p-5 rounded-full shadow-lg">
              <FaChartLine className="text-white text-4xl" />
            </div>
          <h1 className="text-4xl font-bold mb-4" style={{ color: colors.textDark }}>
            Smart <span style={{ color: colors.primary }}>Investment</span> Strategies
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: colors.textDark }}>
            Build wealth through intelligent portfolio allocation
          </p>
        </motion.div>

        {/* Educational Concepts */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8" style={{ backgroundColor: colors.background }}>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{ color: colors.primary }}>
            <FaLightbulb /> Core Investment Principles
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {investmentConcepts.map((concept, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-3 mb-4" style={{ color: colors.primary }}>
                  {concept.icon}
                  <h3 className="text-xl font-bold">{concept.title}</h3>
                </div>
                <p className="mb-3" style={{ color: colors.textDark }}>{concept.description}</p>
                {concept.formula && (
                  <div className="p-2 bg-blue-50 rounded text-sm font-mono" style={{ color: colors.primary }}>
                    {concept.formula}
                  </div>
                )}
                {concept.tip && (
                  <p className="text-sm mt-2 italic" style={{ color: colors.secondary }}>
                    {concept.tip}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Income Allocator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <IncomeAllocator />
        </motion.div>

        {/* Risk Assessment */}
        <RiskAssessment 
          setRiskProfile={setRiskProfile} 
          investmentAmount={investmentAmount}
          setInvestmentAmount={setInvestmentAmount}
        />

        {/* Investment Portfolio */}
        {riskProfile && (
          <InvestmentPortfolio
            riskProfile={riskProfile} 
            investmentAmount={investmentAmount} 
          />
        )}

        {/* Market Insights */}
        <SectorPerformance />

        {/* Investment Types */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6" style={{ color: colors.primary }}>
            Investment Vehicles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {investmentTypes.map((type, index) => (
              <motion.div
                key={index}
                className="p-4 border rounded-lg hover:shadow-md transition cursor-pointer"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  {type.icon}
                  <h3 className="font-bold">{type.name}</h3>
                </div>
                <p className="text-sm mb-2" style={{ color: colors.textDark }}>{type.description}</p>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  type.risk === "Low" ? "bg-teal-100 text-teal-800" :
                  type.risk === "High" ? "bg-red-100 text-red-800" :
                  "bg-blue-100 text-blue-800"
                }`}>
                  {type.risk} Risk
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating AI Button */}
        <div className="fixed bottom-6 right-6 z-40">
          <motion.button
            onClick={() => setShowAI(true)}
            className="w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-colors"
            style={{ backgroundColor: colors.primary }}
            whileHover={{ scale: 1.1, backgroundColor: colors.secondary }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open investment assistant"
          >
            <FaRobot className="text-2xl text-white" />
          </motion.button>
        </div>

        {/* AI Modal */}
        {showAI && (
          <InvestmentAI 
            onClose={() => setShowAI(false)}
            riskProfile={riskProfile}
            investmentAmount={investmentAmount}
          />
        )}
      </div>
    </div>
  );
};

export default Investments;