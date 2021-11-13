import React from 'react'
import "./blog.scss"
import blogs from "../../data"

const BlogComp = () => {
    return (
        <div className="blogs">
            {
                blogs.map(blog =>(
                   <div className="blog ">
                       <div className="blog-img">
                        <img src={blog.image} alt="" />
                       </div>
                       <div className="blog-title">
                       <h2 key={blog.id}>{blog.title}</h2>
                       </div>
                   </div>
                ))
            }
        </div>
    )
}

export default BlogComp
