import React from 'react'; 
import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import CartCounter from './CartCounter'; 
import useStylesCartCounter from './useStylesCartCounter'; 

import PropTypes from 'prop-types';


const circleLoginStyle = {
   height: '7px',
   width: '7px',
   borderRadius: '50%',
   border: 'solid 1px #fff',
   backgroundColor: 'silver',
   position: 'absolute',
   bottom: 10,
   left: 8,
}




const HeaderIcons = ({ handleOpen, handleOpenSearch }) => {

   useStylesCartCounter();

   const isAuth = useSelector(state => state.authReducer.isAuth)


   return <div>
      <IconButton
		onClick={handleOpenSearch}
         sx={{
            position: 'relative',
            mr: '25px',
            '::after': {
               content: '" "',
               bgcolor: '#c2c2c2',
               width: '0.5px',
               height: '20px',
               position: 'absolute',
               left: 50,
            },
         }}
      >
         <SearchIcon/>
      </IconButton>
      {
         isAuth ?
            <Link to='/user-profile'>
               <IconButton sx={{ position: 'relative' }}>
                  <div
                     style={{ ...circleLoginStyle, backgroundColor: 'rgb(9, 128, 87)' }}
                  ></div>
                  <AccountCircleIcon />
               </IconButton>
            </Link> :
            <IconButton onClick={handleOpen} sx={{ position: 'relative' }}>
               <div style={circleLoginStyle}></div>
               <AccountCircleIcon />
            </IconButton>
      }
      <IconButton>
         <FavoriteIcon />
      </IconButton>
      <Link to='/cart'>
         <IconButton>
            <ShoppingCartIcon />
            <CartCounter />
         </IconButton>
      </Link>
   </div>;
};

HeaderIcons.propTypes = {
   handleOpen: PropTypes.func,
   handleOpenSearch: PropTypes.func,
};

export default HeaderIcons;