import React from 'react';
import Savings from '../components/savings/Savings';
import SavingsGoals from '../components/savings/SavingsGoals';

const SavingsPage = () => {
  return (
    <div className="space-y-8">
      <Savings />
      <div className="max-w-6xl mx-auto px-6">
        <SavingsGoals />
      </div>
    </div>
  );
};

export default SavingsPage;