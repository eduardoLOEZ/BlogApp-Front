import LogoutComponent from "../components/logoutComponent";
import { useAuthHook } from "../context/authContext";
import BlogCard from "../components/blogCard";
import { useEffect } from "react";
import { blogUsecontext } from "../context/blogContext";

function Main() {
  const {user} = useAuthHook()
  console.log(user)

  /*const {getBlogs, blogs} = blogUsecontext()

  useEffect(()=>{
    getBlogs()

  },[])
  
  return (

    <div>
        
        <h1>Blogs</h1>
        <div>
            {
            blogs.map( blog=>(
                <BlogCard key={blog.id} blog={blog}/>

            ))
            }
            </div>
    </div> 
    )
    */
  return (
    <>
      <LogoutComponent />
      <h1>Main</h1>
      <p>Welcome {user.username} !!</p>
    </>

  )
}

export default Main;
