import AuthLayout from "../layouts/AuthLayout"
import RegisterPage from "./RegisterPage"
import LoginPage from "./LoginPage"

export const AuthRouter = [{
    path: "/", element: <AuthLayout />, children: [
      { index: true, element: <LoginPage /> },
      { path: "register", Component: RegisterPage },
      { path: "forger-password", Component: RegisterPage }
    ],
  }]