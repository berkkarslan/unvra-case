import React from 'react'
import { deleteBook } from '../features/bookSlice'
import { useDispatch } from 'react-redux'

interface Props {
  item: Book
}
const ListItem: React.FC<Props> = (props: Props) => {
  const { item } = props
  const dispatch = useDispatch()<AppDispatch>

  const borrowBook = (book: BookPreview): any => {
    console.log('borrowBook', book)
  }

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
            onClick={() => borrowBook(item)}
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

export default ListItem
