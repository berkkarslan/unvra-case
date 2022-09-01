import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import BookItem from '../../components/BookItem'
import { act } from 'react-dom/test-utils'

beforeEach(() => {
  const book: Book = {
    createdAt: '2022-08-31T06:48:33.158Z',
    name: 'Altıncı Koğuş',
    author: 'Anton Pavloviç Çehov',
    id: '2',
  }
  render(
    <Provider store={store}>
      <Router>
        <BookItem key={book.id} item={book} />
      </Router>
    </Provider>
  )
})

describe('renders BookItem', () => {
  it('renders book name', () => {
    expect(screen.getByText('Altıncı Koğuş')).toBeInTheDocument()
  })
  it('renders book author', () => {
    expect(screen.getByText('Anton Pavloviç Çehov')).toBeInTheDocument()
  })
  it('navigates when click button', () => {
    act(() => {
      screen.getByText('Borrow').click()
    })
    expect(window.location.pathname).toBe('/borrow/2')
  })
  it('dispatches delete action when click button', () => {
    act(() => {
      screen.getByText('Delete').click()
    })
    expect(store.getState().books.books).toEqual([])
  })
})
