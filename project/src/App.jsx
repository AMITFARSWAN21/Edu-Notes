import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Home from "./pages/Home"
import { EducationalFooter } from "./components/ EducationalFooter"
import Notes from "./pages/Notes"
import { UploadedNotes } from "./pages/UploadedNotes"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/notes" element={<Notes/>} />
          <Route path="/notes/uploaded" element={<UploadedNotes/>} />
          <Route path="/docs" element={<div>Docs</div>} />
          <Route path="/blog" element={<div>Blog</div>} />
        </Routes>
      </main>
      <EducationalFooter/>
    </BrowserRouter>
  )
}

export default App
