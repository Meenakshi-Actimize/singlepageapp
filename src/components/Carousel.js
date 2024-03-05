import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';


function MyCarousel(){
    return(
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel1.jpg'
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel2.jpg'
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel3.jpg'
          alt="Third slide"
        />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel4.jpg'
          alt="fourth slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel5.jpg'
          alt="fifth slide"
        />
         </Carousel.Item>
         <Carousel.Item>
        <img
          className="d-block w-100"
          src='assets/images/carousel6.jpg'
          alt="sixth slide"
        />
         </Carousel.Item>
    </Carousel>
    );
}
    export default MyCarousel;