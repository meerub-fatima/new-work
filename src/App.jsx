
import { Box } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services' ;
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';



 function App() {
  
  return (
    <Box w="100vw" bg="black" color="white" fontFamily="outfit" >
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services/>} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
    </Box>
  )
}
export default App

