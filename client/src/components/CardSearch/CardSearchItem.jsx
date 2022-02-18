import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
// import { makeStyles } from '@mui/material/styles';


import { Grid, Paper, Typography, ButtonBase, styled, } from '@mui/material';

const CardSearchItem = ({data, setSearchListOpen, setInputhValue, setCardItem}) => {
	// console.log(typeof setSearchListOpen);
	const [addStore, setAddStore] = useState('');
	// console.log(data);
	const { itemNo, commonItemsNo } = data;
	const defaultSize = (data.sizes.find(size => size.quantity !== 0)).name;
	
	
	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});

	const  handleCardId = (e) => {

		const cardId = e.currentTarget.dataset.id;
		// setAddStore(cardId)
		setCardItem([])
		// console.log("setInputhValue");
		setSearchListOpen(false);
		setInputhValue('');
		// console.log(cardId);

	}
	const handlerLink = () => {
		// console.log("setInputhValue");
		// setInputhValue('');
	}
	console.log(addStore);
	return(

	
		<Link to={`/product-details/${`${commonItemsNo || itemNo}-${itemNo}`}/size-${defaultSize}`}>
		<Paper data-id={data._id} onClick={handleCardId}  elevation={3} sx={{ p: 3,mt:1, flexGrow: 1, } }>
      <Grid   container   >

        <Grid item  xs={4}>
         <ButtonBase sx={{width: 150,  height: 120 }}>
            <Img src={data.imageUrls[0]} alt="complex"/>
         </ButtonBase>
        </Grid>
        <Grid item xs={0} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div" sx={{fontSize: 20}}>
                {data.name}
              </Typography>
              <Typography variant="body2" gutterBottom>
				  categories: {data.categories}
              </Typography>
              <Typography variant="body2" color="text.secondary">
               {data.description}
              </Typography>
            </Grid>
   
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
				<Typography sx={{ cursor: 'pointer' }} variant="body2">
				Price:
              </Typography>
              $ {data.currentPrice}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
	 </Link>
	)
		
}
export default CardSearchItem;

CardSearchItem.propTypes = {
	data: PropTypes.object,
	setSearchListOpen: PropTypes.func,
	setInputhValue:  PropTypes.func,
	setCardItem: PropTypes.func,
	item: PropTypes.object,


}