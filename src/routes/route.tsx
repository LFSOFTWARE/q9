import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ListDogs } from '../pages/ListDogs'
import { Menu } from '../pages/Menu'
import Registro from '../pages/Registro'
import PrivateRoute from './PrivateRoute'

const RoutesRouter = (): JSX.Element => {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/register" element={<Registro />} />
            <Route path="/menu" element={<PrivateRoute component={Menu} />} />
            <Route path="/list" element={<PrivateRoute component={ListDogs} />} />
         </Routes>
       </BrowserRouter>
  )
}

export default RoutesRouter
