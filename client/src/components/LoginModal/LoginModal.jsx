import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PropTypes from 'prop-types';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const theme = createTheme({
   palette: {
      primary: {
         main: 'rgb(9, 128, 87)',
      },
   },
});




const style = {
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 400,
   bgcolor: '#f1f1f1',
   borderRadius: '5px',
   boxShadow: 24,
   p: 4,
};

const signBtnStyle = {
   border: 'none',
   color: 'silver',
   backgroundColor: '#f1f1f1',
   cursor: 'pointer',
   margin: '10px 0 0 10px',
}




const LoginModal = ({ open, handleClose }) => {

   const [loginType, setLoginType] = useState('Sign In')
   const isAuth = useSelector(state => state.authReducer.isAuth)
   const authError = useSelector(state => state.authReducer.authError)

   const swipType = () => {
      setLoginType('Sign In')
   }


   useEffect(() => {
      if (isAuth) handleClose()
   }, [isAuth])


   return (
      <>
         <Modal
            open={open}
            onClose={handleClose}
         >
            <Box sx={style}>
               <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
               }}>
                  <Typography
                     sx={{ color: '#121212' }}
                     variant="h5" component="h3"
                  >
                     {loginType}
                  </Typography>
                  <div>
                     <button
                        onClick={() => setLoginType('Sign Up')}
                        style={
                           loginType === 'Sign Up' ?
                              {
                                 ...signBtnStyle, color: 'rgb(9, 128, 87)'
                              } :
                              signBtnStyle
                        }>
                        Sign Up
                     </button>
                     <button
                        onClick={() => setLoginType('Sign In')}
                        style={
                           loginType === 'Sign In' ?
                              {
                                 ...signBtnStyle, color: 'rgb(9, 128, 87)'
                              } :
                              signBtnStyle
                        }>
                        Sign In
                     </button>
                  </div>
               </div>
               { 
                  authError === 'error' && 
                  <Typography variant="subtitle1" component="h6"
                     sx={{color: 'red', textAlign: 'center'}}
                  >
                     { loginType === 'Sign In' && 'User not found. Wrong emil or password.'}
                     { loginType === 'Sign Up' && 'User with this email is alredy registered.'}
                  </Typography>
               }
               <ThemeProvider theme={theme}>
               {
                  loginType === 'Sign In' && 
                  <SignIn />
               }
               {
                  loginType === 'Sign Up' && 
                  <SignUp swipType={swipType}/>
               }
               </ThemeProvider>
            </Box>
         </Modal>
      </>
   )
};

LoginModal.propTypes = {
   open: PropTypes.bool,
   handleClose: PropTypes.func
};

export default LoginModal;
