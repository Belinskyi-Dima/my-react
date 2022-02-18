import React from "react";
import { Link } from 'react-router-dom'; 
import PropTypes from 'prop-types';

import { Button } from '@mui/material';




const LinkButton = ({ text, linkTo }) => {
    
    return (
        <Link to={linkTo}>
            <Button
                variant="contained"
                sx={{
                    color: '#ffffff',
                    backgroundColor: '#000000',
                    fontWeight: '500',
                    marginRight: '10px',
                    ':hover': {
                        color: '#ffffff',
                        backgroundColor: '#3a3a3a',
                    }
                }}    
            >
                {text}
            </Button>
        </Link>
    )
}

LinkButton.propTypes = {
    text: PropTypes.string,
    linkTo: PropTypes.string,
}

export default LinkButton
