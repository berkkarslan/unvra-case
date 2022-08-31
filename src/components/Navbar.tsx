import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar: React.FC = () => {
  const activeCheck = (isActive: boolean): string =>
    isActive ? 'nav-link active' : 'nav-link'
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#">
          Univera
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavLink to="/" className={({ isActive }) => activeCheck(isActive)}>
              Home
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) => activeCheck(isActive)}
            >
              Add Book
            </NavLink>
            <NavLink
              to="/borrowings"
              className={({ isActive }) => activeCheck(isActive)}
            >
              Borrowings
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
