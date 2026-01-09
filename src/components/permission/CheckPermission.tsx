import { type ReactNode } from "react";
import { useAuth } from "../../lib/hooks/useAuth";
import { Navigate } from "react-router";
import { toast } from "sonner";

export const CheckPermission = ({havePermission, children, accessLevel='component'}: Readonly<{havePermission: Array<string>, children: ReactNode, accessLevel: string}>) => {
  const {loggedInUser} = useAuth()
  // loggedInUser.permission = ["allowed-permissions"]
  
  let canAccess = false; 
  havePermission.map((perm:string) => {
    if(loggedInUser.permission.includes(perm)) {
      canAccess = true
    }
  })

  if(canAccess) {
    return {children}
  } else {
    if(accessLevel === 'component') {
      return <></>
    } else {
      toast.warning("You don't have permission to access this page.");
      return <Navigate to={"/dashboard"} />;
    }
  }

}


export const CheckPagePermission = ({havePermission, children}: Readonly<{havePermission: Array<string>, children: ReactNode}>) => {
  const { loggedInUser } = useAuth();
  // loggedInUser.permission = ["allowed-permissions"]

  let canAccess = false;
  havePermission.map((perm: string) => {
    if (loggedInUser.permission.includes(perm)) {
      canAccess = true;
    }
  });

  if (canAccess) {
    return { children };
  } else {
    toast.warning("You don't have permission to access this page.")
    return <Navigate to={'/dashboard'} />;
  }
}