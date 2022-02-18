import React from "react"
import PropTypes from 'prop-types';

import { Container, Typography } from '@mui/material';

import CardsSlider from '../CardsSlider/CardsSlider'; 

import useProducts from "../../hooks/useProducts";





const PopularProducts = () => {
    
    const { products } = useProducts();
    
    
    return (
        <Container style={{ maxWidth: '100vw', paddingRight: '0' }}>
            <Typography variant='h3' 
                sx={{
                    fontWeight: '500',
                    '@media (max-width: 768px)': {
                        fontSize: '36px',
                    },
                    '@media (max-width: 425px)': {
                        fontSize: '28px',
                    }
                }}
            >
                Our most popular products
            </Typography>

            <CardsSlider products={products} />

        </Container>
    )
} 

PopularProducts.propTypes = {
    size: PropTypes.string,
};

export default PopularProducts