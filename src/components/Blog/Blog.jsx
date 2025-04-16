import React from "react";
import { motion } from "framer-motion";
import { FaComment, FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const articles = [
  {
    id: 1,
    title: "Customer onboarding there business classes.",
    category: "Analytics",
    comments: 13,
    date: "09 NOV",
    image: "/images/blog1.png",
    color: "from-[#FF9A8B] to-[#FF6B95]",
  },
  {
    id: 2,
    title: "How investing in dependent increasing to business",
    category: "Finance",
    comments: 8,
    date: "04 NOV",
    image: "/images/blog2.jpeg",
    color: "from-[#4FACFE] to-[#00F2FE]",
  },
  {
    id: 3,
    title: "7 Productivity tips to avoid burnout when working",
    category: "Consultation",
    comments: 1,
    date: "30 OCT",
    image: "/images/blog3.png",
    color: "from-[#6A11CB] to-[#2575FC]",
  },
];

const Blog = () => {
   const navigate = useNavigate();
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="bg-gradient-to-br from-[#F0C29A] to-[#F8D5B5] py-20 px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <span className="inline-block bg-[#1A0E2C] text-[#F0C29A] px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
          NEWS & ARTICLES
        </span>
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-[#1A0E2C] mb-3"
          whileHover={{ scale: 1.02 }}
        >
          Latest <span className="text-[#4B1F52]">Business</span> Insights
        </motion.h2>
        <p className="text-[#5B2333] text-lg max-w-2xl mx-auto">
          Stay updated with the latest news from the business world
        </p>
      </motion.div>

      <motion.div
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {articles.map((article) => (
          <motion.div
            key={article.id}
            variants={item}
            className="group relative"
            whileHover={{ y: -10 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl shadow-lg -z-10 blur-md" />
            
            <div className="h-full bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
              <motion.div 
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className={`absolute bottom-4 left-4 bg-gradient-to-br ${article.color} text-white px-3 py-1 rounded-md text-xs font-bold`}>
                  {article.date}
                </div>
              </motion.div>

              <div className="p-6">
                <div className="flex items-center text-[#5B2333] text-sm mb-3">
                  <span className="font-semibold">{article.category}</span>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    <FaComment className="mr-1" />
                    {article.comments}
                  </div>
                </div>

                <motion.h3 
                  className="text-xl font-bold text-[#1A0E2C] mb-4 leading-tight"
                  whileHover={{ x: 5 }}
                >
                  {article.title}
                </motion.h3>

                <motion.button
                  className="flex items-center gap-2 text-sm font-semibold text-[#1A0E2C] group-hover:text-[#4B1F52] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Read More
                  <FaArrowRight className="opacity-0 group-hover:opacity-100 transition-all" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        <motion.button
        onClick={() => navigate('/allBlogs')}
          className="bg-[#4B1F52] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#1A0E2C] transition-colors flex items-center gap-2 mx-auto"
          whileHover={{ 
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(74, 31, 82, 0.4)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          View All Articles
          <FaArrowRight className="text-sm" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Blog;