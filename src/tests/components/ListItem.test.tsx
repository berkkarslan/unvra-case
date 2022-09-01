import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import ListItem from '../../components/ListItem'
import { act } from 'react-dom/test-utils'

beforeEach(() => {
  const book: Borrowing = {
    book_id: '1',
    username: 'Berk Arslan',
    return_date: 1663227824964,
    id: '1',
  }

  render(
    <Provider store={store}>
      <Router>
        <table>
          <tbody>
            <ListItem key={book.id} item={book} />
          </tbody>
        </table>
      </Router>
    </Provider>
  )
})

describe('renders ListItem', () => {
  it('renders borrowers name', () => {
    expect(screen.getByText('BERK ARSLAN')).toBeInTheDocument()
  })

  it('dispatches delete action when click button', () => {
    act(() => {
      screen.getByText('Return').click()
    })
    expect(store.getState().borrowings.borrowings).toEqual([])
  })
})
