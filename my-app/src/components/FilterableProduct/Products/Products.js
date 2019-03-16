import React, {Component} from 'react'
import ProductCategoryRow from './ProductCategoryRow/ProductCategoryRow';
import ProductRow from './ProductRow/ProductRow';

class Products extends Component{


    render(){

        let category = null;
        let rowArr =  [];
        this.props.jsonApiData.forEach(productData => {
            if(productData.category !== category){
                category = productData.category;
                rowArr.push( <ProductCategoryRow  category={productData.category} key={rowArr.length}/>);
            }
            if (productData.name.indexOf(this.props.filterText) === -1) {
                return;
            }
            if(this.props.inStockOnly == false){
                rowArr.push(<ProductRow  productData={productData} key={rowArr.length}/>);
            }else{
                if( productData.stocked == true  ){
                    rowArr.push(<ProductRow  productData={productData} key={rowArr.length}/>);
                }
            }
                
        }); 

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rowArr}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Products;