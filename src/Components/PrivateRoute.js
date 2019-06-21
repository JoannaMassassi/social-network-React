import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Firebase/Auth";


const PrivateRoute = ({ componentIfUserExists: Component, ...rest }) => {
    const { currentUser } = useContext(AuthContext);

    return (
        <Route
            {...rest}
             render={routeProps => 
            !!currentUser ? (
         <Component {...routeProps} />

        ) : (

            <Redirect to={"/"} />
        )
        } 
        />

    );
};

export default PrivateRoute;
