import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products`)
      .then((res) => {
        setPosts(res.data.products);
        console.log(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
  <div className="tra container">

  </div>
  );
};

export default Products;
