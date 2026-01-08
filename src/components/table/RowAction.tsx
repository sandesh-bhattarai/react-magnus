import { NavLink } from "react-router";
import { FaPen, FaTrash } from "react-icons/fa6";
import Swal from "sweetalert2";

export const RowAction = ({editUrl,rowId, deleteAction}: Readonly<{editUrl: string, rowId: string, deleteAction: (id:string)=>void}>) => {
  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",      // success, error, info, warning
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // data delete api triggere
        deleteAction(rowId)
      }
    });
  }
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
        onClick={confirmDelete}
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