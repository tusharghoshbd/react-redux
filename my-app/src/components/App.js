import React, { Component } from 'react';
import './App.css';

import First from './First/First';
import Counter from './Counter/Counter';
import Style from './style/Style';
import Books from './Books/Books';


class App extends Component {

    constructor(){
        super()
        this.state ={
            books : [
                { auther:'Kamrul hasa', name:'Javascript', id:1},
                { auther:'Kamrul hasan', name:'Jquery', id:2},
                { auther:'Kamrul hasan', name:'Angular', id:3}
            ]
        };
    }    

    handleDelete = (pBook) =>{

        let filteredData  =this.state.books.filter((book)=>book.id != pBook.id );
        this.setState({
            books: filteredData
        });
    }

    handleChange = (auther, pBook)=>{
        console.log(this.state.books);
        let filteredData  =this.state.books.map((book)=>{
            if(book.id === pBook.id ){
                return {
                    ...pBook,
                    auther
                }
            }
            return book;
        });
        this.setState({
            books: filteredData
        });

    }
   
   
 
    render() {
        return (
            <div>
                {/* <First name="Tushar" email="tushar.ghosh@gmail.com" />
                <First name="Tushar Kumar " email="tushar.ghosh2@gmail.com"/>
                <First name="Tushar Kumar Ghsoh" email="tushar.ghosh1@gmail.com"/>

                <Counter />
                <Style /> */}

                <div className="container">
                    <Books 
                        books={this.state.books} 
                        handleDelete={this.handleDelete.bind(this)}
                        handleChange={ this.handleChange.bind(this) }
                    /> 
                </div>
            </div>
        );
    }
}

export default App;
