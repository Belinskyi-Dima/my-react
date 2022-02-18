import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import { signIn } from '../../../store/auth/auth.thunks'

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';


const validationSchema = yup.object({
   email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
   password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
});




const SignIn = () => {

   const [showPassword, setShowPassword] = useState(false)
   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         email: '',
         password: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
         const userData = {
            loginOrEmail: values.email,
            password: values.password
         }
         dispatch(signIn(userData));
      }
   });

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };


   return (
      <form onSubmit={formik.handleSubmit}>
         <TextField
            margin='normal'
            variant='standard'
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
         />
         <TextField
            margin='normal'
            variant='standard'
            fullWidth
            id="password"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
         />
                  <IconButton
                     aria-label="toggle password visibility"
                     onClick={handleClickShowPassword}
                     onMouseDown={handleMouseDownPassword}
                     sx={{
                        position: 'absolute',
                        top: 167,
                        right: 30
                     }}
                  >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
         <Button
            sx={{
               bgcolor: '#121212',
               color: 'rgb(9, 128, 87)',
               fontWeight: 700,
               marginTop: '50px',
               '&:hover': {
                  bgcolor: '#1f1f1f'
               }
            }} variant="contained" fullWidth type="submit">
            Sign in
         </Button>
      </form>);
};

export default SignIn;
