 import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from "./components/hero/hero";
import About from "./components/about/About";
import Services from "./components/Services/Services";
import MyProject from './components/MyProject/MyProject';
import Contact from './components/contact/Contact';
import Footer from './components/Footer/Footer';


 const App = () => {
  return (
    
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyProject/>
      <Contact/>
      <Footer/>
      
    </div>
  )
 }

 export default App