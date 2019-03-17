import React, {Component} from 'react';
import {connect} from 'react-redux';

class Counter extends Component{

    render(){
        return(
            <div>            
                {this.props.count}
            </div>
        )
    }
}

const mapStateToProp = (state)=>{
    return{
        count : state.count
    }   
}



export default connect(mapStateToProp)(Counter);