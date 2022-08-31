import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { server } from '../api/server'

const initialState: IStoreState = {
  books: [],
  status: 'idle',
  error: null,
}

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await server.req('/books', 'GET')
  return response.data
})

export const addNewBook = createAsyncThunk(
  'books/addNewBook',
  async (book: BookPreview) => {
    const response = await server.req('/books', 'POST', book)
    return response.data
  }
)

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id: string) => {
    await server.req(`/books/${id}`, 'DELETE')
    return id
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.books = [...action.payload]
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addNewBook.fulfilled, (state, action) => {
        state.books.push(action.payload)
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.books.splice(
          state.books.findIndex((book: Book) => book.id === action.payload),
          1
        )
      })
  },
})

export default booksSlice.reducer

export const selectAllBooks = (state: RootState): Book[] => state.books.books
