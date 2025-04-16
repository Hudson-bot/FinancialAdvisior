import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog4 = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#FFFAEC] text-[#1A0E2C]">
      <button onClick={() => navigate(-1)} className="flex items-center text-[#8C651B] mb-6 font-medium group">
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
      </button>
      <h1 className="text-4xl font-bold mb-4">Digital transformation in modern businesses</h1>
      <p className="text-sm text-[#A87F1E] mb-6">Published on 25 OCT • Category: Technology</p>
      <img src="/images/blog4.jpg" alt="blog4" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <div className="space-y-6 text-lg leading-relaxed">
        <p>Digital transformation is the integration of digital technologies into every area of business. It fundamentally changes how you operate and deliver value to customers.</p>
        <p>Key elements include cloud computing, artificial intelligence, automation, and agile operations. Organizations embracing digital transformation report faster decision-making, improved customer experiences, and more scalable infrastructure.</p>
        <p>Challenges include resistance to change, skill gaps, and legacy systems. However, with the right strategy, digital transformation is a powerful catalyst for growth and resilience.</p>
      </div>
    </div>
  );
};
export default Blog4;