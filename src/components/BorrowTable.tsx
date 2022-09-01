import React, { useState } from 'react'
import ListItem from './ListItem'

interface Props {
  data: Borrowing[]
  title: string
}
const BorrowTable: React.FC<Props> = ({ data, title }) => {
  const [search, setSearch] = useState('')

  return (
    <>
      <div className="d-flex justify-content-between pt-3">
        <h2>{title}</h2>
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
      <table className="table table-striped w-100 mt-3">
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Borrower</th>
            <th>Return Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter(data =>
              data.username.toLowerCase().includes(search.toLowerCase())
            )
            .map(data => (
              <ListItem key={data.id} item={data} />
            ))}
        </tbody>
      </table>
    </>
  )
}

export default BorrowTable
