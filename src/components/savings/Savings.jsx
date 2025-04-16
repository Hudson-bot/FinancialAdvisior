import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPiggyBank, 
  FaCheckCircle, 
  FaChartLine, 
  FaCoins, 
  FaMoneyBillWave, 
  FaPercentage, 
  FaInfoCircle,
  FaRobot
} from 'react-icons/fa';
import SavingsAI from './SavingsAI';
import SavingsCalculator from './SavingsCalculator';
import SavingsGoals from './SavingsGoals';

const Savings = () => {
  const [showAI, setShowAI] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [savingsGoal, setSavingsGoal] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");

  const tips = [
    "Set clear savings goals (short-term & long-term).",
    "Automate your savings every month.",
    "Track expenses to identify unnecessary spending.",
    "Create an emergency fund with 3-6 months' expenses.",
    "Take advantage of high-interest savings accounts.",
    "Use the 50/30/20 rule (needs/wants/savings).",
    "Round up purchases and save the difference.",
    "Negotiate bills and subscriptions regularly."
  ];

  const strategies = [
    {
      title: "The Snowball Method",
      description: "Pay off smallest debts first while making minimum payments on others, then roll payments to next debt.",
      icon: <FaMoneyBillWave className="text-3xl text-[#4B1F52]" />,
      details: "This psychological approach gives quick wins to stay motivated. As each small debt is paid off, you gain momentum to tackle larger debts."
    },
    {
      title: "High-Yield Accounts",
      description: "Earn 10-20x more interest compared to traditional savings accounts.",
      icon: <FaPercentage className="text-3xl text-[#9A4E40]" />,
      details: "Online banks often offer significantly higher APYs (0.5-4% vs 0.01% at traditional banks) with FDIC insurance. Consider accounts with no monthly fees and low minimum balances."
    },
    {
      title: "Automated Transfers",
      description: "Set up automatic transfers to savings on payday before you can spend it.",
      icon: <FaCoins className="text-3xl text-[#D67B8A]" />,
      details: "Pay yourself first! Even $25/week becomes $1,300/year. Increase transfers with raises. This 'set and forget' method builds savings without willpower."
    }
  ];

  const handleCalculatorClick = () => {
    setShowCalculator(true);
    setShowAI(false);
  };

  return (
    <section className="mt-5 min-h-screen bg-gradient-to-b from-white to-[#F8F5FF] px-6 py-20 relative">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex justify-center mb-6"
            whileHover={{ scale: 1.1 }}
          >
            <div className="bg-gradient-to-br from-[#FF9A8B] to-[#FF6B95] p-5 rounded-full shadow-lg">
              <FaPiggyBank className="text-white text-4xl" />
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#1A0E2C] mb-4">
            Smart <span className="text-[#D67B8A]">Saving</span> Strategies
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Master your money with proven techniques to build financial security and achieve your goals faster.
          </p>
        </motion.div>

        {/* Quick Action Button (Calculator only now) */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.button
            onClick={handleCalculatorClick}
            className="flex items-center gap-2 px-6 py-3 bg-[#D67B8A] text-white rounded-lg font-medium"
            whileHover={{ scale: 1.05 }}
          >
            <FaChartLine /> Savings Calculator
          </motion.button>
        </div>

        {/* Calculator Modal */}
        {showCalculator && <SavingsCalculator onClose={() => setShowCalculator(false)} />}

        {/* Educational Content Section */}
        <div className="mb-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-[#1A0E2C] mb-6 flex items-center gap-3">
            <FaInfoCircle className="text-[#4B1F52]" /> The Psychology of Saving
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xl font-semibold text-[#9A4E40] mb-3">Why We Struggle to Save</h3>
              <p className="text-gray-700 mb-4">
                Humans are wired for immediate gratification—a survival mechanism that works against modern financial health. 
                This "present bias" makes us value $100 today more than $150 next year.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#D67B8A] mt-1 mr-2 flex-shrink-0" />
                  <span>Solution: Make saving automatic to bypass willpower</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#D67B8A] mt-1 mr-2 flex-shrink-0" />
                  <span>Visualize future rewards with progress trackers</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-[#D67B8A] mt-1 mr-2 flex-shrink-0" />
                  <span>Break large goals into smaller milestones</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-[#9A4E40] mb-3">The Compound Effect</h3>
              <p className="text-gray-700 mb-4">
                Einstein called compound interest "the eighth wonder of the world." Small, consistent savings grow exponentially over time:
              </p>
              <div className="bg-[#F8F5FF] p-4 rounded-lg border border-[#4B1F52]/20">
                <p className="font-medium mb-2">$200/month at 5% interest becomes:</p>
                <ul className="space-y-1 text-sm">
                  <li className="flex justify-between"><span>5 years:</span> <span className="font-semibold">$13,618</span></li>
                  <li className="flex justify-between"><span>10 years:</span> <span className="font-semibold">$31,027</span></li>
                  <li className="flex justify-between"><span>20 years:</span> <span className="font-semibold">$82,552</span></li>
                  <li className="flex justify-between"><span>30 years:</span> <span className="font-semibold">$166,451</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Savings Goals Component */}
        <SavingsGoals />

        {/* Savings Strategies Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#1A0E2C] mb-8 text-center">Advanced Savings Strategies</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {strategies.map((strategy, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {strategy.icon}
                  <h3 className="text-xl font-bold text-[#1A0E2C]">{strategy.title}</h3>
                </div>
                <p className="text-gray-700 mb-4">{strategy.description}</p>
                <div className="p-3 bg-[#F8F5FF] rounded-lg text-sm">
                  <p className="text-[#4B1F52]">{strategy.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Tips Section */}
        <div className="bg-[#4B1F52] text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaPiggyBank /> 8 Quick Wins to Boost Savings
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="bg-[#D67B8A] rounded-full p-1 mt-1 flex-shrink-0">
                  <FaCheckCircle className="text-white text-sm" />
                </div>
                <p>{tip}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white/10 p-4 rounded-lg">
            <h3 className="font-bold mb-2">The 50/30/20 Rule Explained</h3>
            <p className="mb-3 text-white/90">
              Allocate 50% of income to needs (housing, food, utilities), 30% to wants (entertainment, dining out), 
              and 20% to savings/debt repayment. Adjust percentages as needed—even 10% savings makes a difference.
            </p>
            <div className="flex gap-4 text-sm">
              <div className="flex-1 bg-[#9A4E40]/30 p-3 rounded">
                <div className="h-2 bg-[#D67B8A] mb-1" style={{ width: '50%' }}></div>
                <p>50% Needs</p>
              </div>
              <div className="flex-1 bg-[#9A4E40]/30 p-3 rounded">
                <div className="h-2 bg-[#D67B8A] mb-1" style={{ width: '30%' }}></div>
                <p>30% Wants</p>
              </div>
              <div className="flex-1 bg-[#9A4E40]/30 p-3 rounded">
                <div className="h-2 bg-[#D67B8A] mb-1" style={{ width: '20%' }}></div>
                <p>20% Savings</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-[#1A0E2C] mb-4">Ready to Transform Your Financial Future?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Small steps today lead to big changes tomorrow. Start with one strategy and build momentum.
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              onClick={() => setShowAI(true)}
              className="flex items-center gap-2 px-6 py-3 bg-[#4B1F52] text-white rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <FaRobot /> Get Personalized Advice
            </motion.button>
            <motion.button
              onClick={handleCalculatorClick}
              className="flex items-center gap-2 px-6 py-3 border-2 border-[#4B1F52] text-[#4B1F52] rounded-lg font-medium"
              whileHover={{ scale: 1.05 }}
            >
              <FaChartLine /> Run Your Numbers
            </motion.button>
          </div>
        </motion.div>

        {/* Floating AI Button */}
        <div className="fixed bottom-6 right-6 z-50">
          <motion.button
            onClick={() => setShowAI(true)}
            className="w-16 h-16 bg-[#4B1F52] text-white rounded-full shadow-xl flex items-center justify-center hover:bg-[#3A183F] transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open savings assistant"
          >
            <FaRobot className="text-2xl" />
          </motion.button>
        </div>

        {/* AI Modal */}
        {showAI && <SavingsAI onClose={() => setShowAI(false)} />}
      </div>
    </section>
  );
};

export default Savings;