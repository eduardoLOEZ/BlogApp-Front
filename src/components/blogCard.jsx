import React from 'react'

function BlogCard({blog}) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <div key={blog.id}>
        <h1 className="text-xl font-bold capitalize">{blog.title}</h1>
        <p>{blog.description}</p>
       
      </div>
    </div>
  )
}

export default BlogCard
