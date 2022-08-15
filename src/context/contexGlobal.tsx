import React, { useEffect, useState } from 'react'

export const ContextGlobal = React.createContext<any>({})
interface ProviderProp {
  children: React.ReactNode
}

export const ContextGlobalProvider: React.FC<ProviderProp> = ({ children }) => {
  const [jwt, setJwt] = useState(null)
  useEffect(() => {
    console.log(jwt)
  }, [jwt])
  return (
    <ContextGlobal.Provider
      value={{
        jwt,
        setJwt
      }}
    >
      {children}
    </ContextGlobal.Provider>
  )
}
