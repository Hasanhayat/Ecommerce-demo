import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import "./components.css"


const Product = () => {

    const {id} = useParams();
    const [post , setPost] = useState(null)

    useEffect(()=>{
        console.log(id);
        
    axios.get(`https://dummyjson.com/products/${id}`)
    .then((res)=>{
        setPost(res.data)
        console.log(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
    if (!post) return <p>Loading...</p>;
  return (
    <div className="container mt-3 tra shadow p-3 rounded-5">
    <h1>{post.title}</h1>
    <img src={post.images[0]} alt={post.title} style={{ width: "300px" }} />
    <p>{post.description}</p>
    <p>Price: ${post.price}</p>
  </div>
  )
}

export default Product