
import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';

import { Button, Container, Typography } from '@mui/material'; 
import useStylesConfirmation from './useStyleConfirmation'; 

import { changeActiveStep } from '../../../store/checkout/checkout.actions';
import { get_order_products, send_order } from '../../../store/checkout/checkout.thunks';

import useOrder from '../../../hooks/useOrder';



const Confirmation = () => {

    useStylesConfirmation(); 
    const dispatch = useDispatch();
    const { order, order_products } = useOrder(); 


    const product_details = useSelector((state) => state.cartReducer.productsRender); 
    const pay_method = useSelector((state) => state.checkoutReducer.pay_method);
    const ship_method = useSelector((state) => state.checkoutReducer.ship_method);
    const branch = useSelector((state) => state.checkoutReducer.branch);
    const activeStep = useSelector((state) => state.checkoutReducer.active_step);
    const orderShipment = useSelector((state) => state.checkoutReducer.order_shipment);
    const total = useSelector((state) => state.cartReducer.total);


    const handleConfirm = () => {
        // dispatch(send_order(order()))
        dispatch(changeActiveStep(activeStep + 1)); 

    }; 

    const handleBack = () => {
        dispatch(changeActiveStep(activeStep - 1));
    }


    useEffect(() => {
        dispatch(get_order_products(order_products())); 

    }, [total]); 


    useEffect(() => {
        window.scrollTo(0, 0); 
        
    }, []);

   


    return (
        <Container className='conf'>

            <Typography
                className='conf--container'
                variant='subtitle1'
            >
                <span className='conf--text--header'>products details</span>
                {product_details.map(item => {
                    return (
                        <div key={`${item.id + item.size}`}>
                       
                            <div className='conf--goods--container'>
                                <div className='conf--position--container' >
                                    <span className='conf--text--label'>bike: </span><span className='conf--text--value'>{item.name} {item.size}</span>
                                </div> 
                                <div className='conf--position--container'>
                                    <span className='conf--text--label'>price for one: </span><span className='conf--text--value'>{item.price}</span>
                                </div> 
                                <div className='conf--position--container'> 
                                    <span className='conf--text--label'>quantity: </span><span className='conf--text--value'>{item.quantity}</span>
                                </div> 
                            </div>
                        </div>
                    )})
                }
                <div className='conf--total'>
                    <span className='conf--text--label'>total price: </span>
                    <span className='conf--text--total'>{total} EUR</span> 
                </div>

                <span className='conf--text--header'>shipping details</span>
                <div className='conf--goods--container'>
                    <div className='conf--position--container' >
                        <span className='conf--text--label'>shipping method: </span><span className='conf--text--value'>{ship_method.toLowerCase()}</span>
                    </div> 

                    {ship_method === 'MEEST' &&
                        <div className='conf--position--container'>
                            <span className='conf--text--label'>branch #: </span><span className='conf--text--value'>{branch}</span>
                        </div> 
                    }

                    {ship_method === 'COURIER' &&
                        <div className='conf--position--container'> 
                            <span className='conf--text--label'>address: </span><span className='conf--text--value'>{orderShipment.zip} {orderShipment.city} {orderShipment.address}</span>
                        </div> 
                    }

                </div> 


                <span className='conf--text--header'>payment details</span>
                <div className='conf--goods--container'>
                    <div className='conf--position--container' >
                        <span className='conf--text--label'>payment method: </span><span className='conf--text--value'>{pay_method.toLowerCase()}</span>
                    </div> 

                    {pay_method === 'CARD' &&
                        <div className='conf--position--container'>
                            <span className='conf--text--label'>status: </span><span className='conf--text--value'>payment has been made</span>
                        </div> 
                    }

                    {pay_method === 'CASH' &&
                        <div className='conf--position--container'> 
                            <span className='conf--text--label'>status: </span><span className='conf--text--value'>payment is not provided yet</span>
                        </div> 
                    }

                </div> 



            </Typography>

            <Typography
                variant='inherit'
            >
                
            </Typography>

            <>
                <Button 
                    variant='outlined' 
                    color='success'
                    className='conf--btn--pay' 
                    onClick={handleConfirm}
                    >
                        CONFIRM
                </Button>

                {pay_method === 'CASH' && 
                    <Button 
                        variant='text' 
                        color='error'
                        className='conf--btn--back' 
                        onClick={handleBack}
                    >
                        BACK
                    </Button>
                }
            </>

        </Container>
    )
}


export default Confirmation;  