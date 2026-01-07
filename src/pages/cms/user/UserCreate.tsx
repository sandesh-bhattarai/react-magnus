import { useForm } from "react-hook-form";
import { PageHeading } from "../../../components/auth/LeftSidePanel";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateUserDTO } from "../../../lib/dto/AuthDTO";
import { type IRegsiterData } from "../../../lib/types/AuthTypes";

import { FormLabel } from "../../../components/form/Label";
import { FileUploadInput, SelectInputController, TextInput } from "../../../components/form/Input";
import { InputType } from "../../../components/form/input.contract";
import axiosInstance from "../../../lib/config/AxiosConfig";
import { toast } from "sonner";
import { useNavigate } from "react-router";

export default function UserCreate() {
  // setError
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {name: "", email: "", password: "", confirmPassword: "", gender: "", role: ""},
    resolver: zodResolver(CreateUserDTO)
  })
  const navigate = useNavigate()

  // console.log(errors)
  // console.log(errors)
  const register = async (data: IRegsiterData) => {
    try {
      await axiosInstance.post("/auth/register", data, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      toast.success("Account created succesfully.")
      navigate("/admin/users")
    } catch(exception) {
      // setError("field", {message: "error message"})
      //
      // if(exception.code === 400) {
      //   // exception: {error: {email: "asdfasdf", password: ""}}
      //   let fields = Object.keys(exception.error)    // ['email','name', 'gender']
      // ['email','name', 'gender'].map((field) => setError(field, {message: exception.error[field]})
      //   fields.map((field) => {
      //     setError(field, {message: exception.error[field]});
      //   })
      // }
      console.log(exception);
    }

  }
  return (
    <>
      <div className="flex flex-col gap-5 bg-gray-50 h-screen w-full p-10">
        <div className="flex justify-between">
          <PageHeading pageTitle="User Create" className="text-black!" />
        </div>
        <div>
          <form
            onSubmit={handleSubmit(register)}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-2">
              <FormLabel htmlFor="name" labelText="Full Name: "></FormLabel>
              <div className="w-2/3">
                <TextInput
                  name="name"
                  type={InputType.TEXT}
                  control={control}
                  errMsg={errors?.name?.message}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <FormLabel htmlFor="email" labelText="Email: "></FormLabel>
              <div className="w-2/3">
                <TextInput
                  name="email"
                  type={InputType.EMAIL}
                  control={control}
                  errMsg={errors?.email?.message}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <FormLabel htmlFor="password" labelText="Password: "></FormLabel>
              <div className="w-2/3">
                <TextInput
                  name="password"
                  type={InputType.PASSWORD}
                  control={control}
                  errMsg={errors?.password?.message}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <FormLabel
                htmlFor="confirmPassword"
                labelText="Re-Password: "
              ></FormLabel>
              <div className="w-2/3">
                <TextInput
                  name="confirmPassword"
                  type={InputType.PASSWORD}
                  control={control}
                  errMsg={errors?.confirmPassword?.message}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <FormLabel htmlFor="role" labelText="Role: "></FormLabel>
              <div className="w-2/3">
                <SelectInputController
                  name="role"
                  control={control}
                  options={[
                    { value: "admin", label: "Root User" },
                    { value: "seller", label: "Vendor" },
                    { value: "customer", label: "Buyer" },
                  ]}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <FormLabel htmlFor="gender" labelText="Gender: "></FormLabel>
              <div className="w-2/3">
                <SelectInputController
                  name="gender"
                  control={control}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "other" },
                  ]}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <FormLabel htmlFor="role" labelText="Image: "></FormLabel>
              <div className="w-2/3">
                <FileUploadInput name="image" control={control} />
              </div>
            </div>

            <div className="flex gap-2">
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
          </form>
        </div>
      </div>
    </>
  );
}