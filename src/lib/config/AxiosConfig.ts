import axios from "axios";
import { toast } from "sonner";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 60000,
  timeoutErrorMessage: "Server timed out...",
  headers: {
    "Content-Type": "application/json"
  }
});

// interceptors 
// Request 
// UI Comoponent => Axios Instance => (Intercept/Request) => Network
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("_at");   // webstorage update
  if(token) {
    config.headers.Authorization = "Bearer "+token;
  }
  return config;
})
// Response 
// Newrok => Axios Instance => (response interceptor) => UI Component
axiosInstance.interceptors.response.use((response) => {
  return response.data
}, (exception) => {
  // handle 
  if(+exception.status === 400 || +exception.status === 422) {
    // form validation faile 
    throw {...exception.response.data, code: exception.status}
  } else if(exception.status === 403) {
    toast.error("You don't have permission to access this request")
    throw exception.response
  } else if(exception.status === 404) {
    toast.error("Api route not found");
    throw exception.response;
  } else {
    throw exception
  }
})
export default axiosInstance