import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";

const Home = () => {

useEffect

     
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="First slide" /> */}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
