import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog2 = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#F0FAFF] text-[#1A0E2C]">
      <button onClick={() => navigate(-1)} className="flex items-center text-[#004B6E] mb-6 font-medium group">
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
      </button>
      <h1 className="text-4xl font-bold mb-4">How investing impacts business growth</h1>
      <p className="text-sm text-[#00688B] mb-6">Published on 04 NOV • Category: Finance</p>
      <img src="/images/blog2.jpeg" alt="blog2" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <div className="space-y-6 text-lg leading-relaxed">
        <p>Strategic investing is one of the key levers for scaling any business. When done wisely, it not only fuels growth but also builds sustainability.</p>
        <p>Common areas where businesses reinvest profits include:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Research and Development</li>
          <li>Marketing and customer acquisition</li>
          <li>Infrastructure and operational scalability</li>
        </ul>
        <p>Case studies show that businesses that consistently allocate funds into innovation outperform competitors over time. The compound return of knowledge, customer base, and operational efficiency is invaluable.</p>
        <p>Investment decisions should be backed by clear ROI metrics and future growth projections. Partnering with advisors and understanding financial trends can make a big difference.</p>
      </div>
    </div>
  );
};
export default Blog2;