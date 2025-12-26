import { TextInput } from "../form/Input";
import {InputType } from "../form/input.contract";
import { FormLabel } from "../form/Label";

export default function RightSidepanel() {
  return (
    <>
      <div className="w-full md:w-2/3 bg-gray-100">
        <div className="my-20 w-full px-20 flex flex-col gap-20">
          
          <h1 className="text-4xl text-semibold">Login Form</h1>

          <form action="" className="flex flex-col gap-5">
            <div className="flex w-full">
              <FormLabel labelText="User Name: " htmlFor="username" />
              <div className="w-2/3">
                <TextInput 
                  name="username"
                  type={InputType.EMAIL}
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
                  name="username"/>
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