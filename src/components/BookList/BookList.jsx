import React, { useState } from 'react';
import './BookList.css';
import { useSelector, useDispatch } from 'react-redux'
import Book from './Book';
import Pagination from '../Pagination/Pagination';
import axios from 'axios';
import { ArrayOfItemsFound } from '../store/slices/SearcherSlice'

const BookList = () => {
  const {totalItems, items} = useSelector(state => state.searcher.value)
  const [currentPage, setCurrentPage] = useState(1)
  const [booksPerPage] = useState(30)

  const searchValue = useSelector(state => state.paginator.value)
  const dispatch = useDispatch();

  const paginate = pageNumer => setCurrentPage(pageNumer)

  const SearchBookForPage = () => {
    axios.get('https://www.googleapis.com/books/v1/volumes?q='+ searchValue +'&key=SECRET_KEY'+'&maxResults=30'+'&startIndex=' + currentPage * 30)
    .then(response => {
      dispatch(ArrayOfItemsFound(response.data))
    })
    .catch(error => {
      console.error('Ошибка при запросе к API:', error);
    });
  }

        return (
          <div className='BookList'>
            <div className="container">
              <div className="BookList-content flex flex-column">
                <div className="BookList-amountOfResults text-black">
                  Found {totalItems} results
                </div>
                <div className="BookList-books grid">
                  <Book />
                  {console.log(items)}
                </div>
                <div className="BookList-pagination">
                  <Pagination 
                    SearchBookForPage = {SearchBookForPage}
                    booksPerPage = {booksPerPage}
                    totalBooks = {totalItems}
                    paginate = {paginate}
                  />
                </div>
              </div>
            </div>
          </div>
        )
}

export default BookList
