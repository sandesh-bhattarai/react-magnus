import { NavLink } from "react-router";
import { FaPen, FaTrash } from "react-icons/fa6";

export const RowAction = ({editUrl}: Readonly<{editUrl: string}>) => {
  return (
    <>
      <div className="flex gap-1">
        <NavLink
          className={
            "p-3 bg-teal-800 text-white rounded-full hover:cursor-pointer transition hover:scale-96 hover:bg-teal-700"
          }
          to={editUrl}
        >
          <FaPen />
        </NavLink>
        <button
          className={
            "p-3 bg-red-800 text-white rounded-full hover:cursor-pointer transition hover:scale-96 hover:bg-red-700"
          }
        >
          <FaTrash />
        </button>
      </div>
    </>
  );
}