// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     // Basic client-side validation
//     if (!email || !password) {
//       setError('Please fill in all fields');
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const response = await axios.post('https://financialadvisiorbackend.onrender.com/api/auth/login', {
//         email,
//         password
//       });

//       // Extract first letter of name and store user data
//       const userData = {
//         ...response.data,
//         initial: response.data.name.charAt(0).toUpperCase()
//       };

//       localStorage.setItem('userInfo', JSON.stringify(userData));
      
//       // Redirect to dashboard
//       navigate('/');
//     } catch (err) {
//       let errorMessage = 'Login failed';
      
//       if (err.response) {
//         // Server responded with error status
//         errorMessage = err.response.data?.error || 
//                       err.response.data?.message || 
//                       `Error: ${err.response.status}`;
//       } else if (err.request) {
//         // No response received
//         errorMessage = 'No response from server - check your connection';
//       } else {
//         // Request setup error
//         errorMessage = `Request error: ${err.message}`;
//       }
      
//       setError(errorMessage);
//       console.error('Login error:', err);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-[#F8F5FF] flex items-center justify-center p-4">
//       <motion.div 
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="w-full max-w-md"
//       >
//         <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
//           {/* Header */}
//           <div className="bg-gradient-to-r from-[#9A4E40] to-[#4B1F52] p-6 text-center">
//             <motion.h1 
//               className="text-3xl font-bold text-white"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.2 }}
//             >
//               Financial Advisor
//             </motion.h1>
//             <motion.p 
//               className="text-[#F0C29A] mt-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Secure Client Portal
//             </motion.p>
//           </div>

//           {/* Login Form */}
//           <motion.form 
//             onSubmit={handleSubmit}
//             className="p-8 space-y-6"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//           >
//             {error && (
//               <motion.div
//                 initial={{ opacity: 0, y: -10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="p-3 bg-red-100 text-red-700 rounded-md text-center"
//               >
//                 {error}
//               </motion.div>
//             )}

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative"
//             >
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaUser className="text-gray-400" />
//               </div>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#4B1F52] focus:outline-none"
//                 required
//               />
//             </motion.div>

//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="relative"
//             >
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FaLock className="text-gray-400" />
//               </div>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Password"
//                 className="w-full pl-10 pr-10 py-3 border-b-2 border-gray-200 focus:border-[#4B1F52] focus:outline-none"
//                 required
//                 minLength="6"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute inset-y-0 right-0 pr-3 flex items-center"
//               >
//                 {showPassword ? (
//                   <FaEyeSlash className="text-gray-400 hover:text-[#4B1F52]" />
//                 ) : (
//                   <FaEye className="text-gray-400 hover:text-[#4B1F52]" />
//                 )}
//               </button>
//             </motion.div>

//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input 
//                   type="checkbox" 
//                   className="rounded text-[#4B1F52] focus:ring-[#4B1F52]" 
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//               <Link 
//                 to="/forgot-password" 
//                 className="text-sm text-[#4B1F52] hover:underline"
//               >
//                 Forgot password?
//               </Link>
//             </div>

//             <motion.button
//               type="submit"
//               className="w-full bg-gradient-to-r from-[#4B1F52] to-[#9A4E40] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all disabled:opacity-70"
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               disabled={isLoading}
//             >
//               {isLoading ? (
//                 <>
//                   <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                   </svg>
//                   Signing In...
//                 </>
//               ) : (
//                 <>
//                   <span>Sign In</span>
//                   <FaArrowRight className="transition-transform group-hover:translate-x-1" />
//                 </>
//               )}
//             </motion.button>
//           </motion.form>

//           {/* Footer */}
//           <motion.div 
//             className="bg-gray-50 px-8 py-6 text-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.6 }}
//           >
//             <p className="text-gray-600 text-sm">
//               Don't have an account?{' '}
//               <Link 
//                 to="/signup" 
//                 className="text-[#4B1F52] font-medium hover:underline"
//               >
//                 Register here
//               </Link>
//             </p>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default SignIn;


// SignIn.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://financialadvisiorbackend.onrender.com/api/auth/login', {
        email,
        password
      });

      const userData = {
        ...response.data,
        initial: response.data.name.charAt(0).toUpperCase()
      };

      localStorage.setItem('userInfo', JSON.stringify(userData));
      window.dispatchEvent(new Event('storage')); // optional if you want to sync across tabs
      navigate('/');
    } catch (err) {
      let errorMessage = 'Login failed';
      if (err.response) {
        errorMessage = err.response.data?.error || err.response.data?.message || `Error: ${err.response.status}`;
      } else if (err.request) {
        errorMessage = 'No response from server - check your connection';
      } else {
        errorMessage = `Request error: ${err.message}`;
      }

      setError(errorMessage);
      console.error('Login error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-16 min-h-screen bg-gradient-to-b from-white to-[#F8F5FF] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#9A4E40] to-[#4B1F52] p-6 text-center">
            <motion.h1 className="text-3xl font-bold text-white">Financial Advisor</motion.h1>
            <motion.p className="text-[#F0C29A] mt-2">Secure Client Portal</motion.p>
          </div>

          {/* Login Form */}
          <motion.form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && <div className="p-3 bg-red-100 text-red-700 rounded-md text-center">{error}</div>}

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 border-b-2 border-gray-200 focus:border-[#4B1F52] focus:outline-none"
                required
              />
            </div>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-10 pr-10 py-3 border-b-2 border-gray-200 focus:border-[#4B1F52] focus:outline-none"
                required
                minLength="6"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showPassword ? <FaEyeSlash className="text-gray-400 hover:text-[#4B1F52]" /> : <FaEye className="text-gray-400 hover:text-[#4B1F52]" />}
              </button>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-[#4B1F52] focus:ring-[#4B1F52]" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-gradient-to-r from-[#4B1F52] to-[#9A4E40] text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all disabled:opacity-70"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                <>
                  <span>Sign In</span>
                  <FaArrowRight />
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Footer */}
          <motion.div className="bg-gray-50 px-8 py-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account? <Link to="/signup" className="text-[#4B1F52] font-medium hover:underline">Register here</Link>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignIn;
