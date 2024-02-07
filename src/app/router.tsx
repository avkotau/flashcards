import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Header, SignIn, SingUp } from '@/components'
import { Decks } from '@/components/pages/decks/decks'
import { useMeQuery } from '@/services/authApi'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: '/sign-in',
  },
  {
    element: <SingUp />,
    path: '/sign-up',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/',
  },
]

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return null
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/sign-in'} />
}

const UserLayoutWithNavigation = () => {
  return (
    <>
      <Header isDisabled={false} isLoggedIn={false} logout={() => {}} />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <UserLayoutWithNavigation />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
