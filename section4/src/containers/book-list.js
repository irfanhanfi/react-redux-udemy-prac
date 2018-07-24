import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions'

class BookList extends Component
{
    render(){
        return (
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }

    renderList(){
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title} 
                    className="list-group-item"
                    onClick={() => this.props.selectBook(book)}
                >
                    { book.title }
                </li>
            );
        });
    }
} 

function mapStateToProps(state){
    // This will show up as props inside BookList
    return {
        books: state.books
    }
}

function mapDispatchToPros(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToPros)(BookList);