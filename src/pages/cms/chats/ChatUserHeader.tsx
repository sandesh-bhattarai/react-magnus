import { useSelector } from "react-redux"
import type { RootState } from "../../../lib/config/storeConfig"
import type { IUser } from "../../../lib/types/AuthTypes"

export const ChatUserHeader = () => {
  const activeUser = useSelector((root: RootState) => {
    return root?.user?.activeUser as IUser
  })
  return (<>
    <div className="h-16 px-4 flex items-center border-b bg-white">
      <span className="font-bold text-gray-800 text-lg flex items-center gap-2">
        {activeUser?.name}
        <span className="text-xs text-green-500 bg-green-100 px-2 py-0.5 rounded-full ml-2">
          {activeUser?.email}
        </span>
      </span>
    </div>
  </>)
}