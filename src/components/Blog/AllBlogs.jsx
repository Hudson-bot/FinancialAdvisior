import React from 'react';
import { motion } from 'framer-motion';
import { FaComment, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AllBlogs = () => {
  const navigate = useNavigate();

  const allArticles = [
    {
      id: 1,
      title: "Customer onboarding for business classes",
      category: "Analytics",
      comments: 13,
      date: "09 NOV",
      image: "/images/blog1.png",
      color: "bg-gradient-to-r from-[#FF9A8B] to-[#FF6B95]",
    },
    {
      id: 2,
      title: "How investing impacts business growth",
      category: "Finance",
      comments: 8,
      date: "04 NOV",
      image: "/images/blog2.jpeg",
      color: "bg-gradient-to-r from-[#4FACFE] to-[#00F2FE]",
    },
    {
      id: 3,
      title: "7 Productivity tips to avoid burnout",
      category: "Consultation",
      comments: 1,
      date: "30 OCT",
      image: "/images/blog3.png",
      color: "bg-gradient-to-r from-[#6A11CB] to-[#2575FC]",
    },
    {
      id: 4,
      title: "Digital transformation in modern businesses",
      category: "Technology",
      comments: 5,
      date: "25 OCT",
      image: "/images/blog4.jpg",
      color: "bg-gradient-to-r from-[#F09819] to-[#EDDE5D]",
    },
    {
      id: 5,
      title: "Marketing strategies for 2023",
      category: "Marketing",
      comments: 7,
      date: "18 OCT",
      image: "/images/blog5.png",
      color: "bg-gradient-to-r from-[#3EECAC] to-[#EE74E1]",
    },
    {
      id: 6,
      title: "Leadership in remote work environments",
      category: "Management",
      comments: 3,
      date: "12 OCT",
      image: "/images/blog6.jpg",
      color: "bg-gradient-to-r from-[#FF3CAC] to-[#784BA0]",
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-5 bg-gradient-to-br from-[#F0C29A] to-[#F8D5B5] py-20 px-6 min-h-screen"
    >
      <div className="max-w-6xl mx-auto">
        <motion.button 
          onClick={() => navigate(-1)}
          className="flex items-center text-[#1A0E2C] mb-8 font-medium group"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Back to Blog
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#1A0E2C] mb-4">
            All <span className="text-[#4B1F52]">Articles</span>
          </h2>
          <p className="text-[#5B2333]">Discover our complete collection of insights</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {allArticles.map(article => (
            <motion.div
              key={article.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl -z-10 blur-md" />
              
              <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                <motion.div 
                  className="relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                >
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute bottom-4 left-4 ${article.color} text-white px-3 py-1 rounded-md text-xs font-bold`}>
                    {article.date}
                  </div>
                </motion.div>

                <div className="p-6">
                  <div className="flex justify-between items-center text-sm text-[#5B2333] mb-3">
                    <span className="font-semibold">{article.category}</span>
                    <span className="flex items-center">
                      <FaComment className="mr-1" />
                      {article.comments}
                    </span>
                  </div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-[#1A0E2C] mb-4 leading-tight"
                    whileHover={{ x: 5 }}
                  >
                    {article.title}
                  </motion.h3>
                  
                  <motion.button
                    className="text-[#4B1F52] font-medium flex items-center group"
                    whileHover={{ x: 5 }}
                    onClick={() => navigate(`/blog/${article.id}`)}
                  >
                    Read More 
                    <FaArrowRight className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AllBlogs;