import React from 'react'
import SearchForm from '../SearchForm/SearchForm';
import './Header.css'

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-tittle text-capitalize'> Search book</h2><br />
          <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel debitis fugiat blanditiis eum possimus modi iste magnam porro expedita animi.</p>
            <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header