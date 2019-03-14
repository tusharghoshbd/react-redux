import React, {Component} from 'react';

class First extends Component{

    render(){
        console.log(this.props);
        return (
            <div>
                <h3> Name: {this.props.name} </h3>
                <span>Age: {this.props.email}</span>
                <hr/>
            </div>
        )
    }
}

export default First;
