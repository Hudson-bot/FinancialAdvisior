import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog6 = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#FFF2FA] text-[#1A0E2C]">
      <button onClick={() => navigate(-1)} className="flex items-center text-[#B03060] mb-6 font-medium group">
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
      </button>
      <h1 className="text-4xl font-bold mb-4">Leadership in remote work environments</h1>
      <p className="text-sm text-[#C24570] mb-6">Published on 12 OCT • Category: Management</p>
      <img src="/images/blog6.jpg" alt="blog6" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <div className="space-y-6 text-lg leading-relaxed">
        <p>Remote work demands a new kind of leadership—one built on trust, transparency, and empathy.</p>
        <p>Successful remote leaders prioritize clear communication, flexible scheduling, and results over hours. They use tools like Slack, Zoom, and project management software to stay aligned and connected.</p>
        <p>Tips for effective remote leadership:</p>
        <ul className="list-disc list-inside pl-4">
          <li>Host regular check-ins, but avoid micromanagement</li>
          <li>Celebrate wins publicly</li>
          <li>Support mental wellness and work-life balance</li>
        </ul>
        <p>The ability to inspire, engage, and empower your team—wherever they are—is what separates good leaders from great ones in the digital age.</p>
      </div>
    </div>
  );
};
export default Blog6;
