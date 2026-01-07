import { useCallback, useEffect, useState } from "react"
import { NavLink, useSearchParams } from "react-router";
import RowSkeleton from "../../../components/table/RowSkeleton";
import axiosInstance from "../../../lib/config/AxiosConfig";
import type { IUser } from "../../../lib/types/AuthTypes";
import { StatusPills } from "../../../components/ui/Pills";
import { RowAction } from "../../../components/table/RowAction";

export interface IBlog{
  author: IUser, 
  createdAt: Date | string,
  description: string,
  image: string,
  slug:string,
  status: string,
  summary: string,
  title: string,
  updatedAt: Date | string,
  _id: string
}


export default function BlogList() {
  const [blogs, setBlogs] = useState<Array<IBlog>>([]);
  const [loading, setLoading] = useState<boolean>(true)
  const [query, setQuery] = useSearchParams();
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
    limit: 1,
    totalNoOfPages: 1
  })

  const fetchData = useCallback(async ({ page = 1, limit = 1, search = "" }: {page: string|number, limit: number|string, search?: string}) => {
    try {
      const response = await axiosInstance.get("/blog", {
        params: {
          page: page, 
          limit: limit, 
          search: search
        }
      }) as unknown as {data: Array<IBlog>, pagination: {page: number, total:number, limit:number}}
      const paginationData = {
        ...response.pagination,
        totalNoOfPages: Math.ceil(response.pagination.total / response.pagination.limit),
      };
      setPagination(paginationData)
      setBlogs(response.data)
    } catch {
      //
    } finally {
      setLoading(false)
    }
  }, []);
  
  useEffect(() => {
    fetchData({page: query.get("page") ?? 1, limit: 1, search: ""})
  },[])
  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-50 h-screen w-full p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl text-gray-900 font-semibold underline underline-offset-4">
            Blog List
          </h1>
          <NavLink
            className={
              "bg-teal-800 text-white p-3 w-40 rounded-md flex justify-center text-lg font-black hover:bg-teal-900 transition hover:scale-96"
            }
            to={"/admin/blog/create"}
          >
            Add Blog
          </NavLink>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-end">
            <div className="w-1/4">
              <input
                type="search"
                name="search"
                id={"search"}
                placeholder={"Enter your search Keyword"}
                className={`w-full border p-2 rounded-md border-gray-700 `}
              />
            </div>
          </div>
          <table className="w-full border">
            <thead>
              <tr>
                <th className="p-2 bg-gray-900 text-white">Title</th>
                <th className="p-2 bg-gray-900 text-white">Summary</th>
                <th className="p-2 bg-gray-900 text-white">Thumb</th>
                <th className="p-2 bg-gray-900 text-white">Status</th>
                <th className="p-2 bg-gray-900 text-white">#</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <>
                  <RowSkeleton rows={7} cols={5} />
                </>
              ) : blogs && blogs.length ? (
                blogs.map((blog: IBlog, ind: number) => (
                  <tr key={ind}>
                    <td className="p-4 border border-gray-400 ">
                      {blog.title}
                    </td>
                    <td className="p-4 border border-gray-400 max-w-xl">
                      <p className=" line-clamp-3">{blog.summary}</p>
                    </td>
                    <td className=" border border-gray-400 w-25">
                      <img
                        crossOrigin="anonymous"
                        src={import.meta.env.VITE_APP_ASSETS_URL + blog.image}
                      />
                    </td>
                    <td className="p-4 border border-gray-400 ">
                      <StatusPills status={blog.status} />
                    </td>
                    <td className="p-4 border border-gray-400 ">
                      <RowAction
                        editUrl={"/admin/blog/" + blog._id + "/edit"}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5}>Empty Data</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="flex items-center justify-end mt-6 space-x-2">
            <button
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                pagination.totalNoOfPages === 1 || pagination.page === 1
                  ? true
                  : false
              } // set to false when not on first page
              onClick={async (e) => {
                e.preventDefault();
                if (pagination.totalNoOfPages !== 1 || pagination.page !== 1) {
                  setQuery({
                    page: `${pagination.page - 1}`,
                  });
                  await fetchData({
                    page: pagination.page - 1,
                    limit: pagination.limit,
                  });
                }
              }}
            >
              Previous
            </button>
            {[...Array(pagination.totalNoOfPages)].map((_, ind: number) => (
              <button
                key={ind + 1}
                className={`px-4 py-2 rounded-lg border ${
                  ind + 1 === pagination.page
                    ? "bg-teal-700 text-white border-teal-700"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={async (e) => {
                  e.preventDefault();
                  if (
                    pagination.totalNoOfPages !== 1 ||
                    pagination.page !== (ind+1)
                  ) {
                    setQuery({
                      page: `${ind + 1}`,
                    });
                    await fetchData({
                      page: (ind+1),
                      limit: pagination.limit,
                    });
                  }
                }}
              >
                {ind + 1}
              </button>
            ))}
            <button
              className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={
                pagination.totalNoOfPages === 1 ||
                pagination.totalNoOfPages === pagination.page
                  ? true
                  : false
              } // set to true when on last page
              onClick={async (e) => {
                e.preventDefault();
                if (
                  pagination.totalNoOfPages !== 1 ||
                  pagination.page !== pagination.totalNoOfPages
                ) {
                  setQuery({
                    page: `${pagination.page + 1}`,
                  });
                  await fetchData({
                    page: pagination.page + 1,
                    limit: pagination.limit,
                  });
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}