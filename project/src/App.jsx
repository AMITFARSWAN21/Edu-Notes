import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Home from "./pages/Home"
import { EducationalFooter } from "./components/ EducationalFooter"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/docs" element={<div>Docs</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
        </Routes>
      </main>
      <EducationalFooter/>
    </BrowserRouter>
  )
}

export default App
