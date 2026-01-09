import { useSelector } from "react-redux"
import type { RootState } from "../../../lib/config/storeConfig"
import type { IUser } from "../../../lib/types/AuthTypes"
import { useEffect, useState } from "react"
import axiosInstance from "../../../lib/config/AxiosConfig"
import {DateTime} from "luxon"
import socket from "../../../lib/config/socketConfig"

export interface IChatMessage {
  _id: string, 
  message: string, 
  sender: IUser,
  receiver: IUser,
  room?: string,
  createdAt: string
}

export const ChatDetail = () =>{
  const activeUser = useSelector((root: RootState) => {
    return root?.user.activeUser as IUser
  })
  const [messages, setmessages] = useState<Array<IChatMessage>>();

  const getAllMessages = async() => {
    try {
      const response = await axiosInstance.get("/chat/"+activeUser._id)
      setmessages(response.data)
    } catch {
      // 
    }
  }
  useEffect(() =>{
    const fetchData = async() => {
      await getAllMessages();
    }

    fetchData();
  },[activeUser])


  useEffect(() => {
    const hanldeMessageReceived = async (data) => {
      await getAllMessages()
    }
    socket.on("messageReceived", hanldeMessageReceived);

    return () => {
      socket.off("messageReceived", hanldeMessageReceived);
    }
  }, [])

  return (
    <>
      <div className="flex-1 p-4 overflow-y-auto flex flex-col-reverse gap-3 bg-gray-50">
        {/* Messages (reverse order for "scroll to bottom" effect) */}
        <div className="flex flex-col gap-3">
          {messages &&
            messages.map((message: IChatMessage) =>
              message.sender._id === activeUser._id ? (
                <div className="flex justify-start" key={message._id}>
                  <div className="bg-gray-200 text-gray-900 rounded-lg px-4 py-2 max-w-[70%] shadow">
                    {message.message}
                    <div className="text-xs text-gray-500 mt-1 text-left">
                      {DateTime.fromJSDate(
                        new Date(message.createdAt)
                      ).toRelative()}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex justify-end" key={message._id}>
                  <div className="bg-teal-600 text-white rounded-lg px-4 py-2 max-w-[70%] shadow">
                    {message.message}
                    <div className="text-xs text-gray-200 mt-1 text-right">
                      {DateTime.fromJSDate(
                        new Date(message.createdAt)
                      ).toRelative()}
                    </div>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </>
  );
}