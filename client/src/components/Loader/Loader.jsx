import React from "react";
import { Container, Box } from '@mui/material';




const Loader = () => {
    
    return (
        <Container
            sx={{
                width: 'fit-content',
                height: 'fit-content',
                padding: '24px'
            }}
        >
            <Box
                sx={{
                    width: '400px',
                    '@media (max-width: 768px)': {
                        width: '300px',
                    },
                    '@media (max-width: 425px)': {
                        width: '200px',
                    },
                    animation: 'loader 7s linear infinite',
                    '@keyframes loader': {
                        '0%': {
                        transform: 'rotate(0deg)',
                        },
                        '100%': {
                        transform: 'rotate(360deg)',
                        },
                    },
                }}
            >
                <img 
                    style={{
                        width: 'inherit',
                        height: 'inherit',
                    }} 
                    src="/assets/loader.png" alt="loader" 
                />
            </Box>
        </Container>
    )
}

export default Loader