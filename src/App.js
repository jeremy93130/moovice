import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'

import "./App.css"

import Battle from "./Pages/PopularBattle"
import Favorites from "./Pages/Favorites"
import Home from './Pages/Home';
import Popular from "./Pages/Popular"
import PopularBattle from "./Pages/PopularBattle"
import Week from "./Pages/Week"
import Error404 from './Pages/Error404';

class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
            <Link to="/" className="nav-link text-white">Home</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <Link to="/weekly" className="nav-link text-white">Weekly</Link>
                </li>
                <li class="nav-item">
                  <Link to="weekly-battle" className="nav-link text-white">Weekly-Battle</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white" to="popular">Popular</Link>
                </li>
                <li class="nav-item">
                  <Link className="nav-link text-white" to="favorites">Favorites</Link>
                </li>

              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/weekly" component={Week}></Route>
            <Route path="/weekly-battle" component={Battle}></Route>
            <Route path="/popular" component={Popular}></Route>
            <Route path="/popular-battle" component={PopularBattle}></Route>
            <Route path="/favorites" component={Favorites}></Route>
            <Route path="*" component={Error404}></Route>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;