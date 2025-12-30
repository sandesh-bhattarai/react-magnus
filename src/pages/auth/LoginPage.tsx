import { useOutletContext } from "react-router";
import { type IOutletContext } from "../../lib/types/GlobalTypes";
import {useForm} from "react-hook-form"
import { type ICredentials } from "../../lib/types/AuthTypes";
import { useEffect } from "react";
import { FormLabel } from "../../components/form/Label";
import { TextInput } from "../../components/form/Input";
import { InputType } from "../../components/form/input.contract";
import { toast } from "sonner";
import axiosInstance from "../../lib/config/AxiosConfig";

export default function LoginPage() {
  const { setPageData } = useOutletContext<IOutletContext>();
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
  }, []);

  const {handleSubmit,control,formState: { errors },} = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const login = async (credentials: ICredentials) => {
    try {
      const response = await axiosInstance.post("/auth/login", credentials)
      console.log(response)
      // webstorage   
    } catch(exception) {
      // 404 => handle 
      
      console.log(exception)
      
      toast.error("Cannot login at this moment!", {
        description: "Please check your credentials once before submitting.",
      })
    }
  };
  

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className="my-20 w-full px-20 flex flex-col gap-20">
          <h1 className="text-4xl text-semibold">Login Form</h1>

          <form onSubmit={handleSubmit(login)} className="flex flex-col gap-5">
            <div className="flex w-full">
              <FormLabel labelText="User Name: " htmlFor="email" />
              <div className="w-2/3">
                

                <TextInput
                  name="email"
                  control={control}
                  type={InputType.EMAIL}
                  errMsg={errors?.email?.message}
                  placeholder="Enter your email...."
                />
              </div>
            </div>

            <div className="flex w-full">
              <FormLabel labelText="Password: " htmlFor="password" />

              <div className="w-2/3">
                <TextInput
                  type={InputType.PASSWORD}
                  placeholder="Enter your Password..."
                  name="password"
                  control={control}
                  errMsg={errors?.password?.message}
                />
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