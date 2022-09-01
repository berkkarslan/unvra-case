import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { findBook } from '../features/bookSlice'
import { deleteBorrow } from '../features/librarySlice'

interface Props {
  item: Borrowing
}
const BookItem: React.FC<Props> = (props: Props) => {
  const { item } = props
  const dispatch = useDispatch()<AppDispatch>
  const date = new Date(item.return_date).toISOString()
  const book = useSelector(state => findBook(state, item.id))

  const returnBook = (): any => {
    dispatch(deleteBorrow(item.id))
  }

  return (
    <tr>
      <td>{book?.name}</td>
      <td>{item.username.toLocaleUpperCase()}</td>
      <td>{date}</td>
      <td>
        <button type="button" className="btn btn-success" onClick={returnBook}>
          Return
        </button>
      </td>
    </tr>
  )
}

export default BookItem
