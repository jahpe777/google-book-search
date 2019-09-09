import React, { Component } from 'react';
import './App.css';
import Header from './header/header';
import BookList from './bookList/bookList'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: null
    };
  }

  _updateList(data) {
    console.log(data)
    this.setState({
      books: data
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header 
        updateList={(data) => this._updateList(data)} 
        />
        {this.state.books.map(book => {
          return <p>{book.volumeInfo.title}</p>
        })}
        <BookList 
          books = {this.state.books} />
      </div>
    )};
}

export default App;
