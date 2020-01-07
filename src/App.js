import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';
import Category from './components/Category';
import Critter from './components/Critter';
import About from './components/About';
import Hero from './components/Hero';

class App extends Component {

  render() {
    return (
      <div className="bg-green-darker text-white min-h-screen">

        <Nav />
        <Hero />

        <div className="flex mx-auto w-4/5 pt-5">
          <Switch>
            <Route path="/critters/:category/:critter" component={Critter} />
            <Route path="/critters/:category" component={Category} />
            <Route path="/about" exact component={About} />
            <Route path="/" exact component={Home} />
          </Switch>

        </div>
      </div>
    );
  }
}

export default withRouter(App);