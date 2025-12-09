import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import MyProject from './components/MyProject/MyProject';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';
import Particles from './components/Particles/Particles';
import Login from './components/Admin/Login';
import AdminDashboard from './components/Admin/AdminDashboard';

const App = () => {
  return (
    <Router>
      <div style={{ position: 'relative' }}>
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
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />

        </Routes>
        
      </div>
    </Router>
  )
}

export default App;