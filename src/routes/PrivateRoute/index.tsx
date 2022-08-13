import React from 'react'
import { Navigate } from 'react-router-dom'

interface RoutesExternalProps{
  component: any
}

const PrivateRoute = ({ component }: RoutesExternalProps): JSX.Element => {
  const auth = false // your logic

  return auth ? component : <Navigate to="/register" />
}

export default PrivateRoute
