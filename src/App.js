import React, { Component } from 'react';
import './App.css';

import Header from './header/header';
import BookList from './bookList/bookList'

//  API KEY: AIzaSyAkc3EU2jN4T9icxx6hU3hGv-oUif6mYDA

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    };

  }

  render() {
    return (
      <div className="App">
        <Header />
        <BookList />
      </div>
    )};
}

export default App;
