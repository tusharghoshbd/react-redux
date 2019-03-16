import React, {Component} from 'react';

import Products from './Products/Products';
import SearchBar from './SearchBar/SearchBar';


class FilterableProduct extends Component{

    jsonApiData = [
        {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
        {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
        {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
        {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
        {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
        {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
    ];

    constructor(props){
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false
        };
    }
    

    handleFilterChange(filterText){
        this.setState({
            filterText:filterText
        })
    }
    handleInStockChange(inStockOnly){
        this.setState({
            inStockOnly:inStockOnly
        })
    }

    render(){
        return (
            <div style={{margin:'50px'}}>
                <SearchBar  
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    handleFilterChange = {this.handleFilterChange.bind(this)}
                    handleInStockChange = {this.handleInStockChange.bind(this)}/>
                <Products
                    filterText={this.state.filterText} 
                    inStockOnly={this.state.inStockOnly}
                    jsonApiData={this.jsonApiData} />
            </div>
        )
    }
}

export default FilterableProduct;