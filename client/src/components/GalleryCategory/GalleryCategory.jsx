import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Container, Box, Typography } from '@mui/material';

import { getCategories } from '../../store/catalog/catalog.thunks';

import useStylesGalleryCategory from './useStylesGalleryCategory'




const GalleryCategory = () => {

    useStylesGalleryCategory()

    const categories = useSelector(state => state.categoriesReducer.categories)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCategories())
    }, [])


    return (
        <Container className='gallery-container'>
            <Typography variant='h3' 
                sx={{
                    fontWeight: '500',
                    '@media (max-width: 768px)': {
                        fontSize: '36px',
                    },
                    '@media (max-width: 425px)': {
                        fontSize: '28px',
                    }
                }}
            >
                Categories
            </Typography>

            <Box className='gallery' >
                {categories.map((categorie) => {
                    return (
                        <Link 
                            to={categorie.parentId === 'null' ? `/catalog/${categorie.name}` : `/catalog/${categorie.parentId}/${categorie.name}`}
                            className={categorie.id}
                            key={categorie._id} 
                        >
                            <Box className='img-btn' sx={{ backgroundImage: `url(./assets/categories/${categorie.id}.jpg)`, }}>
                                <Typography className='img-btn-title'>
                                    {categorie.id}
                                </Typography>
                            </Box>
                        </Link>
                    )
                })}
            </Box>
        </Container>
    )
}

export default GalleryCategory