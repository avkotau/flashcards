import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Routes } from '@/common'
import { Decks, Header, SignIn, SingUp } from '@/components'
import { useLogoutMutation, useMeQuery } from '@/services/authApi'

const publicRoutes: RouteObject[] = [
  {
    element: <SignIn />,
    path: Routes.SignIn,
  },
  {
    element: <SingUp />,
    path: Routes.SignUp,
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Navigate to={Routes.Decks} />,
    path: Routes.Main,
  },
  {
    element: <Decks />,
    path: Routes.Decks,
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
  const [logout] = useLogoutMutation()

  return (
    <>
      <Header isDisabled={false} isLoggedIn={false} logout={logout} />
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
