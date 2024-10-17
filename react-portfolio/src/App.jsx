import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/styles.css'
import ScrollToTop from './utilities/ScrollToSection.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Work from './pages/Work.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:id" element={<Work />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
