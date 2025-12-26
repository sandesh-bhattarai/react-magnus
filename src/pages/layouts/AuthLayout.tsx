import { NavLink, Outlet } from "react-router";
import logo from "../../assets/images/logo.png"

export default function AuthLayout() {
  return (
    <>
      <div className="flex w-full h-screen">
        <div className="hidden md:block md:w-1/3 bg-teal-800">
          <div className="flex flex-col w-full h-screen items-center justify-center gap-5">
            <div className="size-25">
              <img src={logo} alt="" className="rounded-full" />
            </div>            
            <div className="flex flex-col gap-10 w-125 mx-auto items-center text-white">
              <h1>Login Page</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, culpa porro ipsa exercitationem aperiam nulla repudiandae a voluptates quo impedit corporis delectus provident commodi assumenda nemo modi? Soluta, doloremque modi.</p>
              <NavLink to={'/register'}>
                Register
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-gray-100">
            <div className="my-20 w-full px-20 flex flex-col gap-20">
              {/* <Outlet /> */}
            </div>
        </div>
      </div>
    </>
  );
}