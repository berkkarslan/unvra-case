import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToList } from '../features/librarySlice'
import { findBook } from '../features/bookSlice'

const BorrowBookPage: React.FC = () => {
  const [name, setName] = useState('')
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()<AppDispatch>
  if (id === undefined) {
    navigate('/')
    return null
  }
  const book = useSelector(state => findBook(state, id))

  const saveBorrow = (): any => {
    try {
      dispatch(addToList({ book_id: id, username: name }))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>Borrow Book</h1>
      <strong>{book != null ? book.name : 'Book not found'}</strong>
      <div className="form-group mt-3">
        <label htmlFor="bookInput">Username</label>
        <input
          className="form-control"
          id="bookInput"
          placeholder=""
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-2"
        onClick={saveBorrow}
      >
        Borrow
      </button>
    </div>
  )
}
export default BorrowBookPage
