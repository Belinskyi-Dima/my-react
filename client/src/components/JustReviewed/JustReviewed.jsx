import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import PropTypes from 'prop-types';

import useRecntlyViewed from '../../hooks/useRecentlyViewed'
import CardsSlider from '../CardsSlider/CardsSlider'

import { Container, Grid, Paper, Typography, ButtonBase, styled, } from '@mui/material';


const JustReviewed = ({ currentitem }) => {
	const [rows, setRows] = useState();
	const { itemNo } = useParams()
	console.log(rows);
	const { recentlyViewedProducts, recentlyViewedProductsRequestState } = useRecntlyViewed(rows);
	console.log(recentlyViewedProducts);
	// console.log(itemNo);

	useEffect(()=> {
		const productItemNo = itemNo;
        let viewedItems = JSON.parse(localStorage.getItem('reviewed_id'));
		//   console.log(viewedItems);

        if(!viewedItems){
            viewedItems = [];
        }

        const viewedItemAlready = viewedItems.indexOf(productItemNo);
		//   console.log(viewedItemAlready);
        if(viewedItemAlready > -1 ){
            viewedItems.splice(viewedItemAlready, 1);
        }

        viewedItems.unshift(productItemNo)

        if(viewedItems.length > 10){
            viewedItems.pop();
        }

		localStorage.setItem('reviewed_id', JSON.stringify(viewedItems));
	},[])

	useEffect(() => {
		const data = localStorage.getItem('reviewed_id');
		if (data) {
			const items = JSON.parse(data);
			const currentProduct = items.indexOf(itemNo);
			if (currentProduct > -1) {
				items.splice(currentProduct, 1);
			}
			console.log(items);
			if (items) {
				setRows(items.join(','));
			}
		}
	}, [])



	return (

		<Container style={{ maxWidth: '100vw', paddingRight: '0' }}>
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
				Recently Viewed
			</Typography>

			<CardsSlider products={recentlyViewedProducts.products || []} />
			

		</Container>


	)
}
export default JustReviewed;

JustReviewed.propTypes = {
	currentitem: PropTypes.string,
}