import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { FaChartPie } from 'react-icons/fa';

const BudgetChart = ({ allocations }) => {
  const data = {
    labels: Object.keys(allocations).map(key => 
      key.charAt(0).toUpperCase() + key.slice(1)
    ),
    datasets: [{
      data: Object.values(allocations),
      backgroundColor: [
        '#4FACFE',
        '#00F2FE',
        '#6A11CB',
        '#2575FC',
        '#FF9A8B',
        '#FF6B95',
        '#D9A273'
      ],
      borderWidth: 0
    }]
  };

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-lg p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-[#6A11CB] to-[#2575FC] p-3 rounded-full">
          <FaChartPie className="text-white text-xl" />
        </div>
        <h2 className="text-2xl font-bold text-[#1A0E2C]">Budget Breakdown</h2>
      </div>
      
      <div className="h-64">
        <Doughnut 
          data={data}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: {
                  boxWidth: 12,
                  padding: 20
                }
              }
            }
          }}
        />
      </div>
    </motion.div>
  );
};

export default BudgetChart;