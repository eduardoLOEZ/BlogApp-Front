import { useForm } from "react-hook-form"
import { useAuthHook } from "../context/authContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function LoginPage() {

    const { SignIn, isAuthenticated } = useAuthHook()
    const navigate = useNavigate()


    const { register, handleSubmit, formState: {
        errors
    } } = useForm()

    useEffect(() => {
        if (isAuthenticated) navigate("/main")
    }, [isAuthenticated])



    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        SignIn(values)

    })


    return (
        <div className="bg-zinc-800 max-w-md p-10 rounded-md">
            <h1 className="text-3xl font-bold">LOGIN</h1>
            <form onSubmit={onSubmit}>


                <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="email"
                    {...register("email", { required: true })} placeholder="email" />
                {
                    errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )
                }
                <input className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2" type="password"
                    {...register("password", { required: true })} placeholder="password" />
                {
                    errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )
                }
                <button type="submit">
                    Login
                </button>

            </form>
        </div>
    )
}

export default LoginPage