import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/styles.css'
import ScrollToTop from './utilities/ScrollToSection.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HeaderMenu from './components/HeaderMenu.jsx'

import Home from './pages/Home'
import Work from './pages/Work.jsx'
// import Footer from './components/Footer.jsx'

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <HeaderMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work/:slug" element={<Work />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
