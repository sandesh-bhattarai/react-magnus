import UserLayout from "../layouts/UserLayout"
import AdminDashboard from "./AdminDashboard"
import NotFound from "../error/NotFound"
import UserList from "./user/UserList"
import UserEdit from "./user/UserEdit"
import UserCreate from "./user/UserCreate"

export const AdminRouter = [
  { path: "/admin", element: <UserLayout />, children: [
      { index: true, element: <AdminDashboard /> },
      { path: "*", element: <NotFound /> },
      
      { path: "users", element: <UserList />},
      { path: "user/create", element: <UserCreate />},

      { path: "user/:userId", element: <UserEdit />},

    ],
  },
]