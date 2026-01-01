export interface ICredentials {
  email: string;
  password: string;
}

// fullname, email, password, confirmPassword, ....
export interface IRegsiterData {
  name: string,
  email: string,
  password: string,
  confirmPassword: string,
  gender?: string, 
  role?: string
}

export interface IUser {
  _id: string,
  name: string,
  email: string,
  role: string,
  // eslint-disable-next-line
  address: any,
  image: string,
  status: string,
  gender: string,
  updated: string | Date
    
}