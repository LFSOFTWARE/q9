import React from 'react'

export const ContextGlobal = React.createContext<any>({})
interface ProviderProp {
  children: React.ReactNode
}

export const ContextGlobalProvider: React.FC<ProviderProp> = ({ children }) => {
  return (
    <ContextGlobal.Provider
      value={{
      }}
    >
      {children}
    </ContextGlobal.Provider>
  )
}
