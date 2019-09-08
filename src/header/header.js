import React, { Component } from 'react';
import './header.css';
import SearchBar from './searchBar/searchBar';
import FilterBar from './filterBar/filterBar';

//  API KEY: AIzaSyAkc3EU2jN4T9icxx6hU3hGv-oUif6mYDA

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
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

  render() {
    return (
      <div className="header">
        <h1>Google Book Search</h1>
        <SearchBar />
        <FilterBar />
      </div>
    );
  }
}

export default Header;
