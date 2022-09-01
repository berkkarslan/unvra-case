import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllBorrowings, fetchBorrowings } from '../features/librarySlice'
import ListItem from '../components/ListItem'
const BorrowingPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()<AppDispatch>
  const borrowings: Borrowing[] = useSelector(selectAllBorrowings)
  const borrowingState = useSelector(
    (state: RootState) => state.borrowings.status
  )

  useEffect(() => {
    if (borrowingState === 'idle') {
      dispatch(fetchBorrowings())
    }
  }, [borrowingState, dispatch])

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <h1>Borrowing Books</h1>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      <table className="table table-striped w-100 mt-3">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Borrower</th>
            <th>Return Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {borrowings
            .filter(borrowing =>
              borrowing.username.toLowerCase().includes(search.toLowerCase())
            )
            .map(borrowing => (
              <ListItem key={borrowing.id} item={borrowing} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default BorrowingPage
