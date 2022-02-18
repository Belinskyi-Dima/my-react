
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';

// import { useDebounce } from 'use-debounce';

import { Button, Container, TextField, MenuItem, Typography, Autocomplete } from '@mui/material';
import useStylesShipment from './useStyleShipment';

import { get_branch, 
         get_ship_methods, 
         get_customer_id } from '../../../store/checkout/checkout.thunks';
import { selectShipMethod, 
         selectBranch, 
         changeActiveStep, 
         storeOrderShipment } from '../../../store/checkout/checkout.actions';




const validationSchema = yup.object({ 

    firstName: yup
        .string('enter your first name')
        .required('first name is required'), 

    lastName: yup
        .string('enter your last name')
        .required('last name is required'),

    phone: yup
        .string('enter your phone')
        .required('phone is required')
        .max(13, 'phoneshould be of maximum 13 characters length')
        .matches(/[0-9\\+]/, 'phone is not valid'), 
   
    email: yup
        .string('enter your email')
        .email('enter a valid email')
        .required('email is required'),
  });



const Shipment = () => {

    useStylesShipment();  
    const dispatch = useDispatch(); 


    const isLogged = useSelector((state) => state.authReducer.isAuth);
    const init_branches = useSelector((state) => state.checkoutReducer.init_branches);
    const init_ship_methods = useSelector((state) => state.checkoutReducer.init_ship_methods);
    const ship_method = useSelector((state) => state.checkoutReducer.ship_method);
    const branch = useSelector((state) => state.checkoutReducer.branch);
    const activeStep = useSelector((state) => state.checkoutReducer.active_step);
    const orderShipment = useSelector((state) => state.checkoutReducer.order_shipment);



    const handleChangeShipMethod = (event) => {
        dispatch(selectShipMethod(event.target.value)); 
    };


    const handleChangeBranch = (event) => {
        dispatch(selectBranch(event.target.value));
    }; 


    useEffect(() => {
        dispatch(get_ship_methods()); 
        if (isLogged) {
            dispatch(get_customer_id());
        }
        
    }, []); 


    useEffect(() => {
            dispatch(get_branch(branch)); 

    }, [branch]); 


    useEffect(() => {
        window.scrollTo(0, 0); 
        
    }, []);



    const formik = useFormik({
        initialValues: {
            firstName: orderShipment.firstName || '',
            lastName: orderShipment.lastName || '', 
            phone: orderShipment.phone || '', 
            email: orderShipment.email || '', 
            city: orderShipment.city || '', 
            address: orderShipment.address || '', 
            zip: orderShipment.zip || '', 
        }, 

        validationSchema: validationSchema, 

        onSubmit: (values) => { 
            dispatch(storeOrderShipment(values)); 
            dispatch(changeActiveStep(activeStep + 1));
        },

    }); 


    return (
        <Container className='shipment'>

            <span className='shipment--text--header'>shipping details</span>
     
            <form onSubmit={formik.handleSubmit}> 

                <TextField
                    fullWidth
                    className='shipment--input'
                    variant='standard'
                    id='text'
                    name='firstName'
                    label='first name'
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                    fullWidth
                    className='shipment--input'
                    variant='standard'
                    id='text'
                    name='lastName'
                    label='last name'
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                /> 
                <TextField
                    fullWidth
                    className='shipment--input'
                    variant='standard'
                    id='text'
                    name='phone'
                    label='phone'
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                /> 
                <TextField
                    fullWidth 
                    className='shipment--input' 
                    variant='standard'
                    id='email'
                    name='email'
                    label='e-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                /> 

                <div className='shipment--method--container'>
                    <TextField
                        className='shipment--input'
                        id='standard-select-currency'
                        select
                        label='Select'
                        name='shipping'
                        value={ship_method}
                        onChange={handleChangeShipMethod}
                        helperText='shipping method'
                        variant='standard'
                        >
                        {init_ship_methods?.map((option) => (
                            <MenuItem 
                                className='shipment--text'
                                key={option.value} 
                                value={option.value}>
                                    {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    {ship_method === 'COURIER' && 
                    <>
                        <Typography className='checkout--shipping--method'>
                            We will call you back to confirm time for delivery. Please proceed with your address details for shipping below
                        </Typography>

                        <TextField
                            fullWidth
                            className='shipment--input'
                            variant='standard'
                            id='text'
                            name='city'
                            label='city'
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                        />

                        <TextField
                            fullWidth
                            className='shipment--input'
                            variant='standard'
                            id='text'
                            name='address'
                            label='address line'
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                            helperText={formik.touched.address && formik.errors.address}
                        />

                        <TextField
                            fullWidth
                            className='shipment--input'
                            variant='standard'
                            id='text'
                            name='zip'
                            label='post code'
                            value={formik.values.zip}
                            onChange={formik.handleChange}
                            error={formik.touched.zip && Boolean(formik.errors.zip)}
                            helperText={formik.touched.zip && formik.errors.zip}
                        />          
                    </>
                    }

                    {ship_method === 'MEEST' && 
                    <Autocomplete
                        className='shipment--input'
                        clearOnEscape
                        id='combo-box-demo'
                        options={init_branches}
                        size='small'
                        renderInput={(params) => <TextField {...params} 
                                                            helperText='branch'
                                                            onChange={handleChangeBranch} 
                                                />}
                    />
                    }
                </div>
                <Button 
                    variant='outlined' 
                    color='success'
                    className=''
                    type='submit' 
                >
                    CONTINUE
                </Button>


            </form>

        </Container>
    )
}


export default Shipment; 