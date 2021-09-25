import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const ProtectedRoute = ({isAuth, component: Component, ...rest})=>{

    return (
        <Route {...rest} render={ (props) => {
            if (isAuth === true) {
                return <Component {...rest}/>
            } else {
                return(
                    <Redirect to={{pathname: "/login", state:{from: props.location}}}/>               
                )
            }
        }
        }/>
    )
}
