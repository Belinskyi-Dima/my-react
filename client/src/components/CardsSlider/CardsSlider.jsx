import React from "react"
import PropTypes from 'prop-types';

import { Container } from '@mui/material';

import ProductCard from '../ProductCard/ProductCard';
import useStylesCardsSliser from './useStylesCardsSliser';



const CardsSlider = ({ products }) => {
	useStylesCardsSliser()

	return (

		<Container className='slider'
			style={{
				maxWidth: '100vw',
				padding: '0px',
			}}
		>
			{products.length !== 0 && products.map((item, index) => {
				if (index < 10) {
					return (
						<ProductCard
							key={item._id}
							item={item}
						/>
					)
				}
			})}
		</Container>
	)
}

CardsSlider.propTypes = {
	products: PropTypes.array,
};

export default CardsSlider