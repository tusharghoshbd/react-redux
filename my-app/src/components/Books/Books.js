import React, {Component} from 'react';

import Book from './Book/Book';


class Books extends Component{

    

    render(){
        let books = this.props.books.map((book)=>{
            return <Book 
                        book={book} 
                        key={book.id}  
                        handleDelete= {this.props.handleDelete }
                        handleChange= {this.props.handleChange }
                    />
        });
        return (
            <div>
                {books}
            </div>
        )
    }

}

export default Books;