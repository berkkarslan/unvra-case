import React, { useState } from 'react'
import { addNewBook } from '../features/bookSlice'
import { useDispatch } from 'react-redux'

const AddPage: React.FC = () => {
  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')

  const dispatch = useDispatch()<AppDispatch>

  const saveBook = (): any => {
    dispatch(addNewBook({ name, author }))
  }
  return (
    <div>
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
