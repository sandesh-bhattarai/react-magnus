import {  useDispatch, useSelector } from "react-redux"
import {  type AppDispatch, type RootState } from "../../../lib/config/storeConfig"
// import { setActiveUser } from "../../../lib/reducers/UserReducer"
import { useEffect } from "react"
import { getAllActiveUserLists } from "../../../lib/reducers/UserReducer"
import { SendMessage } from "../../../components/chat/SendMessage"
import { ChatDetail } from "./ChatDetail"
import { ChatUserHeader } from "./ChatUserHeader"
import {ChatUserList} from "./UserList"
import type { IUser } from "../../../lib/types/AuthTypes"
import socket from "../../../lib/config/socketConfig"

export default function ChatList() {
  const dispatch = useDispatch<AppDispatch>()

  const activeUser = useSelector((root:RootState) => {
    return root.user.activeUser as IUser;
  })

  useEffect(() => {
    // api to fetch Data
    dispatch(getAllActiveUserLists())

    socket.connect()
  },[])
  return (
    <>
      <div className="flex h-[75vh] bg-white rounded shadow overflow-hidden">
        {/* User List */}
        <ChatUserList />

        <section className="flex-1 flex flex-col">
          {
            activeUser && activeUser._id ? <>
              <ChatUserHeader />

              {/* Chat messages */}
              <ChatDetail />

              <SendMessage receiver={activeUser} />
            </> : <>
              <p>Please select the user first</p>
            </>
          }
        </section>
      </div>
    </>
  );
}