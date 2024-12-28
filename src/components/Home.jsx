import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router";
import "./components.css"

const Home = () => {
 const [posts , setPosts] = useState([])

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

     
  return (
    <div className="container bg-secondary shadow-lg">
        
        <Carousel fade >
        {posts.map((ele,i)=>(

        <Carousel.Item key={i}>
        <img src={ele.images[0]} alt="" className="carousel-img d-block w-50 mx-auto "/>
        </Carousel.Item>
        ))}
        </Carousel>
    </div>
  );
};

export default Home;
