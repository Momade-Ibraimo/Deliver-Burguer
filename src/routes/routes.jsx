import { createBrowserRouter } from 'react-router-dom'

import paths from '../Constants/paths.jsx'
import { Home, Login, Products, Registre, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/cadastro',
    element: <Registre />
  },
  {
    path: '/',
    element: <PrivateRoute component={Home} />
  },
  {
    path: '/produtos',
    element: <PrivateRoute component={Products} />
  },
  {
    path: '/carrinho',
    element: <PrivateRoute component={Cart} />
  },
  {
    path: `${paths.Order}`,
    element: <PrivateRoute component={Admin} isAdmin />
  },
  {
    path: `${paths.Products}`,
    element: <PrivateRoute component={Admin} isAdmin />
  },
  {
    path: `${paths.NewProducts}`,
    element: <PrivateRoute component={Admin} isAdmin />
  },
  {
    path: `${paths.EditProducts}`,
    element: <PrivateRoute component={Admin} isAdmin />
  }
])

export default router
