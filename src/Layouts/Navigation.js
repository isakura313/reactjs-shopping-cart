import React from 'react'
import Product from '../containers/Product'
import Cart from '../containers/Cart'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function Navigation(){
    return (
        <Router>
            <AppBar>
                <Toolbar>

                <Button><Link to="/">Home</Link></Button>
                <Button><Link to="/cart">Корзина</Link></Button>
                <Button><Link to="/products">Товары</Link></Button>

                </Toolbar>
            </AppBar>
            <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Switch>
        </Router>
    )
}