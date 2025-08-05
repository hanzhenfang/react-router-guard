import { createBrowserRouter, Navigate } from 'react-router'
import Home from '../pages/home/index'
import About from '../pages/about/index'
import New from '../pages/new/index'
import Layout from '../pages/layout/index'
import Login from '../pages/login/index'

export const routerConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to="/home"
            replace
          />
        ),
      },
      {
        path: 'home',
        element: <Home />,
        meta: {
          auth: true,
        },
      },
      {
        path: 'about',
        element: <About />,
      },

      {
        path: 'new',
        children: [
          {
            path: ':id',
            element: <New />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]

// const router = createBrowserRouter(routerConfig)

export default routerConfig
