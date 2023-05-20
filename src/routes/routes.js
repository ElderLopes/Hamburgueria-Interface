import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import { Admin, Cart, Home, Login, Products, Register } from '../containers'
import PrivateRoute from './private-route'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute component={Cart} path="/carrinho" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Admin} path="/pedidos" isAdmin />

        <PrivateRoute exect component={Home} path="/" />
      </Switch>
    </Router>
  )
}

export default Routes
