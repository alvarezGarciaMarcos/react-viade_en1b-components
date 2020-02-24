import React, { useContext, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import MyNavBar from "./components/Layout/NavBar/NavBar";
import MyProfile from "./components/user/profile/MyProfile";
import Login from "./components/Layout/login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import { ThemeContext } from './components/Layout/ThemeContext/ThemeContext'
const App = (props) => {


  const [userLoggedIn, setUserLoggedIn] = useState(true)
  const theme = useContext(ThemeContext)
  useEffect( () => {
    Object.keys(theme).map( key => {
      const value = theme[key]
      document.documentElement.style.setProperty(key, value)
    })
  })
  const navBar = userLoggedIn ? (
    <MyNavBar brandName="Viade_en1b"></MyNavBar>
  ) : null;

  return (

    <BrowserRouter>
      <div className="App">
        {navBar}

        <Switch>
          <Route
            exact
            path="/"
            render={props => <Login {...props} />}
          ></Route>
          <Route path="/profile" component={MyProfile}></Route>
          <Route exact path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </BrowserRouter>


  );
}

export default App;
