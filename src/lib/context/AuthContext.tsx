import { createContext } from "react";
import type { ICredentials, IUser } from "../types/AuthTypes";

const AuthContext = createContext({
  loggedInUser: {} as IUser,
  // eslint-disable-next-line
  login: async(cred: ICredentials):Promise<void> => {},
  getLoggedInUserProfile: async():Promise<IUser> => { return {} as IUser},
  // register: () => {},
  // activation: () => {},
  // forgetPassword: () => {},
  // logout: () => {},
  // resetPassword: () => {},
});


export default AuthContext