import { Navigate, Outlet } from "react-router-dom"
import { useAuthHook } from "../context/authContext"

function PrivateRoute() {
    const { user, isAuthenticated } = useAuthHook()

    if (!isAuthenticated) return <Navigate to="/login" replace />
    return <Outlet/> //continua con el componente que esta adentro
}

export default PrivateRoute
