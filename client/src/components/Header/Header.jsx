import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux'

import CardsSearch from '../CardSearch/CardsSearch'

import PropTypes from 'prop-types';

import AppBar from '@mui/material/AppBar';
import { Box, styled, } from '@mui/material';
import Logo from '../Logo/Logo';
import Catalog from '../Catalog/Catalog';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import LoginModal from '../LoginModal/LoginModal';
import { useAPIToken } from '../../hooks/useAPIToken';
import { signInSuccess } from '../../store/auth/auth.actions';




const Header = () => {

	const [open, setOpen] = React.useState(false);
	const [searchOpen, setSearchOpen] = useState(false)
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const token = localStorage.getItem('token')
	const dispatch = useDispatch()


	useEffect(() => {
		if (token) {
			dispatch(signInSuccess({ success: true }))
		}
	}, []);

	const handleOpenSearch = () => {
		setSearchOpen(!searchOpen)
	}

	return (
		<>
			<AppBar
				position='sticky'
				sx={{
					padding: '5px 30px',
					bgcolor: '#F9F9F9',
					flexDirection: 'row',
					justifyContent: 'space-between',
					boxShadow: '0 1px 6px rgb(40, 55, 71, 0.3)'
				}}
			>
				<Logo size={'120px'} />

				<CardsSearch 
				setSearchOpen={setSearchOpen}
				style={{
					position: 'relativ'
				}} />
				
				<Catalog />
				<HeaderIcons  handleOpen={handleOpen} handleOpenSearch={handleOpenSearch}/>
				<LoginModal open={open} handleClose={handleClose} />
				
			</AppBar>
			{searchOpen && <Box component="div"sx={{mt:' 12px'}} style={{
				
				width: '100%',
				bgcolor: 'white',
				position: 'fixed',
				top: '40px',
				zIndex: 5,
			}}>
				{/* <CardsSearch 
				setSearchOpen={setSearchOpen}
				style={{
					position: 'relativ'
				}} /> */}
			</Box>}

		</>
	);
};
Header.propTypes = {
	handleOpenSearch: PropTypes.func,
};
export default Header;
