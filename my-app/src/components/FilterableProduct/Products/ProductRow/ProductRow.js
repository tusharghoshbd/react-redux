import React, {Component} from 'react'


class ProductRow extends Component{

    render(){
        return (
            <tr>
                <td>
                   <span style={{color: this.props.productData.stocked == false ? 'red':'black'}}>
                        {this.props.productData.name} 
                    </span>
                </td>
                <td>
                    {this.props.productData.price}
                </td>
            </tr>
        )
    }
}

export default ProductRow;