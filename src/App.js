import React from 'react';

import './assets/scss/_variables.scss';
import './App.css';
import Search from './containers/Search/Search';
import Header from './containers/Header/Header';
import Main from './containers/Main/Main';

function App() {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Main />
    </div>
  );
}

export default App;
