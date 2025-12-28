import AuthLayout from "../layouts/AuthLayout"
import HomePage from "../home/HomePage"
import RegisterPage from "./RegisterPage"

export const AuthRouter = [{
    path: "/", element: <AuthLayout />, children: [
      { index: true, element: <HomePage /> },
      { path: "register", Component: RegisterPage }
    ],
  }]