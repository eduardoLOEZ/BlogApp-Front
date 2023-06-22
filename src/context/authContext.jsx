import { createContext, useContext, useEffect, useState } from "react";
import { registerAPI } from "../api/auth"
import { SignInAPI } from "../api/auth";
import { LogoutAPI } from "../api/auth";
import { VerifyToken } from "../api/auth";
import Cookies from "js-cookie";

//ESTE CONTEXT TENDRA TODOS LOS DATOS DEL USER ASI COMO LAS FUNCIONES DE AUTH

const AuthContext = createContext()

//useAuthHook se encargara de exportar el context sin usear el hook usecontext
export const useAuthHook = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("error en el useaAuth")
    }
    return context
}
function AuthProvider({ children }) {

    const [user, setUser] = useState("")
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)




    const signUp = async (user) => {
        const res = await registerAPI(user)
        console.log(res)
        setUser(res.data)
    }

    const SignIn = async (user) => {
        const res = await SignInAPI(user)
        console.log(res.data)
        setUser(res.data)
        setIsAuthenticated(true)
    }




    const Logout = async () => {
        const res = await LogoutAPI()
        console.log(res.data)
        Cookies.remove("token")
        setUser(null)
        setIsAuthenticated(false)

    }
    useEffect(() => {
        async function checkIsLogin() {
            const cookies = Cookies.get()

            if (!cookies.token) {
                setIsAuthenticated(false);
                setIsLoading(false);
                return;
            }
            try {
                const res = await VerifyToken(cookies.token);
                console.log(res);
                if (!res.data) return setIsAuthenticated(false);
                setIsAuthenticated(true);
                setUser(res.data);
                setIsLoading(false);
              } catch (error) {
                setIsAuthenticated(false);
                setIsLoading(false);
            }

           
        }
        checkIsLogin()

    }, [])


    return (
        <AuthContext.Provider value={{
            signUp,
            SignIn,
            user,
            isAuthenticated,
            Logout,
            isLoading



        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
