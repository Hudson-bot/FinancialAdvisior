// Header.jsx
import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userInitial, setUserInitial] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('userInfo');
      if (storedUser) {
        try {
          const user = JSON.parse(storedUser);
          if (user?.initial) setUserInitial(user.initial);
        } catch {
          setUserInitial(null);
        }
      } else {
        setUserInitial(null);
      }
    };

    checkUser();
    window.addEventListener('storage', checkUser);
    return () => window.removeEventListener('storage', checkUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutUs1" },
    { name: "Services", path: "/services1" },
    { name: "Blog", path: "/allBlogs" },
    { name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    localStorage.removeItem('userInfo');
    setUserInitial(null);
    setDropdownOpen(false);
    navigate('/signIn');
  };

  return (
    <header className={`w-screen fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#1A092B]/90 backdrop-blur-sm py-2 shadow-lg" : "bg-[#1A092B] py-4"}`}>
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col">
          <span className="text-2xl font-bold bg-[#D9A16F] text-black px-3 py-1 rounded-lg w-fit">ADVISOR</span>
          <span className="text-gray-300 text-xs mt-1">BIGGER, BETTER</span>
        </motion.div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} to={item.path} className="relative group text-white hover:text-[#D9A16F] transition-colors text-lg">
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D9A16F] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-6">
          <button className="p-2 text-white hover:text-[#D9A16F]" aria-label="Search">
            <FaSearch className="text-xl" />
          </button>

          {userInitial ? (
            <div className="relative" ref={dropdownRef}>
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#D9A16F] text-black font-bold text-lg cursor-pointer"
                onClick={() => setDropdownOpen((prev) => !prev)}
                title="Account"
              >
                {userInitial}
              </div>
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50"
                  >
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              onClick={() => navigate('/signIn')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D9A16F] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#c08e60] transition-colors text-lg hidden sm:block"
            >
              Login
            </motion.button>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl p-2 text-white hover:text-[#D9A16F]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#1A092B] overflow-hidden"
          >
            <div className="container mx-auto px-4 py-2 space-y-3">
              {navItems.map((item) => (
                <motion.div key={item.name} whileTap={{ scale: 0.95 }}>
                  <Link to={item.path} className="block py-3 text-white hover:text-[#D9A16F] border-b border-[#2d0f45] text-lg">
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              {userInitial ? (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLogout}
                  className="w-full bg-[#D9A16F] text-black px-4 py-3 rounded-lg font-medium hover:bg-[#c08e60] mt-2 text-lg"
                >
                  Logout
                </motion.button>
              ) : (
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/signIn')}
                  className="w-full bg-[#D9A16F] text-black px-4 py-3 rounded-lg font-medium hover:bg-[#c08e60] mt-2 text-lg"
                >
                  Login
                </motion.button>
              )}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
