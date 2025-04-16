import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog5 = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#F6F0FF] text-[#1A0E2C]">
      <button onClick={() => navigate(-1)} className="flex items-center text-[#6D1B7B] mb-6 font-medium group">
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
      </button>
      <h1 className="text-4xl font-bold mb-4">Marketing strategies for 2023</h1>
      <p className="text-sm text-[#77288F] mb-6">Published on 18 OCT • Category: Marketing</p>
      <img src="/images/blog5.png" alt="blog5" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <div className="space-y-6 text-lg leading-relaxed">
        <p>2023 is all about hyper-personalization, data-driven strategies, and meaningful content. Consumers expect brands to be relevant, fast, and values-driven.</p>
        <p>Top marketing trends to embrace:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Short-form video and interactive content</li>
          <li>Influencer partnerships that feel authentic</li>
          <li>First-party data collection due to privacy laws</li>
          <li>Omnichannel consistency and messaging</li>
        </ul>
        <p>Marketers who leverage automation, AI insights, and storytelling will stand out in a crowded space.</p>
      </div>
    </div>
  );
};
export default Blog5;