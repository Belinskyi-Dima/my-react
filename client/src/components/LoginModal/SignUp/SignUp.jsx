import React, {useState, useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { signUp } from '../../../store/auth/auth.thunks'

import { useFormik } from 'formik';
import * as yup from 'yup';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import PropTypes from 'prop-types';


const validationSchema = yup.object({
   firstName: yup
      .string('Enter your first name')
      .min(2, 'First name should be of minimum 2 characters length')
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required("Please enter only letters"),
   lastName: yup
      .string('Enter your last name')
      .min(2, 'Last name should be of minimum 2 characters length')
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required("Please enter only letters"),
   email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
   password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
   confirmPassword: yup
      .string('Confirm your password')
      .oneOf([yup.ref('password'), null], 'Passwords must match')
      .required('Password confirm is wrong')
});




const SignUp = ({ swipType }) => {
   const [showPassword, setShowPassword] = useState(false)

   const authError = useSelector(state => state.authReducer.authError)

   const dispatch = useDispatch()

   const formik = useFormik({
      initialValues: {
         firstName: '',
         lastName: '',
         login: '',
         email: '',
         password: '',
         confirmPassword: ''
      },
      validationSchema: validationSchema,
      onSubmit: ({ firstName, lastName, login, email, password }) => {
         const userData = {
            firstName,
            lastName,
            login,
            email,
            password
         }
         dispatch(signUp(userData))
      },
   });

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword)
   };

   const handleMouseDownPassword = (event) => {
      event.preventDefault();
   };

   useEffect(() => {
      if(authError === 'success') swipType()
   }, [authError])


   return (
      <form onSubmit={formik.handleSubmit}>
         <TextField
            margin='normal'
            variant='standard'
            id="firstName"
            name="firstName"
            label="First name"
            sx={{ marginRight: '10px', width: '190px' }}
            value={formik.values.firstName}
            onChange={formik.handleChange}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
            helperText={formik.touched.firstName && formik.errors.firstName}
         />
         <TextField
            margin='normal'
            variant='standard'
            id="lastName"
            name="lastName"
            label="Last name"
            sx={{ marginLeft: '10px', width: '190px' }}
            value={formik.values.lastName}
            onChange={formik.handleChange}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
            helperText={formik.touched.lastName && formik.errors.lastName}
         />
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
            sx={{ marginRight: '10px', width: '190px' }}
            id="password"
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
         />
         <TextField
            margin='normal'
            variant='standard'
            sx={{ marginLeft: '10px', width: '190px' }}
            id="confirmPassword"
            name="confirmPassword"
            label="Confirm password"
            type={showPassword ? 'text' : 'password'}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
         />
         <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            sx={{
               position: 'absolute',
               top: 240,
               right: 240
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
            Sign up
         </Button>
      </form>
   );
};

SignUp.propTypes = {
   swipType: PropTypes.func
};

export default SignUp;