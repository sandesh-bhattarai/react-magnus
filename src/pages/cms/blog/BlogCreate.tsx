import axiosInstance from "../../../lib/config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { type IBlogDataStr } from "../../../lib/types/BlogTypes";
import { BlogForm } from "../../../components/blog/BlogForm";

export default function BlogCreate(){
  const navigate = useNavigate();
  const submitForm = async (data: IBlogDataStr) => {
    try {
      await axiosInstance.post('/blog/', data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Blog created successfully.")
      navigate("/admin/blogs")
    } catch(exception) {
      //
      console.error(exception)
      toast.error("Error while creating blog")
    }
  }

  return (
    <>
      <div className="flex flex-col gap-10 bg-gray-50 h-screen w-full p-10">
        <div className="flex justify-between">
          <h1 className="text-4xl text-gray-900 font-semibold underline underline-offset-4">
            Blog Create
          </h1>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <BlogForm 
            submitForm={submitForm}
            defaultData={null}
          />
        </div>
      </div>
    </>
  );
}