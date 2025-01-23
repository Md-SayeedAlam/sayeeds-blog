"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";



const Blog = ({params}) => {
    
    const{id} = useParams()
    const [postDetails, setPostDetails] = useState(null);

    useEffect(() => {
      if (id) {
        const fetchPost = async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const data = await res.json();
          setPostDetails(data);
        };
  
        fetchPost();
      }
    }, [id]);
    // console.log(postDetails)
  
    if (!postDetails) {
      return <p className=" flex justify-center items-center font-bold mt-16"> Loading...</p>;
    }
  
    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-16">
            <p className="text-3xl font-bold my-32">Description of :{postDetails.title}</p>
            <p className="">{postDetails.body}</p>
            </div>
      </div>
    );
};

export default Blog;