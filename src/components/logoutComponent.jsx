import { useAuthHook } from "../context/authContext"
import {useNavigate} from "react-router-dom"

function LogoutComponent() {
    const {Logout} = useAuthHook()
    const navigate = useNavigate()

    const handelLogout = async() =>{
        await Logout()
        navigate("/login")

    }


  return (
    <button className="bg-red-500" onClick={() => handelLogout()}>
        Logout
    </button>
  )
}

export default LogoutComponent
