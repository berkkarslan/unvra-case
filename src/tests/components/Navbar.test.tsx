import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import Navbar from '../../components/Navbar'

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Navbar />
      </Router>
    </Provider>
  )
})

describe('renders Navbar', () => {
  it('renders navbar', () => {
    expect(screen.getByText('Univera')).toBeInTheDocument()
  })
  it('renders navbar links', () => {
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Add Book')).toBeInTheDocument()
    expect(screen.getByText('Borrowings')).toBeInTheDocument()
  })
})
