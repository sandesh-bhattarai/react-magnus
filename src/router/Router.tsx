// import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "../pages/home/HomePage";
import RegisterPage from "../pages/auth/RegisterPage";
import NotFound from "../pages/error/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../pages/layouts/AuthLayout";
import UserLayout from "../pages/layouts/UserLayout";
import AdminDashboard from "../pages/cms/AdminDashboard";

const router = createBrowserRouter([
  {path: "/", element: <AuthLayout />, children: [
      { index: true, element: <HomePage /> },
      { path: "register", Component: RegisterPage },
    ],
  },
  { path: "*", element: <NotFound /> },
  { path: "/admin", element: <UserLayout />, children: [
      { index: true, element: <AdminDashboard /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default function AppRouter() {
  return (
    <>
      <RouterProvider router={router} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" Component={RegisterPage} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter> */}
    </>
  ); 
}