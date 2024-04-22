import Single from "../../components/single/Single"
import { singleUser } from "../../data"

const User = () => {

  // Fetch dafta and send to single Component
  return (
    <div className="user"> 
    <Single {...singleUser}/>
    </div>
  )
}

export default User