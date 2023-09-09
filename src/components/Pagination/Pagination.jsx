import React from 'react'
import './Pagination.css'

const Pagination = ({ booksPerPage, totalBooks, paginate, SearchBookForPage }) => {

  const pageNumbers = []

  for(let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++ ) {
    pageNumbers.push(i)
  }


  return (
    <div className="Pagination">
        {
          pageNumbers.map(number => (
            <a href="!#" className="pagination-a" 
              onClick={() => {
                paginate(number)
                SearchBookForPage()
              }}
            >
              {number}
            </a>
          ))
        }
    </div>
  )
}

export default Pagination