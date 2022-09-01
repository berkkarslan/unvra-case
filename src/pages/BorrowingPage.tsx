import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllBorrowings, fetchBorrowings } from '../features/librarySlice'
import BorrowTable from '../components/BorrowTable'
const BorrowingPage: React.FC = () => {
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

  const isToday = (date: number): boolean => {
    const today = new Date()
    const returnDate = new Date(date)
    return today.toDateString() === returnDate.toDateString()
  }

  return (
    <div className="">
      <BorrowTable
        data={borrowings
          .filter(borrowing => isToday(borrowing.return_date))
          .sort((a, b) => a.return_date - b.return_date)}
        title="Books to be delivered today"
      />
      <BorrowTable data={borrowings} title="All borrowed books" />
    </div>
  )
}

export default BorrowingPage
