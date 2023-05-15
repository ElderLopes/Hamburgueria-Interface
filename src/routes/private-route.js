import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import propTypes from 'prop-types'

function PrivateRoute({ component, ...rest }) {
  const user = localStorage.getItem('Devburger:userData')

  if (!user) {
    return <Redirect to="/login" />
  }
  return <Route {...rest} component={component} />
}

export default PrivateRoute

PrivateRoute.propTypes = {
  component: propTypes.oneOfType([propTypes.func, propTypes.element])
}
