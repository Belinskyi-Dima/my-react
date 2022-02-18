import React from "react";

import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";





const ProductDetailsSlider = ({ imageUrls }) => {


    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true, }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >

            {imageUrls.map((imageUrl, index) => {
                return (
                    <SwiperSlide key={index}>
                        <img 
                            src={imageUrl} 
                            style={{
                                width: '100%',
                            }}
                        />
                    </SwiperSlide>
                )
            })}
        </Swiper>
    );
}

ProductDetailsSlider.propTypes = {
    imageUrls: PropTypes.array,
}

export default ProductDetailsSlider