import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Home from './pages/Home'
import { store } from './store'
import AddPage from './pages/AddPage'
import BorrowingPage from './pages/BorrowingPage'
import BorrowBookPage from './pages/BorrowBookPage'
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <main className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<AddPage />} />
            <Route path="/borrowings" element={<BorrowingPage />} />
            <Route path="/borrow/:id" element={<BorrowBookPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
