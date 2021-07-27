
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import login from   "./login";
import show from "./show";
import './App.css';
export default class App extends React.Component{
  constructor(){
    super();
}
render(){
  return (
    <Router>
      <Switch>
        <Route 
          exact 
          path="/"
          component={login}
           />
        <Route
          exact 
          path="/show" 
          component={show} />
      </Switch>
    </Router>  
  );
}
}
