
import React, { useEffect } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';

import { Button, Container, Typography, TextField, MenuItem } from '@mui/material'; 
import useStylesPayment from './useStylesPayment';

import { get_pay_methods, get_payment_link } from '../../../store/checkout/checkout.thunks';
import { selectPayMethod, changeActiveStep } from '../../../store/checkout/checkout.actions';

import useCart from '../../../hooks/useCart';





const Payment = () => {

    useStylesPayment(); 
    const dispatch = useDispatch();

    const { total } = useCart(); 

    const product_details = useSelector((state) => state.cartReducer.productsRender); 
    const init_pay_methods = useSelector((state) => state.checkoutReducer.init_pay_methods);
    const pay_method = useSelector((state) => state.checkoutReducer.pay_method);
    const payment_url = useSelector((state) => state.checkoutReducer.payment_url);
    const activeStep = useSelector((state) => state.checkoutReducer.active_step);
   


    const handleChangePayMethod = (event) => {
        dispatch(selectPayMethod(event.target.value)); 
    }; 


    const handleContinue = () => {
        dispatch(changeActiveStep(activeStep + 1));
    }

    const handleBack = () => {
        dispatch(changeActiveStep(activeStep - 1));
    }

    
    useEffect(() => {
        dispatch(get_pay_methods()); 

    }, []); 


    useEffect(() => {
        window.scrollTo(0, 0); 
        
    }, []);
    


    const handlePayment = () => {
        dispatch(changeActiveStep(activeStep + 1));
    }
    // useEffect(() => {
    //     if (pay_method === 'CARD') {
    //         dispatch(get_payment_link(String(total).replace(/\./g, ''))); 
    //     }
    // }, [pay_method, total]); 



    return (
        <Container className='payment'>
            <span className='payment--text--header'>payment details</span> 
            
            <Typography
                variant='subtitle1'
            >
                {product_details.map(item => {
                    return (
                        <div className='payment--goods--container' 
                             key={`${item.id + item.size}`}>
                            <div className='payment--position--container' >
                                <span className='payment--text--label'>bike: </span><span className='payment--text--value'>{item.name} {item.size}</span>
                            </div> 
                            <div className='payment--position--container'>
                                <span className='payment--text--label'>price for one: </span><span className='payment--text--value'>{item.price}</span>
                            </div> 
                            <div className='payment--position--container'> 
                                <span className='payment--text--label'>quantity: </span><span className='payment--text--value'>{item.quantity}</span>
                            </div> 
                        </div>
                    )})
                }
            </Typography>

            <Typography
                variant='subtitle1'
            >
                <div className='payment--total--cont'>
                    <span className='payment--text--label'>total price: </span>
                    <span className='payment--text--total'>{total} EUR</span>
                </div>
            </Typography>

            <TextField
                className='payment--input'
                id='standard-select-currency'
                select
                name='payment'
                value={pay_method}
                onChange={handleChangePayMethod}
                helperText='payment method'
                variant='standard'
                >
                {init_pay_methods?.map((option) => (
                    <MenuItem 
                        className='payment--text'
                        key={option.value} 
                        value={option.value}>
                            {option.label}
                    </MenuItem>
                ))}
            </TextField>

            {pay_method === 'CASH' && 
                <>
                    <Typography className='checkout--payment--method'>
                        Your bikes can be paid by cash on delivery branch or directly to our courier depending on your shipping method
                    </Typography>

                    <Button 
                        variant='outlined' 
                        color='success'
                        className='payment--btn--pay' 
                        onClick={handleContinue}
                        >
                            CONTINUE
                    </Button>

                    <Button 
                        variant='text' 
                        color='error'
                        className='payment--btn--back' 
                        onClick={handleBack}
                        >
                            BACK
                    </Button>
                </>
            }

            {pay_method === 'CARD' && 
                <>
                    <Typography className='checkout--payment--method'>
                        Your bikes can be paid by card right now
                    </Typography>

                    {/* <a href={payment_url}> */}
                        <Button variant='outlined' 
                                color='success'
                                className='payment--btn--pay'
                                onClick={() => handlePayment()}
                        >
                            PAY NOW
                        </Button>
                    {/* </a> */}

                    <Button 
                        variant='text' 
                        color='error'
                        className='payment--btn--back' 
                        onClick={handleBack}
                        >
                            BACK
                    </Button>
                </>
            }


                
            
        
            

        </Container>
    )
}


export default Payment; 