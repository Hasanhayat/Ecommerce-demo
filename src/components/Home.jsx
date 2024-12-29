import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
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
    <div className="tra container rounded-5 my-2 shadow-lg">
        
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
