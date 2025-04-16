import React from "react";
import { motion } from "framer-motion";
import { 
  FaChartLine, 
  FaHandshake, 
  FaShieldAlt, 
  FaLightbulb,
  FaUsers,
  FaAward
} from "react-icons/fa";

const AboutUs1 = () => {
  const features = [
    {
      icon: <FaChartLine className="text-3xl text-[#4B1F52]" />,
      title: "Market Expertise",
      description: "20+ years of combined experience in financial markets"
    },
    {
      icon: <FaHandshake className="text-3xl text-[#4B1F52]" />,
      title: "Client-Centric Approach",
      description: "Customized solutions for your unique financial situation"
    },
    {
      icon: <FaShieldAlt className="text-3xl text-[#4B1F52]" />,
      title: "Risk Management",
      description: "Proactive strategies to protect your assets"
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#4B1F52]" />,
      title: "Innovative Solutions",
      description: "Cutting-edge financial products and strategies"
    },
    {
      icon: <FaUsers className="text-3xl text-[#4B1F52]" />,
      title: "Dedicated Team",
      description: "Certified professionals at your service"
    },
    {
      icon: <FaAward className="text-3xl text-[#4B1F52]" />,
      title: "Proven Track Record",
      description: "Consistent performance across market cycles"
    }
  ];

  return (
    <div className="mt-10 bg-gradient-to-b from-[#F8F5FF] to-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#4B1F52] to-[#1A0E2C] text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Our Financial Advisory
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Empowering clients with knowledge, strategy, and personalized financial solutions since 2010.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#1A0E2C] mb-6">Our Story</h2>
              <p className="text-lg text-[#5B2333] mb-6">
                Founded in 2010, our financial advisory firm began with a simple mission: to provide transparent, 
                client-focused financial guidance in an industry often clouded by complexity.
              </p>
              <p className="text-lg text-[#5B2333] mb-6">
                What started as a small team of three passionate financial experts has grown into a 
                respected firm serving clients across 15 countries, managing over $2 billion in assets.
              </p>
              <div className="bg-[#F0C29A] p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-[#1A0E2C] mb-3">Our Mission</h3>
                <p className="text-[#5B2333]">
                  To empower individuals and businesses with the knowledge and tools they need to make 
                  informed financial decisions and achieve lasting prosperity.
                </p>
              </div>
            </motion.div>
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src="/images/team-members.jpg" 
                alt="Our team working together" 
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-[#F0C29A] to-[#F8D5B5]">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#1A0E2C] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Core Values
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A0E2C] mb-3">{feature.title}</h3>
                <p className="text-[#5B2333]">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl font-bold text-center text-[#1A0E2C] mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Meet Our Leadership
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                bio: "CFP®, 25 years experience in wealth management",
                img: "/images/profile.jpeg"
              },
              {
                name: "Michael Chen",
                role: "Chief Investment Officer",
                bio: "CFA, Former hedge fund manager",
                img: "/images/profile.jpeg"
              },
              {
                name: "Priya Patel",
                role: "Director of Client Relations",
                bio: "MBA, Specializes in retirement planning",
                img: "/images/profile.jpeg"
              }
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <img src={member.img} alt={member.name} className="w-full h-64 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#1A0E2C]">{member.name}</h3>
                  <p className="text-[#4B1F52] font-medium mb-3">{member.role}</p>
                  <p className="text-[#5B2333]">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs1;