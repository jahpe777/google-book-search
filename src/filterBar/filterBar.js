import React, { Component } from 'react';
//import './filterBar.css';

class FilterBar extends Component {

    newPrintType(value) {
        if(value === 'all') {
            this.props.filterPrint(null);
        } else {
            this.props.filterPrint(value);
        }
    }

    changeBookType(value) {
        if(value === 'all') {
            this.props.filterBook(null);
        } else {
            this.props.filterBook(value);
        }
    }

    render() {
        return (
            <div className='filter-bar'>
                <form>
                    <label htmlFor='print-type'>Print Type:</label>
                        <select
                            id='print-type'
                            name='print-type'
                            onChange = {e => this.newPrintType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='books'>Books</option>
                                <option value='magazines'>Magazines</option>
                        </select>
                    <label htmlFor='book-type'>Book Type:</label>
                        <select
                            id='book-type'
                            name='book-type'
                            onChange = {e => this.changeBookType(e.target.value)}>
                                <option value='all'>All</option>
                                <option value='free-ebooks'>Free eBooks</option>
                        </select>
                </form>
            </div>
        )
    }
}

export default FilterBar;
