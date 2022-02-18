import React from 'react';

import { useLocation, Navigate } from 'react-router-dom'
import {useSelector} from 'react-redux'

import PropTypes from 'prop-types';




const PrivatPage = ({children}) => {

   const location = useLocation()
   const isAuth = useSelector(state => state.authReducer.isAuth)

   if(!isAuth) {
      return <Navigate to='/' state={{from: location}} />
   }


   return children;
};

PrivatPage.propTypes = {
   children: PropTypes.element
 };

export default PrivatPage;
