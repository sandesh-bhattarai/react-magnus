import UserLayout from "../layouts/UserLayout"
import AdminDashboard from "./AdminDashboard"
import NotFound from "../error/NotFound"
import UserList from "./user/UserList"
import UserEdit from "./user/UserEdit"
import UserCreate from "./user/UserCreate"

import { lazy, Suspense } from "react"
// import BlogCreate from "./blog/BlogCreate"

// import BlogList from "./blog/BlogList"
const BlogList = lazy(async () =>await import("./blog/BlogList"))
const BlogCreate = lazy(async() => await import("./blog/BlogCreate"))

export const AdminRouter = [
  {
    path: "/admin",
    element: <UserLayout />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "*", element: <NotFound /> },

      { path: "users", element: <UserList /> },
      { path: "user/create", element: <UserCreate /> },
      { path: "user/:userId", element: <UserEdit /> },


      // { path: "blogs", element: <>Blog Layout<Outlet /></>, children: [{}]},
      { path: "blogs", element: (
          <Suspense fallback={<>Loading...</>}>
            <BlogList />
          </Suspense>
        ),
      },

      { path: "blog/create", element: <Suspense fallback={<>Loading...</>}>
        <BlogCreate />
      </Suspense>}
    ],
  },
];