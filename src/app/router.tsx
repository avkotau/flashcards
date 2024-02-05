import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Header, SignInPage } from '@/components'
import { Decks } from '@/components/pages/decks/decks'
import { useMeQuery } from '@/services/authApi'

const publicRoutes: RouteObject[] = [
  {
    element: <SignInPage />,
    path: '/login',
  },
]

const privateRoutes: RouteObject[] = [
  {
    element: <Decks />,
    path: '/decks',
  },
]

function PrivateRoutes() {
  const { isError, isLoading } = useMeQuery()

  if (isLoading) {
    return null
  }

  const isAuthenticated = !isError

  return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />
}

const UserLayoutWithNavigation = () => {
  return (
    <>
      <Header isDisabled={false} isLoggedIn={false} logout={() => {}} />
      <Outlet />
    </>
  )
}

export const Router = () => {
  return <RouterProvider router={router} />
}

const router = createBrowserRouter([
  ...publicRoutes,
  {
    element: <UserLayoutWithNavigation />,
    path: '/',
  },
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
])
