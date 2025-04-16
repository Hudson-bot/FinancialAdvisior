import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const InvestmentPortfolio = ({ riskProfile, investmentAmount }) => {
  const getPortfolioAllocation = () => {
    if (!riskProfile) return null;
    
    const allocations = {
      conservative: {
        stocks: 30,
        bonds: 50,
        etfs: 15,
        reits: 5,
        crypto: 0
      },
      moderate: {
        stocks: 50,
        bonds: 30,
        etfs: 15,
        reits: 5,
        crypto: 0
      },
      aggressive: {
        stocks: 70,
        bonds: 15,
        etfs: 10,
        reits: 3,
        crypto: 2
      }
    };

    return allocations[riskProfile] || allocations.moderate;
  };

  const allocation = getPortfolioAllocation();

  if (!allocation) return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12 text-center">
      <h3 className="text-xl font-bold mb-2">Complete your risk assessment first</h3>
      <p className="text-gray-600">We'll build your personalized portfolio after understanding your risk tolerance</p>
    </div>
  );

  const data = {
    labels: ['Stocks', 'Bonds', 'ETFs', 'REITs', 'Crypto'],
    datasets: [{
      data: Object.values(allocation),
      backgroundColor: [
        '#3B82F6',
        '#10B981',
        '#F59E0B',
        '#8B5CF6',
        '#6B7280'
      ],
      borderWidth: 0
    }]
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Your Recommended Portfolio
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/3">
          <Doughnut 
            data={data} 
            options={{ 
              cutout: '70%',
              plugins: { legend: { position: 'bottom' } }
            }} 
          />
        </div>
        
        <div className="w-full md:w-2/3">
          <h3 className="text-lg font-semibold mb-4">
            {riskProfile.charAt(0).toUpperCase() + riskProfile.slice(1)} Risk Portfolio
          </h3>
          
          <div className="space-y-4">
            {Object.entries(allocation).map(([asset, percent]) => (
              <div key={asset} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ 
                      backgroundColor: data.datasets[0].backgroundColor[
                        data.labels.indexOf(asset.charAt(0).toUpperCase() + asset.slice(1))
                      ]
                    }} 
                  />
                  <span className="font-medium">
                    {asset.charAt(0).toUpperCase() + asset.slice(1)}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">{percent}%</span>
                  <span className="text-gray-600">
                    ${(investmentAmount * percent / 100).toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
            <h4 className="font-bold text-indigo-800 mb-2">Investment Strategy</h4>
            <p className="text-gray-700">
              {riskProfile === 'conservative' 
                ? "Focus on capital preservation with stable returns through bonds and dividend stocks."
                : riskProfile === 'moderate'
                ? "Balanced growth and income through diversified assets with moderate risk."
                : "Maximize long-term growth through equities with higher volatility tolerance."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolio;