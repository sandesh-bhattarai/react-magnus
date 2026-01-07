import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import axiosInstance from "../../../lib/config/AxiosConfig";
// import { toast } from "sonner";

interface IUser {
  createdAt: string,
  email: string,
  gender: string,
  image: string,
  name: string,
  role: string,
  status: string,
  updatedAt: string,
  _id: string,
}

export default function UserList() {
  const [userList, setUserList] =useState<Array<IUser>>([]);
  const [loading, setLoading] =useState<boolean>(true)

  
  // const [searchKeyword, setSearchKeyword] =useState<string>();

  // useEffect(() => {
  //   // on any state/component rerender
  // })
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/chat/user-list")
      setUserList(response.data)
    } catch{
      // console.log(exception)
      // console.log("there");
      // toast.error("Route not found")
    } finally {
      setLoading(false)
    }
  };

  // // data fetch 
  useEffect(() =>{
    fetchData()
  },[])

  // useEffect(() => {
  //   // when searchKeyword update
  // },[searchKeyword])

  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-50 h-screen w-full p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl text-gray-900 font-semibold underline underline-offset-4">
            User List
          </h1>
          <NavLink
            className={
              "bg-teal-800 text-white p-3 w-40 rounded-md flex justify-center text-lg font-black hover:bg-teal-900 transition hover:scale-96"
            }
            to={"/admin/user/create"}
          >
            Add User
          </NavLink>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-end">
            <form action="" className="w-1/4">
              <input
                type="search"
                name="search"
                id={"search"}
                placeholder={"Enter your search Keyword"}
                className={`w-full border p-2 rounded-md border-gray-700 `}
              />
            </form>
          </div>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="p-2 bg-gray-900 text-white">Name</th>
                <th className="p-2 bg-gray-900 text-white">Email</th>
                <th className="p-2 bg-gray-900 text-white">Gender</th>
                <th className="p-2 bg-gray-900 text-white">Role</th>
                <th className="p-2 bg-gray-900 text-white">Status</th>
                <th className="p-2 bg-gray-900 text-white">#</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <>
                  <tr>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                    <td className="p-4 border border-gray-400">
                      <p className="w-full animate-pulse bg-gray-300 rounded-md h-2"></p>
                    </td>
                  </tr>
                </>
              ) : userList && userList.length ? (
                <>
                  {userList.map((userRow, ind) => (
                    <tr key={ind}>
                      <td className="p-4 border border-gray-400">
                        {userRow.name}
                      </td>
                      <td className="p-4 border border-gray-400">
                        {userRow.email}
                      </td>
                      <td className="p-4 border border-gray-400">
                        {userRow.gender}
                      </td>
                      <td className="p-4 border border-gray-400">
                        {userRow.role}
                      </td>
                      <td className="p-4 border border-gray-400">
                        {userRow.status}
                      </td>
                      <td className="p-4 border border-gray-400">
                        Edit / Delete
                      </td>
                    </tr>
                  ))}
                </>
              ) : (
                <>
                  <tr>
                    <td className="p-4 border-gray-400 text-center">
                      No data found
                    </td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}