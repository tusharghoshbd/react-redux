import React, {Component} from 'react';


class Temperature extends Component{


    render(){
        return(
            <div>
                <fieldset>
                    <legend>Enter temperature in {this.props.tempertureType}:</legend>
                    <input 
                        value={this.props.temperture}
                        onChange = {(e)=>this.props.handleTemperatureChange(e.target.value)}/>
                </fieldset>
            </div>
        )
    }
}

export default Temperature;