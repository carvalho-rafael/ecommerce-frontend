import React, { useContext } from 'react'
import { Switch, Route, Router, Redirect } from 'react-router-dom'

import Home from '../pages/home';
import Login from '../pages/login';

import { AuthContext } from '../context/AuthContext'

import history from './history'
import Products from '../pages/products';
import Dashboard from '../pages/dashboard';
import Checkout from '../pages/checkout';
import Payment from '../pages/payment';
import Address from '../pages/address';
import ProductDetail from '../pages/productDetail';

interface CustomRouteI {
    isPrivate?: boolean,
    isAdmin?: boolean,
    path: string,
    component: any,
    exact?: boolean
}

function CustomRoute({ isAdmin, isPrivate, ...rest }: CustomRouteI) {
    const { loading, authenticated, user } = useContext(AuthContext)

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
                <CustomRoute path="/product/:id" component={ProductDetail} />

                <CustomRoute path="/dashboard" component={Dashboard} exact />
                <CustomRoute path="/dashboard/products" component={Dashboard} />
                <CustomRoute path="/dashboard/categories" component={Dashboard} />
                <CustomRoute path="/dashboard/settings" component={Dashboard} />

                <CustomRoute isPrivate path="/checkout" component={Checkout} />
                <CustomRoute isPrivate path="/address" component={Address} />
                <CustomRoute isPrivate path="/payment" component={Payment} />
            </Switch>
        </Router>
    )
}

export default Routes;