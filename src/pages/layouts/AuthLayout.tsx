import { Navigate, Outlet } from "react-router";
import { useState } from "react";
import LeftSidePanel from "../../components/auth/LeftSidePanel";
import { type IPageData } from "../../lib/types/GlobalTypes";
import { useAuth } from "../../lib/hooks/useAuth";

export default function AuthLayout() {
  const [pageData, setPageData] = useState<IPageData>({
    title: "",
    message:"",
    button: {
      url: "/register",
      text: "Register"
    }
  });

  const {loggedInUser} = useAuth()
  
  if(Object.keys(loggedInUser).length) {
    return <Navigate to={loggedInUser.role} />
  } else {
    return (
      <>
        <div className="flex w-full h-screen">
          <LeftSidePanel pageData={pageData} />

          <div className="w-full md:w-2/3 bg-gray-100">
            <div className="my-20 w-full px-20 flex flex-col gap-20">
              <Outlet
                context={{
                  setPageData,
                }}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  
}