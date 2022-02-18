import React from "react";

import { Container, Typography, Box, ButtonGroup } from '@mui/material';
import LinkButton from '../LinkButton/LinkButton'




const NotFindedPage = () => {

    return (
        <Container sx={{
            padding: '20px 30px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            maxHeight: '100%', 
            maxWidth: '800px',
            '@media (max-width: 425px)': {
                position: 'relative'
            }
        }}>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>

                <Typography>

                    <Typography 
                        variant="string"
                        sx={{
                            display: 'block',
                            fontSize: '100px',
                            '@media (max-width: 768px)': {
                                fontSize: '70px',
                            },
                        }}
                    >
                        404
                    </Typography>

                    <Typography 
                        variant="string"
                        sx={{
                            display: 'block',
                            fontSize: '37px',
                            '@media (max-width: 768px)': {
                                fontSize: '28px',
                            },
                        }}
                    >
                        Ooops, page not found
                    </Typography>

                    <Typography 
                        variant="string"
                        sx={{
                            display: 'block'
                        }}
                    >
                        Sorry, but the requested page does not exist
                    </Typography>

                </Typography>


                <ButtonGroup 
                    variant='outlined'
                    color='inherit'
                    sx={{
                        '@media (max-width: 768px)': {
                            '& :nth-of-type(n)': {
                                fontSize: '12px',
                            }
                        },
                    }}
                >
                    <LinkButton 
                        linkTo='/'
                        text='main&nbsp;page'
                    />
                    <LinkButton 
                        linkTo='/catalog'
                        text='catalog'
                    />

                </ButtonGroup>

            </Box>

            <Box sx={{
                maxHeight: '350px',
                '@media (max-width: 768px)': {
                    maxHeight: '240px',
                },
                '@media (max-width: 425px)': {
                    position: 'absolute',
                    top: '-20px',
                    right: '20px',
                    maxHeight: '165px'
                },
            }}>
                <img style={{'maxHeight': 'inherit'}} src="/assets/404-error.png" />
            </Box>

        </Container>
    )
}

export default NotFindedPage