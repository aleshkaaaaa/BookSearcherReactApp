import React, { useState } from 'react'
import './SearchForm.css'
import {FaSearch} from 'react-icons/fa';
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { ArrayOfItemsFound } from '../store/slices/SearcherSlice'
import { SearchValue } from '../store/slices/PaginatorSlice'

const SearchForm = () => {
  
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [bookData, setData] = useState([]);

  const searchBook=(evt)=>{
    if(evt.key==="Enter")
    {
      axios.get('https://www.googleapis.com/books/v1/volumes?q='+ search +'&key=SECRET_KEY'+'&maxResults=30')
      .then(response => {
        setData(response.data)
        dispatch(SearchValue(search))
        dispatch(ArrayOfItemsFound(response.data))
      })
      .catch(error => {
        console.error('Ошибка при запросе к API:', error);
      });

    }

  }


  return (
    <>
      <div className='search-form'>
        <div className='container'>
          <div className='search-form-content'>
            <div className='search-form'>
              <div className='search-form-elem flex flex-sb bg-white'>
                <input type="text" className='form-control' placeholder='Name of book...'
                  value={search} 
                  onChange={e=>setSearch(e.target.value)}
                  onKeyUp={searchBook}/>
                <button className='flex flex-c'>
                  <FaSearch className='text-light-black' size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default SearchForm
