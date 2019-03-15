import React, { Component } from 'react';
import './Style.css'

class Style extends Component {

    render() {
        let styleClass = {
            padding: '10px',
            textAlign: 'center',
            marginBottom:'10px'
        }
        return (
            <div>
                <div className="Style" style={styleClass}>
                    <h1> Add css style </h1>
                </div>

                <div className="Style" style={{ padding: '10px',textAlign: 'center'}}>
                    <h1> Add css style </h1>
                </div>

            </div>
            
        )
    }

}

export default Style;