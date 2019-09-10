import React, { Component } from 'react';
//import './header.css';
import SearchBar from '../searchBar/searchBar.js'
import FilterBar from '../filterBar/filterBar.js'

//  API KEY: AIzaSyAkc3EU2jN4T9icxx6hU3hGv-oUif6mYDA

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      printType: 'all',
      bookType: 'all',
      error: null
    };
  }

  _getBooks() {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}`;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          console.log('error')
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          error: null
        })
        this.props.updateList(data.items)
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  _updateTerm(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  _filterPrint(option) {
    const filterByPrintResults = this.props.books.filter(book => book.printType === option);
    this.props.updateList(filterByPrintResults);
  //   this.setState({
  //     printType: option
  //   });
  //   // this.submitSearch();
  }

  _filterBook(option) {
    this.setState({
      bookType: option
    })
  }

  submitSearch() {
    
  }

  render() {
    return (
      <div className="header">
        <h1>Google Book Search</h1>
        <SearchBar 
          updateTerm={term => this._updateTerm(term)}
          getBooks={() => this._getBooks()}
          />
        {this.state.error}
        <FilterBar 
          printType = {this.state.printType}
          filter = {this.state.filter}
          filterPrint={(value) => this._filterPrint(value)}
          filterBook={(value) => this._filterBook(value)}
          />
        {this.state.error}
      </div>
    );
  }
}

export default Header;