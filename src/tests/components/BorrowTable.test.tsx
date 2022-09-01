import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../store'
import BorrowTable from '../../components/BorrowTable'
import { act } from 'react-dom/test-utils'

beforeEach(() => {
  const data = [
    {
      book_id: '1',
      username: 'Berk Arslan',
      return_date: 1663227824964,
      id: '1',
    },
    {
      book_id: '2',
      username: 'BERK',
      return_date: 1663227960461,
      id: '2',
    },
  ]
  render(
    <Provider store={store}>
      <Router>
        <BorrowTable data={data} title="Example" />
      </Router>
    </Provider>
  )
})
describe('renders BorrowTable', () => {
  it('renders title', () => {
    expect(screen.getByText('Example')).toBeInTheDocument()
  })
  it('renders table', () => {
    expect(screen.getByRole('table')).toBeInTheDocument()
  })
  it('renders data', () => {
    expect(screen.getByText('BERK')).toBeInTheDocument()
  })
  it('renders search input', () => {
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument()
  })
  it('filters data', () => {
    act(() => {
      fireEvent.change(screen.getByPlaceholderText('Search'), {
        target: { value: 'arslan' },
      })
    })
    expect(screen.getByText('BERK ARSLAN')).toBeInTheDocument()
    expect(screen.queryByText('BERK')).not.toBeInTheDocument()
  })
})
