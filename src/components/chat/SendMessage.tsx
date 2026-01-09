import { useState, type BaseSyntheticEvent } from "react";
import type { IUser } from "../../lib/types/AuthTypes";
import { toast } from "sonner";
import axiosInstance from "../../lib/config/AxiosConfig";
import socket from "../../lib/config/socketConfig";
import { useAuth } from "../../lib/hooks/useAuth";

export const SendMessage = ({receiver}: Readonly<{receiver: IUser}>) => {
  const [message, setMessage] = useState<string>('');
  const {loggedInUser} = useAuth();
  const handleSubmit = async(e: BaseSyntheticEvent) => {
    e.preventDefault()
    try {
      const chatBody = {
        message: message,
        receiver: receiver._id,
      };
      await axiosInstance.post("/chat", chatBody);

      // socket inform=> message send
      socket.emit("messageSend", {receiver: receiver._id, sender: loggedInUser._id});
      // event -> messageSend, when a new message is sent by client , {sender, receiver}
      setMessage("");
    } catch {
      toast.error("Cannot send your message at this moment.")
    }
  }

  return (
    <>
      {/* Input Field */}
      <form onSubmit={handleSubmit} className="p-4 border-t bg-white flex items-center gap-2">
        <input
          className="flex-1 border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => {
            // if(e.target.value.length >= 1) {
              setMessage(e.target.value)
            // }
          }}
        />
        <button
          type="submit"
          className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 active:scale-95 transition"
        >
          Send
        </button>
      </form>
    </>
  );
}