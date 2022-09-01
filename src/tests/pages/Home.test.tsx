import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '../../store'
import Home from '../../pages/Home'

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <Home />
      </Router>
    </Provider>
  )
})

describe('renders Home', () => {
  it('renders title', () => {
    expect(screen.getByText('Books')).toBeInTheDocument()
  })
  it('renders search input', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
})
