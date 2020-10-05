import React from 'react';
import { useContext } from 'react';
import {
    BrowserRouter as Router,
 
    Route,

    Redirect,
   
  } from "react-router-dom";
import { UserContext } from '../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    return (
        <div>
            <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
        </div>
    );
};

export default PrivateRoute;