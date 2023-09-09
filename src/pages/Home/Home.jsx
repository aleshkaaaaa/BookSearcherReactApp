import React from 'react';
import Header from '../../components/Header/Header';
import BookList from '../../components/BookList/BookList';
import { Provider } from 'react-redux';
import store from '../../components/store/store';

const Home = () => {
  return (
      <main>
        <Provider store={store}>
          <Header/>
          <BookList/>
        </Provider>
      </main>
  )
}

export default Home