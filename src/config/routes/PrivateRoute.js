import React from 'react'
import { 
  Route,
  Redirect
} from 'react-router-dom'
import { withAdminTheme } from '../../helpers/template'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authenticated = true;

  return (
    <Route 
      { ...rest } 
      render={props => (
        authenticated ? (
          withAdminTheme(<Component { ...props} />)
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} /> 
        )
      )} 
    />
  )
}

export default PrivateRoute
