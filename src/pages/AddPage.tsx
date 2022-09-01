import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewBook } from '../features/bookSlice'

const AddPage: React.FC = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()<AppDispatch>

  const saveBook = (): any => {
    try {
      dispatch(addNewBook({ name, author }))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div>
      <h1>Add Book</h1>
      <div className="form-group">
        <label htmlFor="bookInput">Book Name</label>
        <input
          className="form-control"
          id="bookInput"
          placeholder=""
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="authorInput">Author</label>
        <input
          className="form-control"
          id="authorInput"
          placeholder=""
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2" onClick={saveBook}>
        Submit
      </button>
    </div>
  )
}

export default AddPage
