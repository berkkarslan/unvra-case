import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { server } from '../api/server'

const initialState: BorrowingStore = {
  borrowings: [],
  status: 'idle',
  error: null,
}

export const fetchBorrowings = createAsyncThunk(
  'library/fetchBorrowings',
  async () => {
    const response = await server.req('/borrowings', 'GET')
    return response.data
  }
)

export const addToList = createAsyncThunk(
  'library/addToList',
  async (form: BorrowForm) => {
    const borrowItem = {
      book_id: form.book_id,
      username: form.username,
      return_date: Date.now(),
    }
    const response = await server.req('/borrowings', 'POST', borrowItem)
    return response.data
  }
)

export const deleteBorrow = createAsyncThunk(
  'library/deleteBorrow',
  async (id: string) => {
    await server.req(`/borrowings/${id}`, 'DELETE')
    return id
  }
)

const librarySlice = createSlice({
  name: 'borrowings',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchBorrowings.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchBorrowings.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.borrowings = [...action.payload]
      })
      .addCase(fetchBorrowings.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(addToList.fulfilled, (state, action) => {
        state.borrowings.push(action.payload)
      })
      .addCase(deleteBorrow.fulfilled, (state, action) => {
        state.borrowings.splice(
          state.borrowings.findIndex(
            (borrowing: Borrowing) => borrowing.id === action.payload
          ),
          1
        )
      })
  },
})

export default librarySlice.reducer

export const selectAllBorrowings = (state: RootState): Borrowing[] =>
  state.borrowings.borrowings
