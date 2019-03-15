import React, { Component } from 'react';
import './App.css';

import First from './First/First';
import Counter from './Counter/Counter';
import Style from './style/Style';

class App extends Component {

 
    render() {
        return (
            <div>
                <First name="Tushar" email="tushar.ghosh@gmail.com" />
                <First name="Tushar Kumar " email="tushar.ghosh2@gmail.com"/>
                <First name="Tushar Kumar Ghsoh" email="tushar.ghosh1@gmail.com"/>

                <Counter />
                <Style />
            </div>
        );
    }
}

export default App;
