import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './components/pages/HomePage'
import NotFound from './components/pages/NotFound'
import BookMarks from './components/pages/BookMarks'
import './App.css'
// eslint-disable-next-line react/function-component-definition
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/BookMarks" element={<BookMarks />} />
      </Routes>
    </Router>
  )
}

export default App
