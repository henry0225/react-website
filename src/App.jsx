
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import login from   "./login"
import show from "./show"
import './App.css';
export default function App(){
  return(
    <Router>
      <Switch>
        <Route exact path="/login" component={login} />
        <Route exact path="/show" component={show} />
      </Switch>
    </Router>
  )
}
