import React, {Component} from 'react';
import {connect} from 'react-redux';

class CounterContol extends Component{

    render(){
        return(
            <div>
                 <button onClick={ ()=> this.props.plusHandle()}> Plus +++ </button>
                <button onClick={ ()=> this.props.minusHandle()}> Minus -- </button>
            </div>
        )
    }
}

const mapDispatchTopProp=(dispatch)=>{
    return{
        plusHandle : ()=>{
            dispatch({type:'PLUS'})
        } ,
        minusHandle : ()=>{
            dispatch({ type:'MINUS' })
        } 
    }
}
export default connect(null, mapDispatchTopProp)(CounterContol);
