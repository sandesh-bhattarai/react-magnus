import {  useDispatch } from "react-redux"
import {  type AppDispatch } from "../../../lib/config/storeConfig"
// import { setActiveUser } from "../../../lib/reducers/UserReducer"
import { useEffect } from "react"
import { getAllActiveUserLists } from "../../../lib/reducers/UserReducer"
import { SendMessage } from "../../../components/chat/SendMessage"
import { ChatDetail } from "./ChatDetail"
import { ChatUserHeader } from "./ChatUserHeader"
import {ChatUserList} from "./UserList"

export default function ChatList() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // api to fetch Data
    dispatch(getAllActiveUserLists())
  },[])
  return (
    <>
      <div className="flex h-[75vh] bg-white rounded shadow overflow-hidden">
        {/* User List */}
        <ChatUserList />

        <section className="flex-1 flex flex-col">
          <ChatUserHeader />

          {/* Chat messages */}
          <ChatDetail />

          <SendMessage />
        </section>
      </div>
    </>
  );
}