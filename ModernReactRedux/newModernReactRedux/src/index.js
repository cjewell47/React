import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDSu1Lda7GFfCJkvtYG_MHXZw1Dx0KknMQ';

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
