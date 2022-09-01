interface Book {
  id: string
  name: string
  author: string
  createdAt: string
}

interface BookPreview {
  name: string
  author: string
}

interface Borrowing {
  book_id: string
  username: string
  return_date: number
  id: string
}

interface BorrowForm {
  book_id: string
  username: string
  return_date: number
}

interface IStoreState {
  books: Book[]
  status: string
  error: undefined | null | string
}

interface BorrowingStore {
  borrowings: Borrowing[]
  status: string
  error: undefined | null | string
}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
