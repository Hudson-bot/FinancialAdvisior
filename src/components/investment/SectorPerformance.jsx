import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// ✅ Register Chart.js components
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const SectorPerformance = () => {
  const data = {
    labels: ['Technology', 'Healthcare', 'Financials', 'Consumer', 'Energy'],
    datasets: [
      {
        label: '1 Year Return (%)',
        data: [18.2, 12.5, 8.7, 6.3, 22.1],
        backgroundColor: [
          'rgba(59, 130, 246, 0.7)',
          'rgba(16, 185, 129, 0.7)',
          'rgba(245, 158, 11, 0.7)',
          'rgba(139, 92, 246, 0.7)',
          'rgba(239, 68, 68, 0.7)',
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Return (%)',
        },
      },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Market Sector Performance
      </h2>

      {/* ✅ Fix: Key forces new chart instance */}
      <div className="h-64">
        <Bar key={Math.random()} data={data} options={options} />
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-blue-800 mb-1">Tech Outlook</h3>
          <p className="text-sm text-gray-700">
            AI and cloud computing driving growth despite valuation concerns.
          </p>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <h3 className="font-bold text-green-800 mb-1">Healthcare Trend</h3>
          <p className="text-sm text-gray-700">
            Biotech innovations and aging populations support long-term growth.
          </p>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <h3 className="font-bold text-red-800 mb-1">Energy Watch</h3>
          <p className="text-sm text-gray-700">
            Volatile but strong returns from renewable energy transition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectorPerformance;
