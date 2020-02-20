import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/Layout/NavBar/NavBar";
import MyMap from './components/Dashboard/MyMap/MyMap'
import MyProfile from "./components/user/profile/MyProfile";


class App extends Component {
  state = {
    userLoggedIn: false
  }
  render() {
    const navBar = this.state.userLoggedIn 
        ? <MyNavBar brandName="Viade_en1b"></MyNavBar>
        : null 
    
    return (
      <BrowserRouter>
        <div className="App">
          {navBar}
          <Switch>
            <Route exact path="/"></Route>
            <Route exact path="/profile" component={MyProfile}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
