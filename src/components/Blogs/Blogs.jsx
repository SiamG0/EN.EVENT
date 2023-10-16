import React, { useEffect, useState } from 'react';
import './blogs.css';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [blog, setBlog] = useState([])

    useEffect(()=> {
        fetch("/blog.json")
        .then(res => res.json())
        .then(data => {
            setBlog(data)
            console.log(data);
        })
    },[])

    return (
        <div>
            <p className="mb-5 text-3xl md:text-8xl font-bold text-center bg py-20 m-4 rounded-xl">Our Blogs</p>
            {/* Main div of body */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 my-5'>
                {
                    blog.map(blog => <BlogCard key={blog.id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;