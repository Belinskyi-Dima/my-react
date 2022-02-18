import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Card, CardActions, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

import useStylesProductCard from "./useStylesProductCard";




const ProductCard = ({item}) => {

    useStylesProductCard()

    const { imageUrls, name, currentPrice, sizes, itemNo, commonItemsNo } = item
    const defaultSize = (sizes.find(size => size.quantity !== 0)).name

    return (
        <Card variant="outlined" className='card-wrapper'>
            <CardActions disableSpacing sx={{ justifyContent: 'end' }}>

                <IconButton>
                    <FavoriteBorderIcon /> {/* <FavoriteIcon /> */}
                </IconButton>
                
                <IconButton>
                    <AddShoppingCartIcon /> {/* <RemoveShoppingCartIcon /> */}
                </IconButton>

            </CardActions>

            <Link to={`/product-details/${`${commonItemsNo || itemNo}-${itemNo}`}/size-${defaultSize}`}>
                <CardMedia
                    component='img'
                    image={imageUrls[0]}
                />

                <CardContent className='card-content'>

                    <Typography variant='h3' className='card-title'>
                        {name}
                    </Typography>

                    <Typography variant='body1' className='card-price'>
                        {currentPrice} EUR
                    </Typography>

                </CardContent> 
            </Link>
            
        </Card>
    )
}

ProductCard.propTypes = {
    item: PropTypes.object,
}

export default ProductCard