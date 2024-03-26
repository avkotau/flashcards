import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { Routes } from '@/common'
import {
  DeckPage,
  Decks,
  ForgotPasswordPage,
  Header,
  Learn,
  Profile,
  SignIn,
  SingUp,
} from '@/components'
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

  { element: <ForgotPasswordPage />, path: Routes.ForgotPassword },
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
  {
    element: <Profile />,
    path: Routes.PersonalInformation,
  },
  {
    element: <DeckPage />,
    path: `${Routes.Decks}/:id/cards`,
  },
  {
    element: <Learn />,
    path: `${Routes.Decks}/:id/learn`,
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
  const { data, isError } = useMeQuery()

  const [logout] = useLogoutMutation()

  return (
    <>
      <Header
        avatar={data?.avatar}
        email={data?.email}
        isDisabled={false}
        isLoggedIn={!isError}
        logout={logout}
        name={data?.name}
      />
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
