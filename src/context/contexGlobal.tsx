import React, { useEffect, useState } from 'react'

export const ContextGlobal = React.createContext<any>({})
interface ProviderProp {
  children: React.ReactNode
}

export const ContextGlobalProvider: React.FC<ProviderProp> = ({ children }) => {
  const [jwt, setJwt] = useState<any>()
  const [breedSearch, setBreedSearch] = useState<any>(undefined)

  useEffect(() => {
    const jwtStore = localStorage.getItem('jwt')
    setJwt(jwtStore)
  }, [jwt])

  return (
    <ContextGlobal.Provider
      value={{
        jwt,
        setJwt,
        breedSearch,
        setBreedSearch
      }}
    >
      {children}
    </ContextGlobal.Provider>
  )
}
