import React, { useEffect, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css';
import 'swiper/css/autoplay'

const Carousel = () => {
    
    const [carouselContent, setCarouselContent] = useState([]);

    useEffect(async() => {
        fetch("http://localhost:5000/api/slides")
         .then(res => res.json())
         .then(res => setCarouselContent(res))
    }, [])

    SwiperCore.use([Autoplay])

  return (
    <>
        <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{ 
                delay: 3000, 
                disableOnInteraction: false 
            }}
        >
            {carouselContent.map((slide) => {
                return (
                    <SwiperSlide key={slide.customId}>
                        {/* <Link to="/" > */}
                            <div style={{position: "relative"}}>
                                <img style={{width: "100vw", height: "40vw", objectFit: "cover"}}  src={slide.imageUrl} alt="" />
                                <h2 style={{position: "absolute", color : 'white', bottom: '20vh', left: '30px', fontSize: '3.125rem'}}>
                                    {slide.title}
                                </h2>
                                <span style={{position: "absolute", color : 'white', bottom: '10vh', left: '30px',  fontSize: '2.5rem'}}>
                                    {slide.description} 
                                </span>
                            </div>
                        {/* </Link> */}
                    </SwiperSlide>
                )
            })} 
        </Swiper>
    </>
  );
};

export default Carousel;
