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
    this._updateList = this._updateList.bind(this);
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
        updateList = {this._updateList}
        />
        <BookList 
          books = {this.state.books} 
        />
      </div>
    )};
}

export default App;
