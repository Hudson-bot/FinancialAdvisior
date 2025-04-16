import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPiggyBank, 
  FaChartLine, 
  FaCalculator,
  FaHandHoldingUsd,
  FaShieldAlt,
  FaUniversity
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services1 = () => {
  return (
    <div className="mt-16 min-h-screen bg-gradient-to-b from-white to-[#F8F5FF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-[#1A0E2C] mb-4">
            Our <span className="text-[#4FACFE]">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive solutions to help you achieve financial wellness
          </p>
        </motion.div>

        {/* Theory Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-[#1A0E2C] mb-6 flex items-center gap-3">
            <FaUniversity className="text-[#D9A273]" />
            Financial Wellness Framework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1A0E2C] flex items-center gap-2">
                <FaCalculator className="text-[#6A11CB]" />
                Budgeting
              </h3>
              <p className="text-gray-600">
                Effective budgeting is the foundation of financial health. We teach the 50/30/20 rule:
                50% needs, 30% wants, and 20% savings/debt repayment. Our tools help you track spending,
                identify leaks, and optimize cash flow.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1A0E2C] flex items-center gap-2">
                <FaPiggyBank className="text-[#FF9A8B]" />
                Savings
              </h3>
              <p className="text-gray-600">
                Building savings requires strategy. We emphasize paying yourself first, emergency funds
                (3-6 months expenses), and goal-based savings. Our approach helps you automate savings
                while maintaining liquidity for opportunities.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1A0E2C] flex items-center gap-2">
                <FaChartLine className="text-[#4FACFE]" />
                Investments
              </h3>
              <p className="text-gray-600">
                Growing wealth requires smart investing. We focus on diversification, risk assessment,
                and long-term strategies. From index funds to retirement accounts, we help you build
                portfolios aligned with your goals and timeline.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Components */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Budgeting Service Component */}
          <ServiceCard
            icon={<FaCalculator className="text-white text-2xl" />}
            title="Budgeting Solutions"
            color="from-[#6A11CB] to-[#2575FC]"
            description="Take control of your cash flow with our intelligent budgeting tools and personalized spending plans."
            link="/budget"
            linkText="Explore Budgeting"
          >
            <BudgetingFeatures />
          </ServiceCard>

          {/* Savings Service Component */}
          <ServiceCard
            icon={<FaPiggyBank className="text-white text-2xl" />}
            title="Savings Strategies"
            color="from-[#FF9A8B] to-[#FF6B95]"
            description="Build financial security with automated savings plans and emergency fund guidance."
            link="/savings"
            linkText="Start Saving"
          >
            <SavingsFeatures />
          </ServiceCard>

          {/* Investment Service Component */}
          <ServiceCard
            icon={<FaChartLine className="text-white text-2xl" />}
            title="Investment Planning"
            color="from-[#4FACFE] to-[#00F2FE]"
            description="Grow your wealth through diversified portfolios and long-term investment strategies."
            link="/investment"
            linkText="View Investments"
          >
            <InvestmentFeatures />
          </ServiceCard>
        </div>
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ icon, title, color, description, link, linkText, children }) => {
  return (
    <motion.div
      className="group relative h-full"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl shadow-lg -z-10 blur-md" />
      
      <div className="h-full bg-white rounded-xl shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className={`bg-gradient-to-br ${color} p-6 rounded-t-xl`}>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-full">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6 flex-1">
          <p className="text-gray-600 mb-6">{description}</p>
          {children}
        </div>
        
        <div className="p-6 border-t border-gray-100">
          <Link
            to={link}
            className="flex items-center gap-2 text-sm font-semibold text-[#1A0E2C] group-hover:text-[#D9A273] transition-colors"
          >
            {linkText}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

// Budgeting Features Component
const BudgetingFeatures = () => (
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="bg-[#F8F5FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6A11CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Automated expense tracking</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#F8F5FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6A11CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Custom spending categories</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#F8F5FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#6A11CB]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Real-time budget alerts</span>
    </div>
  </div>
);

// Savings Features Component
const SavingsFeatures = () => (
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="bg-[#FFF5F5] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF6B95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Emergency fund calculator</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#FFF5F5] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF6B95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Goal-based savings plans</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#FFF5F5] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#FF6B95]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">High-yield account matching</span>
    </div>
  </div>
);

// Investment Features Component
const InvestmentFeatures = () => (
  <div className="space-y-3">
    <div className="flex items-start gap-3">
      <div className="bg-[#F0F9FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00F2FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Risk assessment tools</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#F0F9FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00F2FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Portfolio diversification</span>
    </div>
    <div className="flex items-start gap-3">
      <div className="bg-[#F0F9FF] p-1 rounded-full mt-0.5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#00F2FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Retirement planning</span>
    </div>
  </div>
);

export default Services1;