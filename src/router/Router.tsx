// import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "../pages/error/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthRouter } from "../pages/auth/authRouter";
import { AdminRouter } from "../pages/cms/adminRouter";
import { useEffect, useState } from "react";
import { useAuth } from "../lib/hooks/useAuth";
import Cookies from "js-cookie";
import { CustomerRouter } from "../pages/cms/customerRouter";

const router = createBrowserRouter([
  ...AuthRouter,

  { path: "*", element: <NotFound /> },
  ...AdminRouter,
  ...CustomerRouter
]);

export default function AppRouter() {
  const {getLoggedInUserProfile} = useAuth()
  const [loading, setLoading] = useState<boolean>(true)
  
  const userPersist = async() => {
    try {
      const token = Cookies.get("_at");
      if (token) {
        await getLoggedInUserProfile();
      }
    } catch {
      //
    } finally {
      setLoading(false)
    }
    
  }

  useEffect(() => {
    userPersist()
  }, [])

  return (
    <>
      {loading ? "Loading..." : <RouterProvider router={router} />}

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