import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css'
const App = () => {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/work' element={<Work />}/>
            <Route path='/contact' element={<Contact />}/>
        </Routes>
    </Router>
      <footer className='footer'>
        <h3>Footer</h3>      
      </footer>  
    </>
  )
}

export default App