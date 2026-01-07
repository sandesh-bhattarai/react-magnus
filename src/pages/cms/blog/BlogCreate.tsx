import { useForm } from "react-hook-form";
import { FileUploadInput, HtmlTextEditor, SelectInputController, TextAreaController, TextInputController } from "../../../components/form/Input";
import { FormLabel } from "../../../components/form/Label";
import { useCallback, useEffect, useState } from "react";
import type { IUser } from "../../../lib/types/AuthTypes";
import axiosInstance from "../../../lib/config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const BlogDTO = z.object({
  title: z.string().nonempty(),
  summary: z.string().min(20).max(255).nonempty(),
  description: z.string().nonempty(),
  status: z.string().regex(/^(active|inactive)$/).default('inactive'),
  author: z.string().nonempty(),
  image: z.file().nullable(),
});

interface IBlogCreate {
  title: string;
  summary: string;
  description: string;
  status?: string | undefined;
  author: string;
  image: File | null
}

export default function BlogCreate(){
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm<IBlogCreate>({
    defaultValues: {
      title: "",
      summary: "",
      description: "<p></p>",
      status: "inactive", 
      author: "", 
      image: null
    },
    resolver: zodResolver(BlogDTO)
  });

  const [userList, setUserList] = useState<Array<IUser>>([])
  const navigate = useNavigate();

  const getUserList = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/chat/user-list");
      if(response.data) {
        setUserList(response.data);
      }
    } catch {
      //
    }
  }, []);

  useEffect(() => {
    getUserList()
  },[])

  const submitForm = async (data: IBlogCreate) => {
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
          <form
            className="flex flex-col gap-5"
            onSubmit={handleSubmit(submitForm)}
          >
            <div className="flex gap-3">
              <FormLabel htmlFor="title" labelText="Title:"></FormLabel>
              <div className="w-2/3">
                <TextInputController
                  name="title"
                  control={control}
                  placeholder="Enter blog title here..."
                  errMsg={errors?.title?.message}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <FormLabel htmlFor="summary" labelText="Summary:"></FormLabel>
              <div className="w-2/3">
                <TextAreaController
                  name="summary"
                  control={control}
                  placeholder="Enter blog summary here..."
                  errMsg={errors?.summary?.message}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <FormLabel
                htmlFor="description"
                labelText="Descrption:"
              ></FormLabel>
              <div className="w-2/3">
                <HtmlTextEditor
                  name="description"
                  control={control}
                  errMsg={errors?.description?.message}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <FormLabel htmlFor="author" labelText="Author:"></FormLabel>
              <div className="w-2/3">
                <SelectInputController
                  name="author"
                  control={control}
                  options={
                    userList &&
                    userList.map((user: IUser) => ({
                      label: user.name,
                      value: user._id,
                    }))
                  }
                  errMsg={errors?.author?.message}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <FormLabel htmlFor="status" labelText="Status:"></FormLabel>
              <div className="w-2/3">
                <SelectInputController
                  name="status"
                  control={control}
                  options={[
                    { label: "Publish", value: "active" },
                    { label: "Un-Publish", value: "inactive" },
                  ]}
                  errMsg={errors?.status?.message}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <FormLabel htmlFor="image" labelText="Image:"></FormLabel>
              <div className="w-2/3">
                <FileUploadInput
                  name="image"
                  control={control}
                  errMsg={errors?.image?.message}
                />
              </div>
            </div>
            <div className="flex justify-end w-full">
              <div className="w-2/3 flex gap-3">
                <button
                  disabled={isSubmitting}
                  className="disabled:cursor-not-allowed disabled:bg-red-700/50 w-full hover:bg-red-700 bg-red-600 p-2 rounded-md text-white transition hover:scale-96 cursor-pointer "
                >
                  Cancel
                </button>
                <button
                  disabled={isSubmitting}
                  className="disabled:cursor-not-allowed disabled:bg-teal-700/50 w-full hover:bg-teal-700 bg-teal-600 p-2 rounded-md text-white transition hover:scale-96 cursor-pointer "
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}