import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../../lib/config/storeConfig";
import type { IUser } from "../../../lib/types/AuthTypes";
import { setActiveUser } from "../../../lib/reducers/UserReducer";

export const ChatUserList = () => {

  const allUserList = useSelector((root: RootState) => {
    return root?.user?.allUserLists as Array<IUser>
  })

  const dispatch = useDispatch<AppDispatch>()
  return (
    <>
      <aside className="w-2/5 min-w-[250px] max-w-lg border-r bg-gray-50 p-4 overflow-y-auto">
        <h2 className="text-lg font-bold mb-4">Users</h2>
        <div className="flex flex-col gap-3 px-5">
          {/* Mocked users */}
          {allUserList.map((user: IUser, idx) => (
            <div
              className="shadow-2xl hover:cursor-pointer hover:bg-teal-50 transition hover:scale-96 flex gap-2 bg-teal-100 p-3 mb-5"
              key={idx}
              onClick={() => {
                dispatch(setActiveUser(user));
              }}
            >
              <div className=" flex size-20 gap-3 items-center">
                <img
                  className="rounded-full"
                  crossOrigin="anonymous"
                  src={import.meta.env.VITE_APP_ASSETS_URL + user.image}
                />
              </div>
              <div className="w-full h-25 text-ellipsis line-clamp-1 justify-center">
                <h1 className="text-2xl ">{user.name}</h1>
                <p className="text-xl ">{user.email}</p>
                <p className="text-xl ">{user.role}</p>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
}