import React, { useContext } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'

import Home from '../pages/home';
import Login from '../pages/login';

import { Context } from '../context/AuthContext'

import history from './history'
import Products from '../pages/products';

interface CustomRouteI {
    isPrivate?: boolean,
    isAdmin?: boolean,
    path: string,
    component: any,
    exact?: boolean
}

function CustomRoute({ isAdmin, isPrivate, ...rest }: CustomRouteI) {
    const { loading, authenticated, user } = useContext(Context)

    if (loading) {
        return <p>Loading...</p>
    }

    if (isAdmin && !user.is_admin) {
        return <Redirect to="/" />
    }

    if (isPrivate && !authenticated) {
        return <Redirect to="/login" />
    }

    return <Route {...rest} />
}

function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <CustomRoute path="/" component={Home} exact />
                <CustomRoute path="/login" component={Login} />
                <CustomRoute path="/categoria/:id" component={Products} />
            </Switch>
        </Router>
    )
}

export default Routes;