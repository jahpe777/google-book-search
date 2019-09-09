import React, { Component } from 'react';
//import './books.css';

class Books extends Component {
    render() {
        return (
            <div className='book'>
                <img
                    src={this.props.volumeInfo.imageLinks.thumbnail}
                    alt='book cover'/>
                <div className='book-text-column'>
                    <div className='the-text'>
                        <h3>{this.props.volumeInfo.title}</h3>
                        <p>{this.props.volumeInfo.authors}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Books;