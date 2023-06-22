import { BlogsAPI } from "../api/auth"
import { useContext, createContext, useState } from "react"

const BlogContextHook = createContext()

export const blogUsecontext = () => {
    const context = useContext(BlogContextHook)
    if (!context) {
        throw new Error("error en el useaAuth")
    }
    return context
}

function BlogContext({children}) {
    const [blogs, setBlogs] = useState([]);

    const getBlogs = async () => {
        try {
            const res = await BlogsAPI()
            setBlogs(res.data)
            console.log(res)
        } catch (error) {
            console.log(error)

        }

    }

    return (
       <BlogContextHook.Provider value={
        {
            getBlogs,
            blogs
        }
       }>
            {children}
       </BlogContextHook.Provider>
    )
}

export default BlogContext
