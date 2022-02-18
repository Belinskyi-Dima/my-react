import React,{useState, useEffect} from 'react';

// import {fetchPopular} from '../../serverApi.js';
// import {fetchImage} from '../../serverApi.js'

import {TextField} from '@mui/material';
import PropTypes from 'prop-types';
// import { response } from 'express';
// import SearchIcon from '@mui/icons-material/Search';



const CardSearchInput = ({onChange, inputhValue, handleText}) => {


	return(
		<>
		<TextField 

			// value={inputhValue}
			id="filled-search"
   		label="Search a bike	"
			// fullWidth
  		 	variant="standard" 
			type='search'
	
			onChange={(e)=>handleText(e.target.value)}

			sx={{mb:"1.5rem", bgcolor:"white"}}>

	</TextField>
		</>
	)
}
export default CardSearchInput;

CardSearchInput.propTypes = {
	cardItem: PropTypes.array,
	onChange:  PropTypes.func,
	inputhValue: PropTypes.string,
	handleText: PropTypes.func,
}
