import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import Home from './pages/Home'
import AddPage from './pages/AddPage'
import BorrowingsPage from './pages/Borrowings'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { store } from './store'
import { Provider } from 'react-redux'

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
            <Route path="/borrowings" element={<BorrowingsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
