import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from '../../store'
import AddPage from '../../pages/AddPage'

beforeEach(() => {
  render(
    <Provider store={store}>
      <Router>
        <AddPage />
      </Router>
    </Provider>
  )
})

describe('renders AddPage', () => {
  it('renders title', () => {
    expect(screen.getByText('Add Book')).toBeInTheDocument()
  })
  it('dispatches submit action when click submit', () => {
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Book Name'), {
        target: { value: 'Harry Potter' },
      })
      fireEvent.change(screen.getByPlaceholderText('Author'), {
        target: { value: 'J. K. Rowling' },
      })
      screen.getByText('Submit').click()
    })

    expect(store.getState().books.status).toBe('idle')
    expect(window.location.pathname).toBe('/')
  })
})
