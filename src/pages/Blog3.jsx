import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Blog3 = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 min-h-screen px-6 py-10 bg-[#EFF1FF] text-[#1A0E2C]">
      <button onClick={() => navigate(-1)} className="flex items-center text-[#3341B2] mb-6 font-medium group">
        <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
      </button>
      <h1 className="text-4xl font-bold mb-4">7 Productivity tips to avoid burnout</h1>
      <p className="text-sm text-[#3C4A9A] mb-6">Published on 30 OCT • Category: Consultation</p>
      <img src="/images/blog3.png" alt="blog3" className="rounded-xl mb-8 w-full max-h-[400px] object-cover" />
      <div className="space-y-6 text-lg leading-relaxed">
        <ol className="list-decimal list-inside pl-4 space-y-2">
          <li>Start your day with a purpose – Set 3 key goals daily.</li>
          <li>Use the Pomodoro technique – 25 min focus, 5 min rest.</li>
          <li>Block distractions using app blockers or Do Not Disturb mode.</li>
          <li>Schedule regular movement breaks and stretch.</li>
          <li>End your day with a wrap-up and prepare for tomorrow.</li>
          <li>Outsource or delegate non-core tasks.</li>
          <li>Be okay with imperfection – aim for progress, not perfection.</li>
        </ol>
        <p>Consistent routines, realistic expectations, and self-compassion are the cornerstones of sustainable productivity.</p>
      </div>
    </div>
  );
};
export default Blog3;