import axiosInstance from "../../../lib/config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate, useParams } from "react-router";
import { type IBlogDataStr } from "../../../lib/types/BlogTypes";
import { BlogForm } from "../../../components/blog/BlogForm";
import { useState , useEffect} from "react";
import { type IBlog } from "./BlogList";

export default function BlogEdit(){
  const [loading, setLoading] = useState<boolean>(true);
  const [detail, setDetail] = useState<IBlog|null>(null);
  const params = useParams()
  const navigate = useNavigate();
  
  const getBlogDetail = async() => {
    try {
      const response = await axiosInstance.get("/blog/"+params.blogId)
      setDetail(response.data)
      setLoading(false)
    } catch {
      toast.error("Blog could not be fetched at this moment")
      navigate("/admin/blogs")
    }
  }
  useEffect(() => {
    if(!params.blogId) return 
    const fetchData = async() => {
      getBlogDetail();
    }
    fetchData()
    // eslint-disable-next-line
  },[params])
  
  const submitForm = async (data: IBlogDataStr) => {
    try {
      await axiosInstance.put('/blog/'+params.blogId, data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Blog Edited successfully.")
      navigate("/admin/blogs")
    } catch(exception) {
      //
      console.error(exception)
      toast.error("Error while editing blog")
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 bg-gray-50 h-screen w-full p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl text-gray-900 font-semibold underline underline-offset-4">
            Blog Edit
          </h1>
        </div>

        <div className="flex flex-col gap-5 w-full">
          {loading ? (
            <>loading...</>
          ) : (
            <>
              <BlogForm 
                defaultData={detail}
                submitForm={submitForm}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}