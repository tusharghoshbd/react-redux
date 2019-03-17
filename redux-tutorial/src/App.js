import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

const reducer = (state = {}, action) => {

    if (action.type == 'ADD') {
        return state = {
            ...state,
            'add': 'I am add'
        };
    }
    else if (action.type == 'SUB') {
        return state = {
            ...state,
            'sub': 'I am sub'
        };
    }
    return state;

}

const store = createStore(reducer);

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUB' });
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUB' });

//unsubscriber();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
