import React, {Component} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css';

class App extends Component{
  render() {
    return(
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;