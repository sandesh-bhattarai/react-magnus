// import {  type BaseSyntheticEvent } from "react";
import { TextInput } from "../form/Input";
import {InputType } from "../form/input.contract";
import { useForm } from "react-hook-form";
import { FormLabel } from "../form/Label";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
import { type IOutletContext } from "../../lib/types/GlobalTypes";
import { type ICredentials } from "../../lib/types/AuthTypes";

export default function RightSidepanel() {
  const {setPageData} =useOutletContext<IOutletContext>()
  
  const {handleSubmit, control, formState: {errors}} = useForm({
    defaultValues: {
      username: "",
      password: ""
    }
  })

  const login = (credentials: ICredentials) => {
    console.log(credentials)
    // api call 
  }
  useEffect(() => {
    setPageData({
      title: "Login Page",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa porro ipsa exercitationem aperiam nulla repudiandae a voluptates quo impedit corporis delectus provident commodi assumenda nemo modi? Soluta, doloremque modi.",
      button: {
        url: "/register",
        text: "Register",
      },
    });
  }, [])

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="my-20 w-full px-20 flex flex-col gap-20">
          <h1 className="text-4xl text-semibold">Login Form</h1>

          <form
            onSubmit={handleSubmit(login)}
            className="flex flex-col gap-5"
          >
            <div className="flex w-full">
              <FormLabel labelText="User Name: " htmlFor="username" />
              <div className="w-2/3">
                {/* <input
                  type="email"
                  {...register("username", { required: true })}
                  id={"username"}
                  placeholder={"enter your email as username"}
                  className={`w-full border p-2 rounded-md ${
                    errors?.username ? "border-red-800" : "border-gray-700"
                  }`}
                /> */}

                <TextInput 
                  name="username"
                  control={control}
                  type={InputType.EMAIL}
                  errMsg={errors?.username?.message}
                  placeholder="Enter your Username...."
                />
              </div>
            </div>

            <div className="flex w-full">
              <FormLabel labelText="Password: " htmlFor="password" />

              <div className="w-2/3">
                <TextInput
                  type={InputType.PASSWORD}
                  placeholder="Enter your Password..."
                  name="username"
                  control={control}
                  errMsg={errors?.password?.message}
                />

                {/* <input
                  // onChange={handleChange}
                  type="password"
                  // name={"password"}
                  id={"password"}
                  {...register("password", { required: true })}
                  placeholder={"enter your  password"}
                  className={`w-full border p-2 rounded-md border-gray-700`}
                />
                <span className="text-red-600 text-sm italic">
                  {errors?.password ? "Password is required" : ""}
                </span> */}
              </div>
            </div>

            <div className="flex w-full gap-5">
              <button className="w-full hover:bg-red-700 bg-red-600 p-2 rounded-md text-white transition hover:scale-96 cursor-pointer ">
                Cancel
              </button>
              <button className="w-full hover:bg-teal-700 bg-teal-600 p-2 rounded-md text-white transition hover:scale-96 cursor-pointer ">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}