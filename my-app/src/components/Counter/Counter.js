import React, {Component} from 'react';

class Counter extends Component{

    // state = {
    //     counter : 0
    // };

    constructor(props){
        super(props);
        this.state = {
            counter : 0,
            color: 'black'
        }
    }

    plusHandle = ()=>{
        this.setState({
            counter : this.state.counter + 1,
            color: 'black'
        },()=>{
            if(this.state.counter >= 10){
                this.setState({
                    color: 'green'
                })
            }
            if(this.state.counter <= 3 ){
                this.setState({
                    color: 'red'
                })
            }
        })
        
    }
    minusHandle = ()=>{
        this.setState({
            counter : this.state.counter - 1,
            color: 'black'
        },()=>{
            if(this.state.counter >= 10){
                this.setState({
                    color: 'green'
                })
            }
            if(this.state.counter <= 3 ){
                this.setState({
                    color: 'red'
                })
            }
        })
       
    }

    render(){
        console.log(this.state);
        return (
            <div style={ {color:this.state.color}}>
                <button onClick={ ()=> this.minusHandle()  } >Minus -</button>
                 <h3> {this.state.counter} </h3>
                <button onClick={ ()=> this.plusHandle() } >Plus +</button>
            </div>
        )
    }
}

export default Counter;