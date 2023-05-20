import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import propTypes from 'prop-types'

import { Header } from '../components'

function PrivateRoute({ component, isAdmin, ...rest }) {
  const user = localStorage.getItem('Devburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }
  if (isAdmin && !JSON.parse(user).admin) {
    return <Redirect to="/" />
  }
  return (
    <>
      {!isAdmin && <Header />}
      <Route {...rest} component={component} />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.func, propTypes.element]),
  isAdmin: propTypes.bool
}
