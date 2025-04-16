import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog1 = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#FFF7F0] text-[#1A0E2C]">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#4B1F52] mb-6 font-medium group"
      >
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blogs
      </button>

      <h1 className="text-4xl font-bold mb-4">Customer onboarding for business classes</h1>
      <p className="text-sm text-[#5B2333] mb-6">Published on 09 NOV • Category: Analytics</p>

      <img src="/images/blog1.png" alt="blog1" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />

      <div className="space-y-6 text-lg leading-relaxed">
        <p>Customer onboarding is the initial experience a new client has with your brand...</p>
        <p>Successful onboarding includes teaching customers how to use your services, solving common issues, and making sure they're happy.</p>
        <p>In business classes, onboarding is more than logistics—it's the beginning of your customer's success story.</p>
        <p>Here's how to make it work for your business:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Define clear onboarding steps</li>
          <li>Use feedback to iterate your onboarding flow</li>
          <li>Use tools like email automation or onboarding calls</li>
        </ul>
        <p>Done right, onboarding reduces churn and increases customer satisfaction.</p>
      </div>
    </div>
  );
};

export default Blog1;
