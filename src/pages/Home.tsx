import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectAllBooks, fetchBooks } from '../features/bookSlice'
import ListItem from '../components/BookItem'
const Home: React.FC = () => {
  const [search, setSearch] = useState('')
  const dispatch = useDispatch()<AppDispatch>
  const books: Book[] = useSelector(selectAllBooks)
  const bookStatus = useSelector((state: RootState) => state.books.status)

  useEffect(() => {
    if (bookStatus === 'idle') {
      dispatch(fetchBooks())
    }
  }, [bookStatus, dispatch])

  return (
    <div className="">
      <div className="d-flex justify-content-between">
        <h1>Books</h1>
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
      <ul className="list-group">
        {books
          .filter(book =>
            book.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
          .map(book => (
            <ListItem key={book.id} item={book} />
          ))}
      </ul>
    </div>
  )
}

export default Home
