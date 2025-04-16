import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import AllBlogs from './components/Blog/AllBlogs';
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Savings from './components/savings/Savings';
import SavingsPage from './pages/SavingsPage';
import Investments from './pages/Investments';
import Budget from './pages/Budget';
import Services1 from './components/Services1/Services1';
import AboutUs1 from './pages/AboutUs1/AboutUs1';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import Blog3 from './pages/Blog3';
import Blog4 from './pages/Blog4';
import Blog5 from './pages/Blog5';
import Blog6 from './pages/Blog6';


const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       
        <Header />
        
       
        <main className="flex-grow">
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/allBlogs" element={<AllBlogs />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/savings" element={<SavingsPage />} />
            <Route path="/investment" element={<Investments />} />
            <Route path="/services1" element={<Services1 />} />
            <Route path="/budget" element={<Budget />} />
            <Route path="/aboutUs1" element={<AboutUs1 />} />
            <Route path="/blog/1" element={<Blog1 />} />
            <Route path="/blog/2" element={<Blog2 />} />
            <Route path="/blog/3" element={<Blog3 />} />
            <Route path="/blog/4" element={<Blog4 />} />
            <Route path="/blog/5" element={<Blog5 />} />
            <Route path="/blog/6" element={<Blog6 />} />

          </Routes>
        </main>
        

        <Footer />
      </div>
    </Router>
  );
};

export default App;