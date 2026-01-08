import { FormLabel } from "../form/Label";
import { TextInputController, TextAreaController, SelectInputController, FileUploadInput, HtmlTextEditor } from "../form/Input";
import { useState, useEffect, useCallback } from "react";
import { type IUser } from "../../lib/types/AuthTypes";
import axiosInstance from "../../lib/config/AxiosConfig";
import type { IBlogDataStr } from "../../lib/types/BlogTypes";
import {useForm} from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import { BlogDTO } from "../../lib/types/BlogTypes";
import type { IBlog } from "../../pages/cms/blog/BlogList";

export interface IBlogFormProps {
  submitForm: (data: IBlogDataStr) => Promise<void>;
  defaultData: IBlog | null
}
export const BlogForm = ({submitForm, defaultData=null}: Readonly<IBlogFormProps>) => {
  const {control, handleSubmit, formState: {errors, isSubmitting}, setValue} = useForm<IBlogDataStr>({
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
  const [userList, setUserList] = useState<Array<IUser>>([]);
  const getUserList = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/chat/user-list");
      if (response.data) {
        setUserList(response.data);
      }
    } catch {
      //
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      getUserList();
    }
    fetchData()
  // eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (defaultData) {
      setValue("title", defaultData.title);
      setValue("summary", defaultData.summary);
      setValue("description", defaultData.description);
      setValue("status", defaultData.status);
      setValue("author", defaultData.author._id);
    }
    // eslint-disable-next-line
  },[defaultData])

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(submitForm)}>
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
          <FormLabel htmlFor="description" labelText="Descrption:"></FormLabel>
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
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}