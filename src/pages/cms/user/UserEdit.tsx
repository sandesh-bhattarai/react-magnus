import { useParams } from "react-router"

export default function UserEdit() {
  // read from params => path params com
  // params, query 
  const params = useParams()      // object return 
  // api call 
  
  return (<>
    {
      params.userId
    }
  </>)
}