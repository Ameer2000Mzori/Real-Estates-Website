import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import About from './components/pages/About'
import './App.css'
// eslint-disable-next-line react/function-component-definition
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
