import React from 'react'

interface Props {
  item: Book
}
const ListItem: React.FC<Props> = (props: Props) => {
  const { item } = props
  const borrowBook = (book: Book): string => {
    console.log('borrowABook', book)
    return ''
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
        </div>
      </div>
    </li>
  )
}

export default ListItem
