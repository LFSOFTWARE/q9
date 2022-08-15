import React, { useContext, useEffect, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { ContextGlobal } from '../../context/contexGlobal'

interface RoutesExternalProps{
  component: any
}

const PrivateRoute = ({ component }: RoutesExternalProps): JSX.Element => {
  const { jwt } = useContext(ContextGlobal)
  const auth = useMemo(() => {
    console.log(jwt)
    if (jwt !== null) {
      return true
    }
    return false
  }, [jwt])

  useEffect(() => {
    console.log(auth)
  }, [auth])

  return auth ? component : <Navigate to="/register" />
}

export default PrivateRoute
