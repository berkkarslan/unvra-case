import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteBook } from '../features/bookSlice'

interface Props {
  item: Book
}
const BookItem: React.FC<Props> = (props: Props) => {
  const { item } = props
  const navigate = useNavigate()
  const dispatch = useDispatch()<AppDispatch>
  const deleteFc = (): any => {
    dispatch(deleteBook(item.id))
  }

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <strong>{item.name}</strong>
          <p>{item.author}</p>
        </div>
        <div>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => navigate(`/borrow/${item.id}`)}
          >
            Borrow
          </button>
          <button
            className="btn btn-sm btn-danger ms-2"
            onClick={() => deleteFc()}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  )
}

export default BookItem
