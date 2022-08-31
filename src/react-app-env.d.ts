interface Book {
  id: string
  name: string
  author: string
  createdAt: string
}

interface IStoreState {
  books: Book[]
  status: string
  error: undefined | null | string
}

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
