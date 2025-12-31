import { createContext } from "react";
import type { ICredentials } from "../types/AuthTypes";

const AuthContext = createContext({
  loggedInUser: null,
  login: async(cred: ICredentials):Promise<void> => {},
  getLoggedInUserProfile:async(): Promise<any> => {},
  // register: () => {},
  // activation: () => {},
  // forgetPassword: () => {},
  // logout: () => {},
  // resetPassword: () => {},
});


export default AuthContext