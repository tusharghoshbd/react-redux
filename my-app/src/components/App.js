import React, { Component } from 'react';
import './App.css';

import First from './First/First';


class App extends Component {

 


    render() {

        // let h1 = 'Hello World';
        // let p = `his is the first chapter in a step-by-step guide about main React concepts. 
        //     You can find a list of all its chapters in the navigation sidebar. If you’re reading 
        //     this from a mobile device, you can access the navigation by pressing the button in the
        //     bottom right corner of your screen.`;

        return (
            <div>
                {/* <h1> {h1} </h1>
                <p> {p} </p>
                <hr/> */}
                <First name="Tushar" email="tushar.ghosh@gmail.com" />
                <First name="Tushar Kumar " email="tushar.ghosh2@gmail.com"/>
                <First name="Tushar Kumar Ghsoh" email="tushar.ghosh1@gmail.com"/>

            </div>
        );
    }
}

export default App;
