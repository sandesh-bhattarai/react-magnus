import UserLayout from "../layouts/UserLayout"
import ChatList from "./chats/ChatList"

export const CustomerRouter = [
  {
    path: "/customer",
    element: <UserLayout />,
    children: [
      { index: true, element: <ChatList /> },
    ],
  },
];