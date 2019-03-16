import React, {Component} from 'react'


class SearchBar extends Component{

    
    
    render(){
        return(
            <div>
                <input 
                    type="text" 
                    placeholder="Seach.."
                    value={this.props.filterText}
                    onChange={(e)=>this.props.handleFilterChange(e.target.value) }/>
                <p>
                    <input type='checkbox' 
                        checked={this.props.inStockOnly}
                        onChange={(e)=>this.props.handleInStockChange(e.target.checked) }/> { ' '}
                    Only show products in the stock
                </p>
            </div>
        ) 
    }
}

export default SearchBar;