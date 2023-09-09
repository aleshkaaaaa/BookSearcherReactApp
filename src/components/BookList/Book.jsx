import React from 'react'
import './Book.css';
import { useSelector } from 'react-redux'

const Book = () => {

  const {items} = useSelector(state => state.searcher.value)
  console.log(items)
  return (
    <>
      {
        items.map((item) =>{
          let bookPicture = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
          let bookTitle = item.volumeInfo.title
          let bookAuthor = item.volumeInfo.authors
          let bookCategories = item.volumeInfo.categories
          return(
            <>
              <div className='book'>
                  <div className='book-content flex flex-column '>
                    <div className="book-img">
                      <img src={bookPicture} alt="" />
                    </div>
                    <p className='book-category text-center '>{bookCategories}</p>
                    <h3 className='book-tittle fs-16 text-center'>{bookTitle}</h3>
                    <p className='book-autor text-center text-light-black'>{bookAuthor}</p>
                  </div>
              </div>
            </>
          )
        })
      }
    </>
  )
}

export default Book