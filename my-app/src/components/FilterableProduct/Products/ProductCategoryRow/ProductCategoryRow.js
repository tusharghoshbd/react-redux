import React, {Component} from 'react'


class ProductCategoryRow extends Component{

    render(){
        return (
            <tr>
                <td colSpan="2">
                    <b>{this.props.category}</b>
                </td>
            </tr>
        )
    }
}

export default ProductCategoryRow;