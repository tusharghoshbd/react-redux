import React, { Component } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Post from './components/Post';
import PostDetail from './components/PostDetail';

class App extends Component {

  render() {
    return (
      <div>
          <BrowserRouter>
              <Nav />
              <Switch>
                <Route  path="/" exact component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/contact" component={Contact}/>
                <Route  path="/post" component={Post}/>
                <Route  path="/post-detail/:postId" component={PostDetail}/>

              </Switch>       


          </BrowserRouter>

      </div>
    );
  }
}

export default App;
