import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const teamMembers = [
  {
    name: "Amy Jenkins",
    role: "Financial Analyst",
    img: "/images/profile.jpeg",
    color: "from-[#FF9A8B] to-[#FF6B95]",
  },
  {
    name: "Jeffrey Mueller",
    role: "Marketing Analyst",
    img: "/images/profile.jpeg",
    color: "from-[#4FACFE] to-[#00F2FE]",
  },
  {
    name: "Anne Arias",
    role: "Statistical Analyst",
    img: "/images/profile.jpeg",
    color: "from-[#6A11CB] to-[#2575FC]",
  },
  {
    name: "Gerald Ruggiero",
    role: "Business Eng.",
    img: "/images/profile.jpeg",
    color: "from-[#F09819] to-[#EDDE5D]",
  },
];

const TeamSection = () => {
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
    <section className="py-20 bg-gradient-to-b from-white to-[#F8F5FF]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block bg-[#1A0E2C] text-[#F0C29A] px-3 py-1 rounded-full text-xs font-bold tracking-widest mb-4">
            MEET OUR TEAM
          </span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-[#1A0E2C] mb-6"
            whileHover={{ scale: 1.02 }}
          >
            Our <span className="text-[#4B1F52]">Specialized</span> Team
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative"
              whileHover={{ y: -10 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl shadow-lg -z-10 blur-md" />
              
              <div className="h-full p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center">
                <motion.div 
                  className={`relative bg-gradient-to-br ${member.color} p-1 rounded-full mb-6`}
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white p-2 rounded-full shadow-md">
                    <div className={`bg-gradient-to-br ${member.color} w-8 h-8 rounded-full flex items-center justify-center`}>
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                </motion.div>
                
                <h3 className="text-xl font-bold text-[#1A0E2C] mb-2">
                  {member.name}
                </h3>
                <p className="text-[#5B2333] mb-4">{member.role}</p>
                
                <motion.div 
                  className="flex gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -3, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#F7E6DA] p-2 rounded-full cursor-pointer"
                    >
                      <Icon className="text-[#1A0E2C] hover:text-[#4B1F52] transition-colors" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;