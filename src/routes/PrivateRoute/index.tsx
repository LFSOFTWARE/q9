import { useContext, useMemo } from 'react'
import { Navigate } from 'react-router-dom'
import { ContextGlobal } from '../../context/contexGlobal'

interface RoutesExternalProps{
  component: any
}

const PrivateRoute = ({ component }: RoutesExternalProps): JSX.Element => {
  const { jwt } = useContext(ContextGlobal)
  const auth = useMemo(() => {
    if (jwt !== null) {
      return true
    }
    return false
  }, [jwt])

  return auth ? component : <Navigate to="/register" />
}

export default PrivateRoute
