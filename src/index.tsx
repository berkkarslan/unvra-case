import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import BorrowingsPage from './pages/Borrowings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/borrowings" element={<BorrowingsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
)
