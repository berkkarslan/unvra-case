import React, { useEffect } from 'react'
import { selectAllBooks, fetchBooks } from '../features/bookSlice'
import { useSelector, useDispatch } from 'react-redux'
import ListItem from '../components/ListItem'
const Home: React.FC = () => {
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
      <h1>Books</h1>
      <ul className="list-group">
        {books.map(book => (
          <ListItem key={book.id} item={book} />
        ))}
      </ul>
    </div>
  )
}

export default Home
