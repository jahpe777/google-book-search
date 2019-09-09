import React, { Component } from 'react';
//import './searchBar.css';

class SearchBar extends Component {
    
    render() {
        return (
            <div className='searchBar'>
                <input 
                    placeholder="Search" 
                    onChange={term => this.props.updateTerm(term)} 
                    />
                <button 
                    onClick={() => this.props.getBooks()}
                    >
                    Search
                </button>
            </div>
        )
    }
}

export default SearchBar;