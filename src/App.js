import React, { useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import { createContext } from 'react';
import AllActivities from './components/AllActivities/AllActivities';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';

export const UserContext = createContext() 
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
      <Home></Home>
          </Route>

          <Route path="/home">
      <Home></Home>
          </Route>
           <Route path="/login">
      <Login></Login>
          </Route> 
          <PrivateRoute path="/register/:event">
      <Register></Register>
          </PrivateRoute>

          <PrivateRoute path="/register/:event">
      <Register></Register>
          </PrivateRoute>


          <Route path="/allActivities">
      <AllActivities></AllActivities>
          </Route> 

         <Route path="/admin">
      <Admin></Admin>
          </Route> 
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
