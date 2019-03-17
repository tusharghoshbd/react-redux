import React, { Component } from 'react';
import {Provider} from 'react-redux'

import { createStore } from 'redux';
import Counter from './components/Counter';
import CounterControl from './components/CounterControl';
import store from './store/index'

// const reducer = (state = {}, action) => {

//     if (action.type == 'ADD') {
//         return state = {
//             ...state,
//             'add': 'I am add'
//         };
//     }
//     else if (action.type == 'SUB') {
//         return state = {
//             ...state,
//             'sub': 'I am sub'
//         };
//     }
//     return state;

// }

// const store = createStore(reducer);

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch({ type: 'ADD' });
// store.dispatch({ type: 'SUB' });
// store.dispatch({ type: 'ADD' });
// store.dispatch({ type: 'SUB' });

//unsubscriber();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <div >
                    <Counter />
                    <CounterControl />
                </div>
            </Provider>           
        );
    }
}

export default App;
