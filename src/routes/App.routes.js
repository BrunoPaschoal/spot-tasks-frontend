import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { useSelector } from 'react-redux';

//custom route
import { ProtectedRoute } from './protected.routes'; 

import Login from '../views/login';
import NewAcount from '../views/newAcount';
import Home from '../views/home';
import { Kanban } from '../views/kanban';
import { Pomodoro } from '../views/pomodore';
import ProjectTasks from '../views/projectTasks';

export const AppRoutes = ()=>{ 

    const isAuth = useSelector(state => state.authReducer.isAuth)

    return ( 
        <Switch>
            <Route path="/Login" exact component={Login}/>
            <Route path="/SignIn" exact component={NewAcount}/>
            <ProtectedRoute path="/" exact component={Home} isAuth={isAuth}/>
            <ProtectedRoute path="/kanban" exact component={Kanban} isAuth={isAuth}/>
            <ProtectedRoute path="/pomodoro" exact component={Pomodoro} isAuth={isAuth}/>
            <ProtectedRoute path="/project/:id" exact component={ProjectTasks} isAuth={isAuth}/>
        </Switch>
    );
}


