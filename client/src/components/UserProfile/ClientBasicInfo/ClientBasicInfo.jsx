import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { phoneRegExp, birthDateRegExp } from './RegExp'
// import { getUserProfile } from '../../../store/userProfile/userProfile.actions'
// import { getProfile, editProfile } from '../../../store/userProfile/userProfile.thunks'

import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const validationSchema = yup.object({
    firstName: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    phoneNumber: yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .nullable()
      .required('Phone number is required'),
    birthDate: yup.string()
      .matches(birthDateRegExp, "Birth date is not valid")
      .nullable()
      .required('Birth date is required'),
});

const ClientBasicInfo = () => {

    // const userProfile = useSelector((state) => state.userProfile.userProfile)
    
    // const dispatch = useDispatch();    
    
    // test useEffect to get token from localStorage
    // useEffect(() => {
    //     console.log('text');
    //     dispatch(getProfile());
    //     console.log(localStorage.getItem('token'));
    // }, [])

    const formik = useFormik({
        initialValues: {
            firstName: '',
            // firstName: userProfile.firstName || '',
            lastName: '',
            email: '',
            birthDate: '',
            phoneNumber: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const update = {
                // ...userProfile,
                ...user,
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNumber: values.phone,
                birthDate: values.birthDate
            }
            updateData(update).then(() => {

                dispatch(userOperations.setNewData(update))
                snackActions.success('Successfully changed')
            })
            // .catch((err) => {
            //     const message = err.response.data.password ? err.response.data.password : 'Something wrong with your data'
            //     snackActions.error(message)
            // })      
        },
    });

    const user = [
        {
            firstName: 'Misha',
            lastName: 'Laurenso',
            email: 'batman@gmail.com',
            birthDate: '29.08.2002',
            phoneNumber: '0985624785',
            id: '452'
        }
    ]
    

  return (
    <>
        <div style={{padding: '15px'}} className='client-basic-info'>
            {
                // user.map((info) => {
                //     return (
                            <form style={
                                {padding: '15px', 
                                display: 'flex', 
                                flexDirection: 'column',
                                gap: '15px',
                                width: '400px',
                                // justifyContent: 'space-between'
                                }}  onSubmit={formik.handleSubmit}>
                                <TextField
                                    variant='standard'
                                    id="firstName"
                                    firstName="firstName"
                                    label="Name"
                                    type="text"
                                    value={formik.values.text}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                />
                                <TextField
                                    variant='standard'
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    value={formik.values.text}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                />
                                <TextField
                                    variant='standard'
                                    id="email"
                                    name="email"
                                    label="Email"
                                    placeholder='example@gmail.com'
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                />
                                <TextField
                                    variant='standard'
                                    id="birthDate"
                                    name="birthDate"
                                    label="Birth date"
                                    // type="date"
                                    value={formik.values.date}
                                    onChange={formik.handleChange}
                                    error={formik.touched.birthDate && Boolean(formik.errors.birthDate)}
                                    helperText={formik.touched.birthDate && formik.errors.birthDate}
                                />
                                <TextField
                                    variant='standard'
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    label="Phone Number"
                                    type="tel"
                                    value={formik.values.phoneNumber}
                                    onChange={formik.handleChange}
                                    error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                />
                                <Button  
                                    sx={{
                                        bgcolor: '#121212',
                                        color: 'rgb(9, 128, 87)',
                                        fontWeight: 700,
                                        width: '150px',
                                        margin: '0 auto',
                                        '&:hover': {
                                            bgcolor: '#1f1f1f'
                                        }
                                    }}
                                    variant="contained"
                                    type="submit"
                                >
                                    Save changes
                                </Button>
                            </form>
                //     )
                // })
            }
        </div>
    </>
  );
};

export default ClientBasicInfo;
