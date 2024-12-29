import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./components.css"
import { Link } from "react-router";

const Home = () => {
 const [posts , setPosts] = useState(null)

useEffect(()=>{
axios.get(`https://dummyjson.com/products`)
.then((res)=>{
    setPosts(res.data.products)
    console.log(res.data.products);
    
        
})
.catch((err)=>{
    console.log(err);
    
})
},[])

if (!posts) return <p>Loading...</p>;
  return (
    <div className="tra container rounded-5 my-2 shadow-lg">
        
        <Carousel fade >
        {posts.map((ele,i)=>(

        <Carousel.Item key={i}>
          <Link to={`product/${ele.id}`}>
        <img src={ele.images[0]} alt="" className="carousel-img d-block w-50 mx-auto "/>
        </Link>
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
};

export default Home;
