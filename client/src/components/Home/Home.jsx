import React from 'react';

import Carousel from '../Carousel/Carousel';
import GalleryCategory from '../GalleryCategory/GalleryCategory'; 
import PopularProducts from '../PopularProducts/PopularProducts'; 




const Home = () => {

    return (
        <>
            <Carousel />
            <GalleryCategory />
            <PopularProducts />
        </>
    )
}

export default Home