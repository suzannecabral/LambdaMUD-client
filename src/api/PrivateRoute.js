import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            localStorage.getItem("token") ? (
                <Component {...props} />
            ) : (
                // Modify this path

                // To redirect back to home:
                // <Redirect to="/" />

                <Redirect to="/" />
            )
        }
    />
);


export default PrivateRoute;