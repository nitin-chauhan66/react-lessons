import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './components/Navbar';
import home from  './components/home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
class  App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Navbar />
        <Switch>
        <Route exact path="/" component={home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/:post_id" component={Post}></Route>
        </Switch>
      </div>
      </BrowserRouter>
    );
  } 
}

export default App;
