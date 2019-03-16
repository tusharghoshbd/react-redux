import React, {Component} from 'react';


class Book extends Component{

    constructor(props){
        super(props);
        this.state ={
            isEditable : false
        }

    }

    handleEdit(book){
        this.setState({
            isEditable:true
        });
    }
    handleKeyPress= (event)=>{
        if(event.key == 'Enter'){
            this.setState({
                isEditable: false
            });
        }
    }
    

    render(){

        let output = this.state.isEditable ? 
                        <input 
                            value={this.props.book.auther} 
                            placeholder="Enter author" 
                            onChange={ (e) => this.props.handleChange(e.target.value, this.props.book)} 
                            onKeyPress = { (e) => this.handleKeyPress(e) }
                            /> :
                        <p>{this.props.book.auther}</p>  ;

        return (
           <div>
                <li className="list-group-item d-flex">
                    {output}
                    <span className="ml-auto">{this.props.book.name}</span>
                    <div className="mx-4">
                        <button onClick={ ()=> this.handleEdit(this.props.book) }>
                            <i className="fas fa-edit"></i> Edit
                        </button> 
                        <button onClick={ ()=> this.props.handleDelete(this.props.book) }>
                            <i className="fas fa-trash"></i> DEL
                        </button>                        
                    </div>
                </li> 
           </div> 
        )
    }
}

export default Book;