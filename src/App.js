import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Notmatch from './components/NoMatch/Notmatch';
import UserDetail from './components/UserDetail/UserDetail';


function App() {
  
  return (
      <Router>
        <Switch>
          <Route path="/Home">
            <Home></Home>
          </Route>
          <Route path="/user/:userId">
            <UserDetail></UserDetail>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <Notmatch />
          </Route>
        </Switch>
      </Router>
  
  );
}

export default App;
