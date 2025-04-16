import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaEdit, FaSave, FaMoneyBillWave, FaChartPie, FaInfoCircle } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

const IncomeAllocator = () => {
  const [income, setIncome] = useState('');
  const [editMode, setEditMode] = useState(true);
  const [totalPercent, setTotalPercent] = useState(100);
  
  const [allocations, setAllocations] = useState({
    stocks: 30,
    bonds: 20,
    realEstate: 15,
    crypto: 5,
    emergency: 10,
    savings: 20
  });

  // Calculate total percentage whenever allocations change
  useEffect(() => {
    const total = Object.values(allocations).reduce((sum, val) => sum + val, 0);
    setTotalPercent(total);
  }, [allocations]);

  const handleAllocationChange = (sector, value) => {
    const newValue = Math.max(0, Math.min(100, Number(value)));
    setAllocations(prev => ({
      ...prev,
      [sector]: newValue
    }));
  };

  const calculateAmounts = () => {
    if (!income) return {};
    
    return Object.fromEntries(
      Object.entries(allocations).map(([sector, percent]) => [
        sector,
        ((income * percent) / 100).toFixed(2)
      ])
    );
  };

  const chartData = {
    labels: Object.keys(allocations).map(key => 
      key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')
    ),
    datasets: [{
      data: Object.values(allocations),
      backgroundColor: [
        '#3B82F6', '#10B981', '#F59E0B', 
        '#8B5CF6', '#EF4444', '#64748B'
      ],
      borderWidth: 1
    }]
  };

  const sectorInfo = {
    stocks: 'Growth potential (ETFs, individual stocks)',
    bonds: 'Stable income (Government/corporate bonds)',
    realEstate: 'REITs or property investments',
    crypto: 'High-risk digital assets (limit exposure)',
    emergency: 'Liquid cash for 3-6 months expenses',
    savings: 'Short-term goals & cash reserves'
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <FaMoneyBillWave className="text-indigo-600 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-800">Income Investment Allocator</h2>
      </div>

      {/* Income Input */}
      <div className="mb-8 p-4 bg-gray-50 rounded-lg">
        <label className="block text-gray-700 font-medium mb-2">
          Monthly Net Income ($)
        </label>
        <div className="flex gap-4 items-center">
          <input
            type="number"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            placeholder="Enter your after-tax monthly income"
            className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            disabled={!editMode}
            min="0"
          />
          <button
            onClick={() => setEditMode(!editMode)}
            className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            {editMode ? <FaSave /> : <FaEdit />}
            {editMode ? 'Save Income' : 'Edit Income'}
          </button>
        </div>
      </div>

      {income && (
        <>
          {/* Allocation Controls */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <FaChartPie /> Investment Allocation
              </h3>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                totalPercent === 100 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                Total: {totalPercent}%
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(allocations).map(([sector, percent]) => (
                <div key={sector} className="bg-gray-50 p-4 rounded-lg border">
                  <label className="block text-gray-700 mb-1 font-medium">
                    {sector.charAt(0).toUpperCase() + sector.slice(1).replace(/([A-Z])/g, ' $1')}
                  </label>
                  <div className="flex items-center gap-3 mb-2">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={percent}
                      onChange={(e) => handleAllocationChange(sector, e.target.value)}
                      className="flex-1"
                      disabled={!editMode}
                    />
                    <input
                      type="number"
                      value={percent}
                      onChange={(e) => handleAllocationChange(sector, e.target.value)}
                      className="w-16 p-2 border rounded text-center"
                      disabled={!editMode}
                      min="0"
                      max="100"
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${((income * percent) / 100).toFixed(2)}/mo</span>
                    <span>${((income * percent * 12) / 100).toFixed(2)}/yr</span>
                  </div>
                  <div className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                    <FaInfoCircle className="flex-shrink-0 mt-0.5 text-indigo-500" />
                    <p>{sectorInfo[sector]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visualization Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="h-80 lg:h-96">
              <Pie 
                data={chartData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                  plugins: {
                    tooltip: {
                      callbacks: {
                        label: (context) => {
                          const amount = ((income * context.raw) / 100).toFixed(2);
                          return `${context.label}: ${context.raw}% ($${amount}/mo)`;
                        }
                      }
                    },
                    legend: {
                      position: 'right',
                      labels: {
                        boxWidth: 15,
                        padding: 15
                      }
                    }
                  }
                }}
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Allocation Strategy</h3>
              <ul className="space-y-3">
                {Object.entries(allocations).map(([sector, percent]) => (
                  <li key={sector} className="flex items-start">
                    <div 
                      className="w-3 h-3 rounded-full mt-1.5 mr-2 flex-shrink-0"
                      style={{ 
                        backgroundColor: chartData.datasets[0].backgroundColor[
                          chartData.labels.indexOf(
                            sector.charAt(0).toUpperCase() + sector.slice(1).replace(/([A-Z])/g, ' $1')
                          )
                        ]
                      }}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {sector.charAt(0).toUpperCase() + sector.slice(1).replace(/([A-Z])/g, ' $1')}
                        </span>
                        <span>{percent}% (${((income * percent) / 100).toFixed(2)})</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div 
                          className="h-2 rounded-full" 
                          style={{ 
                            width: `${percent}%`,
                            backgroundColor: chartData.datasets[0].backgroundColor[
                              chartData.labels.indexOf(
                                sector.charAt(0).toUpperCase() + sector.slice(1).replace(/([A-Z])/g, ' $1')
                              )
                            ]
                          }}
                        />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}

      {!income && (
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
          <FaMoneyBillWave className="mx-auto text-3xl text-gray-400 mb-3" />
          <p>Enter your monthly income to visualize investment allocation</p>
        </div>
      )}
    </div>
  );
};

export default IncomeAllocator;