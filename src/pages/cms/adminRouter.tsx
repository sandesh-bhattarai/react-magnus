import UserLayout from "../layouts/UserLayout"
import AdminDashboard from "./AdminDashboard"
import NotFound from "../error/NotFound"
import UserList from "./UserList"
import UserEdit from "./UserEdit"

export const AdminRouter = [
  { path: "/admin", element: <UserLayout />, children: [
      { index: true, element: <AdminDashboard /> },
      { path: "*", element: <NotFound /> },
      { path: "user", element: <UserList />},
      { path: "user/:userId", element: <UserEdit />}
    ],
  },
]