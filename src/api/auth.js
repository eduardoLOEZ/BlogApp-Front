import axios from "./axios"


export const registerAPI = user => axios.post(`/sign-up`, user)
export const SignInAPI = user => axios.post(`/login`, user)
export const LogoutAPI =() => axios.post(`/logout`)
export const BlogsAPI =() => axios.get(`/blogs`)
export const VerifyToken = ()=> axios.get("/verify")