
import React from 'react'; 
import { Link } from 'react-router-dom'; 

import { debounce } from 'debounce';

import { Button, Divider, Container, Box, Card, CardMedia, CardContent, Typography } from '@mui/material'; 
import IconButton from '@mui/material/IconButton';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useStylesCart from './useStylesCart';

import useCart from '../../hooks/useCart'; 
import useCartDetails from '../../hooks/useCartDetails';




const Cart = () => {

    useStylesCart(); 

    const { total, change_count_of_products, delete_product_from_cart } = useCart();
    const { product_details } = useCartDetails(); 



    return (
        <Container className='cart'>
            <Box className='cart--info'>
                <Typography
                    variant='inherit'
                >
                    Cart information<br/><br/>Here is you can find all selected products and prices.<br/><br/>Our company takes full responsibility for the quality of bicycles, we provide a full one year warranty
                </Typography>
            </Box>
            <Divider 
                     className='cart--divider'
                     orientation='vertical' 
                     variant='middle' 
                     flexItem />
            {product_details.length !== 0 && <Box className='cart--list'>
            {product_details.map(item => {
                return (
                    <Card   key={`${item.id + item.size}`} 
                            variant='inlined'
                            className='card'
                        >
                 
                        <CardMedia
                            component='img' 
                            image={item.imageUrl}
                            className='cart--img'
                        />

                        <CardContent>
                            <Typography
                                variant='body1' 
                                className='cart--text cart--text--description'
                            >
                                {item.name}
                            </Typography>
                            <Typography
                                variant='body1' 
                                className='cart--text cart--text--price'
                            >
                                {(item.price*item.quantity).toFixed(2) } EUR
                            </Typography>

                        </CardContent> 

                        <CardContent>
                            <Typography
                                variant='body1' 
                                className='cart--text cart--text--color'
                            >
                                {item.color}
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <Typography
                                variant='body1' 
                                className='cart--text cart--text--size'
                            >
                                {item.size}
                            </Typography>
                        </CardContent>

                        <div className='cart--container--count--delete'>
                            <div className='cart--container--count'>
                                <i className='fas fa-minus fa-xs'
                                onClick={debounce(() => change_count_of_products(item, 'decrease'), 500)}
                                >
                                </i>
                                <CardContent>   
                                    <Typography
                                        variant='body1'
                                        className='cart--text cart--text--count'
                                    >
                                        {item.quantity}
                                    </Typography>
                                </CardContent>
                                <i className='fas fa-plus fa-xs'
                                onClick={debounce(() => change_count_of_products(item, 'increase'), 500)}
                                >
                                </i>
                            </div>

                            <IconButton onClick={() => {delete_product_from_cart(item)}}>
                                <DeleteOutlineOutlinedIcon className='cart--btn--delete'/>
                            </IconButton>
                        </div>

                    </Card>
                )
            })}
            <Typography
                variant='body1' 
                className='cart--text cart--text--total'
            >
                <span className='cart--text--price'>{total} EUR</span> (total amount)
            </Typography>

            <Link to='/checkout'>
                <Button variant='outlined' 
                        color='success'
                        className='cart--btn--buy'
                >
                    BUY NOW
                </Button>
            </Link>


    
            

            </Box>}

            {product_details.length === 0 &&
                <div className='cart--list'>
                    <span>WE ARE SAD, YOU STILL HAVE NOT ORDERED ANYTHING...</span>
                </div>
            }

        </Container>
    )
}


export default Cart; 