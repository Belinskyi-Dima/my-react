import React from "react";
import { Link } from 'react-router-dom'; 

import PropTypes from 'prop-types';




const FooterLogo = ({size}) => {


   return (
      <>
         <Link to='/'>
            <img style={{width: size}} src="/assets/logo-bike-white.png" alt="footer-logo-img" />
         </Link>
      </>
   );
};

FooterLogo.propTypes = {
   size: PropTypes.string
};

export default FooterLogo;