import { useForm } from "react-hook-form";
import { TextInput } from "../../components/form/Input";
import { InputType } from "../../components/form/input.contract";
import { FormLabel } from "../../components/form/Label";

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

// fullname, email, password, confirmPassword, ....
interface IRegsiterData {
  fullName: string,
  email: string,
  password: string,
  confirmPassword: string
}

const passwordRule = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,25}$/;


const RegisterDTO = z.object({
  fullName: z.string().min(2, "Name must have atlease 2 characters").max(50, "Name must be less than 50 characters").nonempty().trim(),
  email: z.email().nonempty(),
  password: z.string().regex(passwordRule, "Password must contain atleast 1 uppercase character, 1 lowercase character").nonempty(),
  confirmPassword: z.string().nonempty()
}).refine((data) => data.password === data.confirmPassword,{ path: ["confirmPassword"]})

export default function RegisterPage() {
  
  const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
    defaultValues: {fullName: "", email: "", password: "", confirmPassword: ""},
    resolver: zodResolver(RegisterDTO)
  })
  
  // console.log(errors)
  const register = async (data: IRegsiterData) => {
    console.log(data);
    // toaster 

  }

  // document 
  // window.
  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="my-20 w-full px-20 flex flex-col gap-20">
          <h1 className="text-4xl text-semibold">Register Form</h1>
          <form
            onSubmit={handleSubmit(register)}
            className="flex flex-col gap-5"
          >
            <div className="flex gap-2">
              <FormLabel htmlFor="fullName" labelText="Full Name: "></FormLabel>
              <div className="w-2/3">
                <TextInput
                  name="fullName"
                  type={InputType.TEXT}
                  control={control}
                  errMsg={errors?.fullName?.message}
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

          {isSubmitting ? "Loading" : ""}
        </div>
      </div>
    </>
  );
}