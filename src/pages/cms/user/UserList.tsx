import { NavLink } from "react-router";

export default function UserList() {
  
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
                <th className="p-2 bg-gray-900 text-white">Phone</th>
                <th className="p-2 bg-gray-900 text-white">Address</th>
                <th className="p-2 bg-gray-900 text-white">Role</th>
                <th className="p-2 bg-gray-900 text-white">Status</th>
                <th className="p-2 bg-gray-900 text-white">thubnail</th>
                <th className="p-2 bg-gray-900 text-white">#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border border-gray-300">User Name</td>
                <td className="p-2 border border-gray-300">user@email.com</td>
                <td className="p-2 border border-gray-300">+977 9876543219</td>
                <td className="p-2 border border-gray-300">Kathmandu</td>
                <td className="p-2 border border-gray-300">User</td>
                <td className="p-2 border border-gray-300">Active</td>
                <td className="p-2 border border-gray-300">
                  <img src="https://placehold.co/100x100" alt="User One" />
                </td>
                <td className="p-2 border border-gray-300">
                  <NavLink to="/admin/user/1">edit</NavLink>/ Delete
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}