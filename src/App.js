import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
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
            <Route path='/' element={<Home />}/>
            <Route path='/' element={<Home />}/>
        </Routes>
    </Router>
      <footer>
        <h3>Footer</h3>      
      </footer>  
    </>
  )
}

export default App