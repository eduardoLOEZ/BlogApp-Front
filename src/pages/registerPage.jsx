import { useForm } from "react-hook-form"
import { useAuthHook } from "../context/authContext"

function RegisterPage() {

    const { signUp } = useAuthHook()

    const { register, handleSubmit, formState: {
        errors
    } } = useForm()
    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        signUp(values)

    })

    return (
        <div className="h-[calc(100vh-100px)] flex items-center justify-center">
            <h1 className="text-3xl font-bold">Register</h1>
            <form onSubmit={onSubmit}>

                <input type="text"
                    {...register("username", { required: true })} placeholder="username"
                />
                {
                    errors.username && (
                        <p className="text-red-500">Username is required</p>
                    )
                }

                <input type="email"
                    {...register("email", { required: true })} placeholder="email" />
                {
                    errors.email && (
                        <p className="text-red-500">Email is required</p>
                    )
                }
                <input type="password"
                    {...register("password", { required: true })} placeholder="password" />
                {
                    errors.password && (
                        <p className="text-red-500">Password is required</p>
                    )
                }
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage