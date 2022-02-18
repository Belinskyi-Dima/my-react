import React from "react";
import { Link } from 'react-router-dom'; 

import PropTypes from 'prop-types';




const Logo = ({size}) => {


   return (
      <>
         <Link to='/'>
            <img style={{width: size}} src="/assets/logo-bike.png" alt="logo-img" />
         </Link>
      </>
   );
};

Logo.propTypes = {
   size: PropTypes.string,
};

export default Logo;
