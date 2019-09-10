import React, { Component } from 'react';
// import './bookList.css';
import Books from '../books/books';

class BookList extends Component {

  render() {
      let tempBooks = this.props.books || []
      const books = tempBooks.map((book, i) => 
        <Books {...book} key = {i} />
      )

      return (
        <div className="bookList">
          {books}
        </div>
      )};
}

export default BookList;