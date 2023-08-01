import React from 'react'
import Slider from "react-slick";

const CarouselApp = ({ arr, className }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
      };

    return (
        <Slider {...settings}>
            {arr.map((item, index) => (
                <div
                style={{height:"100%"}}
                    key={index}
                >
                    
                    <img alt='img' src={item} style={{height:"100%", objectFit:"contain"}} />
                </div>
            ))}
        </Slider>
    );
};
export default CarouselApp