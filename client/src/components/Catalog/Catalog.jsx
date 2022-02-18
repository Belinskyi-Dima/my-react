import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import { getCategories } from '../../store/catalog/catalog.thunks';




const Catalog = () => {
  
  
  const categories = useSelector(state => state.categoriesReducer.categories)
  const dispatch = useDispatch()
  
  const [isShown, setIsShown] = useState('none')
  
  
  useEffect(() => {
    dispatch(getCategories())
  }, [])

  const showCategories = (name) => {
    if (isShown === 'none') {
      setIsShown(name)
    } else if (isShown !== name) {
      setIsShown(name)
    } else {
      setIsShown('none')
    }
  }

  const closeCategories = () => {
    setIsShown('none')
  }


  return (
    <Box sx={{ 
      display: { xs: 'none', md: 'flex' }, 
      width: '400px', 
      justifyContent: 'space-between',
      alignItems: 'center',
      marginLeft: '60px'
    }}>
      {
        categories && categories.map(({ id, name, parentId }) => {
          {
            if (parentId === 'null') {
              return (
                <div key={id} style={{ 'display': 'flex' }}>
                  <Link to={`/catalog/${name}`}>
                    <Button
                      sx={{ 
                        my: 2, 
                        color: '#444444', 
                        display: 'block', 
                        margin: 0,
                        fontSize: '20px',
                        padding: '0 5px' 
                      }}
                      onClick={closeCategories}
                    >
                      {name}
                    </Button>
                  </Link>
                  <IconButton
                    onClick={() => (showCategories(name))}
                    size='small'
                    sx={{width: '24px', height: '24px', marginTop: '8px'}}
                  >
                    { isShown === name ? <ArrowDropUpIcon /> : <ArrowDropDownIcon /> }
                  </IconButton>
                  {
                    isShown === name &&
                    <div
                      style={{
                        left: 0,
                        top: '50px',
                        bgcolor: '#F9F9F9',
                        textAlign: 'center',
                        position: 'absolute',
                        width: '100%',
                        backgroundColor: '#F9F9F9',
                        borderBottom: 'solid 2px rgb(40, 55, 71, 0.1)'
                      }}
                    >
                    <ul 
                      style={{
                        display: 'flex',
                        justifyContent: 'center'
                      }}
                    >
                        {
                          categories.map((categorie) => {
                            if (categorie.parentId === name) {
                              return (
                                <Link
                                  key={categorie._id}
                                  to={`/catalog/${categorie.parentId}/${categorie.name}`}
                                  onClick={closeCategories}
                                >
                                  <li style={{
                                    fontSize: '16px',
                                    margin: '20px',
                                    textTransform: 'uppercase',
                                    fontFamily: '"Roboto","Helvetica","Arial",sans-serif'
                                  }}>{categorie.name}</li>
                                </Link>
                              )
                            }
                          })
                        }
                      </ul>
                    </div>
                  }
                </div>
              )
            }
          }
        })
      }
    </Box >
  );
};

export default Catalog;

