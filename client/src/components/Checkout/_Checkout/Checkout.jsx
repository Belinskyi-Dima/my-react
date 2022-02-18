
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import PropTypes from 'prop-types';

import { Box, Stepper, Step, StepLabel, StepContent, Button, Paper, Typography } from '@mui/material';
import useStylesCheckout from './useStyleCheckout';

import { changeActiveStep } from '../../../store/checkout/checkout.actions';

import Payment from '../Payment/Payment';
import Shipment from '../Shipment/Shipment';
import Confirmation from '../Confirmation/Confirmation';
import Order from '../Order/Order';




const steps = [
  {
    label: 'Shipping',
    description: `Shipment. Please check your shipping details and fill free to change them if any`,
  },
  {
    label: 'Payment',
    description: `Payment. Here is you can find payment information. Please check final amount and chose payment method. You will be redirected to payment processin page immediately`,
  },
  {
    label: 'Confirmation',
    description: `Confirmation. Please check your data and click CONFIRM. If updates is needed click on BACK button`,
  }, 
  {
    label: 'Order',
    description: ``,
  },
]; 




const Checkout = (props) => {

    useStylesCheckout(); 
    const dispatch = useDispatch();

    // const [activeStep, setActiveStep] = React.useState(0); 
    const activeStep = useSelector((state) => state.checkoutReducer.active_step) || 0;


    useEffect(() => {
        if (props.activeStep === '2') {
            dispatch(changeActiveStep(2)); 
        } 
        dispatch(changeActiveStep(0));

    }, []); 


    useEffect(() => {
        window.scrollTo(0, 0); 

    }, []);
    

    // const handleNext = () => {
    //     dispatch(changeActiveStep(activeStep + 1))
    // };

    // const handleBack = () => {
    //     dispatch(changeActiveStep(activeStep - 1))
    // };

    // const handleReset = () => {
    //     dispatch(changeActiveStep(0))
    // }; 



    const getStep = (step) => {
        switch (step) {
            case 0:
              return <Shipment />;
            case 1:
              return <Payment />; 
            case 2:
              return <Confirmation />;
            case 3:
              return <Order />;
        }
    }



    return (
        <div className='checkout'>
            <Box className='checkout--stepper'>
            <Stepper activeStep={activeStep} orientation='vertical'>
                {steps.map((step, index) => (
                <Step key={step.label}>
                    <StepLabel
                    className='checkout--helptext'
                    optional={
                        index === 3 ? (
                        <Typography variant='caption'>Last step</Typography>
                        ) : null
                    }
                    >
                    {step.label}
                    </StepLabel>
                    <StepContent>
                    <Typography className='checkout--helptext'>{step.description}</Typography>
                    {/* <Box sx={{ mb: 2 }}>
                        <div>
                        <Button
                            variant='text'
                            color='info' 
                            size='small'
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            {index === steps.length - 1 ? 'Finish' 
                            : (index === steps.length - 3 ? 'Pay Now' : 'Continue')}
                            
                        </Button>
                        <Button
                            color='info' 
                            size='small'
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                        >
                            Back
                        </Button>
                        </div>
                    </Box> */}
                    </StepContent>
                </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography className='checkout--helptext'>
                    All steps completed - you&apos;re finished
                </Typography>
                <Button 
                        color='info' 
                        size='small'
                        onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                    Reset
                </Button>
                </Paper>
            )}
            </Box>

            <Box className='checkout--canvas'> 
                {getStep(activeStep)}
            </Box>
        </div>
    );
} 


export default Checkout; 


Checkout.propTypes = {
	activeStep: PropTypes.string, 
}
