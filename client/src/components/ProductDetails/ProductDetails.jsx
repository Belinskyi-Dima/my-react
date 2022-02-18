import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { Container, Typography, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import JustReviewed from '../JustReviewed/JustReviewed.jsx';

import ProductDetailsSlider from '../ProductDetailsSlider/ProductDetailsSlider';
import Loader from '../Loader/Loader';

import useProduct from "../../hooks/useProduct";
import useCart from "../../hooks/useCart"; 
import useSearch from "../../hooks/useSearch";

import useStylesProductDetails from "./useStylesProductDetails";




const ProductDetails = () => {

    useStylesProductDetails()

    const { add_products_to_cart } = useCart(); 
    const { commonItemsNo, itemNo, size } = useParams();

    const { product, productRequestState } = useProduct(itemNo)
    const { searchedProducts, searchedProductsRequestState } = useSearch(commonItemsNo)
	 

    let navigate = useNavigate();

    const [currentProduct, setCurrentProduct] = useState(null)
    const [sameProducts, setSameProducts] = useState(null)
    const [selectedSize, setSelectedSize] = useState(null)

    const { name, imageUrls, sizes, color, description, currentPrice, transmission, material, _id } = currentProduct || {}




    useEffect(() => {
        if (commonItemsNo === itemNo) {
            setCurrentProduct(product)
        } else {
            setSameProducts(searchedProducts)
            const product = searchedProducts.find(product => product.itemNo === itemNo)
            setCurrentProduct(product)
        }
    }, [product, searchedProducts])


    useEffect(() => {
        const defaultSize = sizes?.find(size => size.quantity !== 0)
        const currentSize = sizes?.find(currentSize => currentSize.name === size)

        if (currentSize?.quantity === 0) {
            navigate(`/product-details/${`${commonItemsNo || itemNo}-${itemNo}`}/size-${defaultSize.name}`);
            setSelectedSize(defaultSize)
            
        } else {
            setSelectedSize(currentSize)
        }
    }, [sizes])


    const handleSizeChange = (event) => {
        const target = event.target
        
        sizes.forEach(size => {
            if (target.value === size.name) {
                setSelectedSize(size)
                navigate(`/product-details/${`${commonItemsNo || itemNo}-${itemNo}`}/size-${size.name}`);
            }
        })
    }
    
    const handleColorChange = (event) => {
        const target = event.target
        
        sameProducts.forEach(sameProduct => {
            if (target.value === sameProduct.color) {
                navigate(`/product-details/${`${commonItemsNo || sameProduct.itemNo}-${sameProduct.itemNo}`}/size-${selectedSize.name}`);
                setCurrentProduct(sameProduct)
            }
        })
    }
 

    return ( (productRequestState === 'loading' || searchedProductsRequestState === 'loading') ? <Loader /> :  
        <Container sx={{ p: '30px 0', position: 'relative' }}>

            <Typography variant="h2" className='PDP_title'>
                {name}
            </Typography>

            <Box className='PDP_content-wrapper'>

                <Container className='PDP_slider-container'>
                    <ProductDetailsSlider imageUrls={imageUrls || []} />
                </Container>

                <Container className='PDP_info-containers-wrapper'>
                    <Box>
                        <Box className='PDP_info-container--qty-article'>
                            <Typography variant='body1' sx={{color: '#098057', fontWeight: '600'}}>
                                In stock:
                                <Typography component='span'>
                                    {` ${selectedSize?.quantity}`}
                                </Typography>
                            </Typography>

                            <Typography variant='body1' sx={{fontWeight: '600'}}>
                                    Article:
                                <Typography component='span'>
                                    {` ${itemNo}`}
                                </Typography>
                            </Typography>
                        </Box>

                        <Box className='PDP_info-container--btn-group'>

                            <Button 
                                variant='outlined' 
                                startIcon={<FavoriteBorderIcon />}
                            >
                                to faworite
                            </Button>

                            <Button 
                                variant='outlined' 
                                startIcon={<AddShoppingCartIcon />} 
                                onClick={() => add_products_to_cart(_id, selectedSize.name)}
                            >
                                to cart
                            </Button>
                        </Box>
                    </Box>

                    <Box>
                        <FormControl>
                            <FormLabel 
                                id='color-radio-group' 
                                variant='body1' 
                                className='PDP_info-container--form-label'
                            >
                                Frame color:
                                <Typography component='span'>
                                    {` ${color}`}
                                </Typography>
                            </FormLabel>

                            <RadioGroup
                                aria-labelledby='color-radio-group'
                                value={color || ''}
                                row
                                onChange={handleColorChange}
                            >

                                {sameProducts?.map(sameProduct => {
                                    return <FormControlLabel 
                                        value={sameProduct.color}
                                        control={<Radio />}
                                        label=''
                                        className='PDP_info-container--form-control-label--frame-color'

                                        sx={{
                                            '& :nth-of-type(2)': {
                                                background: `${sameProduct.color}`,
                                                border: `1px solid ${sameProduct.color}`,
                                            },
                                            '.Mui-checked + span': {
                                                boxShadow: `0 0 5px ${sameProduct.color}`,
                                                background: `${sameProduct.color}`,
                                            },
                                        }}
                                        key={sameProduct._id}
                                    />
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box>
                        <FormControl>
                            <FormLabel 
                                id='sizes-radio-group' 
                                variant='body1' 
                                className='PDP_info-container--form-label'
                            >
                                Frame sizes:
                            </FormLabel>

                            <RadioGroup
                                aria-labelledby='sizes-radio-group'
                                value={size}
                                row
                                onChange={handleSizeChange}
                            >

                                {sizes?.map(size => {
                                    return <FormControlLabel 
                                        value={size.name}
                                        control={<Radio />}
                                        label={size.name}
                                        
                                        className='PDP_info-container--form-control-label--frame-sizes'
                                        disabled={!size.quantity}
                                        key={size._id}
                                    />
                                })}

                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Box className='PDP_info-container--price'>

                        <Typography variant='body1' sx={{fontWeight: '600', fontSize: '18px'}}>
                            {currentPrice} EUR
                        </Typography>

                        <Button variant='contained' className='PDP_info-container--price--btn'>
                            buy
                        </Button>
                    </Box>

                    <Box sx={{'& > :nth-of-type(n)': {p: '5px 0'}}}>
                        
                        <Typography variant='h5' sx={{fontWeight: '600'}}>
                            About bike
                        </Typography>

                        <Typography variant='body1' sx={{fontWeight: '600'}}>
                            Material:
                            <Typography component='span'>
                                {` ${material}`}
                            </Typography>
                        </Typography>

                        <Typography variant='body1' sx={{fontWeight: '600'}}>
                            Transmission:
                            <Typography component='span'>
                                {` ${transmission}`}
                            </Typography>
                        </Typography>

                        <Typography variant='body1'>
                            <Typography component='span'>
                                {description}
                            </Typography>
                        </Typography>
                    </Box>

                </Container>
            </Box>
     
        </Container>
    )
}

export default ProductDetails