import React from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ListDogs } from '../pages/ListDogs'
import { Menu } from '../pages/Menu'
import { NotFound } from '../pages/NotFound'
import Registro from '../pages/Registro'
import PrivateRoute from './PrivateRoute'

const RoutesRouter = (): JSX.Element => {
  return (
      <BrowserRouter>
         <Routes>
            <Route path="/register" element={<Registro />} />
            <Route path="/" element={<PrivateRoute component={<Menu />} />} />
            <Route path="/list" element={<PrivateRoute component={<ListDogs />} />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
       </BrowserRouter>
  )
}

export default RoutesRouter
