import React from 'react';
// 1. IMPORT ROUTER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 2. IMPORT YOUR COMPONENTS
import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import MyProject from './components/MyProject/MyProject';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from './components/Particles/Particles';

// 3. IMPORT THE NEW PAGES
import Login from './components/Admin/Login';
import AdminDashboard from './components/Admin/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
        
        {/* Global Particles */}
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />

        <Routes>
          {/* --- PAGE 1: YOUR MAIN PORTFOLIO --- */}
          {/* This renders all your sections when the path is "/" */}
          <Route path="/" element={
            <>
              <Navbar/>
              <Hero/>
              <About/>
              <Services/>
              <MyProject/>
              <Contact/>
              <Footer/>
            </>
          } />

          {/* --- PAGE 2: LOGIN PAGE --- */}
          <Route path="/login" element={<Login />} />

          {/* --- PAGE 3: ADMIN DASHBOARD --- */}
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
        
      </div>
    </Router>
  )
}

export default App;