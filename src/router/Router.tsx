// import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "../pages/error/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthRouter } from "../pages/auth/authRouter";
import { AdminRouter } from "../pages/cms/adminRouter";

const router = createBrowserRouter([
  ...AuthRouter,
  { path: "*", element: <NotFound /> },
  ...AdminRouter
]);

export default function AppRouter() {
  return (
    <>
      <RouterProvider router={router} />

      {/* 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" Component={RegisterPage} />

          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter> 
      */}
    </>
  ); 
}