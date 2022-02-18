
import React,{useState, useEffect, useCallback} from 'react';

import { useSelector } from 'react-redux'
import debounce from 'lodash/debounce';
import CardSearchInput from './CardSearchInput.jsx';
import CardSearchItem from './CardSearchItem.jsx';

import PropTypes from 'prop-types';
import { positions } from '@mui/system';
import { palette } from '@mui/system';

// import Buttons from '../Buttons/Buttons'

import { AppBar, Toolbar , IconButton , Typography, Grid, Box,styled, } from '@mui/material';
import { includes } from 'lodash';
// import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const BASE_URL = "http://localhost:5000/api/";
const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjE4N2I3MDdjYzIwMTA2YzVmNzkzNiIsImZpcnN0TmFtZSI6IkRpbWEiLCJsYXN0TmFtZSI6IkRpbWEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2NDM2NDc0NzIsImV4cCI6MTY0NzI0NzQ3Mn0.CdxIy2CGhnr1OYnX1G8fP9Ub8aGCV9Wzf61_61U8qRI";

const CardsSearch = ({ setSearchOpen }) => {

	const [cardItem, setCardItem] = useState([]);
	const [inputhValue, setInputhValue] = useState('');
	const [isSearchListOpen, setSearchListOpen] = useState(false)

	const products = useSelector(state => state.productsReducer.products)
	// console.log(products);
	// console.log(inputhValue);

	// const debounceFn = useCallback(_debounce(cardResponse, 1000), []);
	// const debounceFn = debounce(()=>dictionaryApi, 1000)


	const Img = styled('img')({
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	});


	const dictionaryApi = async () => {

		if (inputhValue.length >= 3) {

			const cardResponse = fetch(`http://localhost:5000/api/products/search`, {
				method: 'POST',
				body: JSON.stringify({ "query": inputhValue }),
				headers: {
					'Content-Type': 'application/json',
					'Authorization': API_KEY,
				}
			}).then(r => r.json())
				.then(data => {
					// console.log(data);
					setCardItem(data)
					// const debounceFn = debounce(()=>setCardItem(data), 5000)
					// debounceFn()
				})

		}
	}


	useEffect(() => {
		dictionaryApi()

	}, [inputhValue]);


	const onChange = (e) => {
		// setInputhValue([])
		setCardItem([])
		let value = e.target.value.trim();
		// const handleText = debounce((value) => {
		// 		setInputhValue(value);
		// 	 }, 1000);

		setInputhValue(value)
		setSearchListOpen(true)

	};

	// const handleText = debounce((text) => {
	// 	setInputhValue(text);
	//  }, 500);

	const handleText = debounce((text) => {
		setCardItem([]),
			setInputhValue('')

		setInputhValue(text)

		setSearchListOpen(true)

	}, 600)

	const handleCloseSearch = () => {
		setSearchOpen(false)
		// const cardId = e.currentTarget.dataset.id ;

		// setItems([...items, cardId])

		// return	items.filter((item)=> {
		// 		item.includes(cardId) 
		// 		return setAddStore([...addStore, item])
		// 	})

		// return setAddStore(a)

		// const a = [...addStore].filter((item)=> item === cardId)
		// setAddStore(a)
		// setAddStore([...addStore, cardId])

		// setAddStore((e)=> [...addStore, cardId]);
	}

	return (
		<>

			<CardSearchInput sx={{ zIndex: 10, mb: 0, position: 'fixed', bgcolor: "white", }}
				inputhValue={inputhValue}
				// onChange={handleText}
				handleText={handleText}
			/>
			{inputhValue &&
				// {isSearchListOpen &&

				<Box onClick={handleCloseSearch} component="div" sx={{ zIndex: 10, bgcolor: 'text.disabled', }} style={{ display: 'flex', alignItems: "center", flexDirection: 'column', width: "100%", height: "calc(100vh 100px)", top: '48px', bgcolor: 'text.disabled', position: 'absolute' }}>

					{cardItem.length > 0 ? (

						cardItem.map((data) => (
							<Grid container key={data._id} sx={{ mt: 1, alignItems: "center", maxWidth: "1100px" }}>
								<CardSearchItem
									setCardItem={setCardItem}
									setInputhValue={setInputhValue}
									setSearchListOpen={setSearchListOpen}
									data={data} />
							</Grid>
						))) : (
						<Typography sx={{bgcolor: "white", opacity: '0.5', width: '100%', textAlign:'center', padding: '100px', fontSize: 50}}>
							Nothing found for your request
						</Typography>
					)}
				</Box>
				// }
			}
		</>
	)
}
CardsSearch.propTypes = {
	setSearchOpen: PropTypes.func,
}
export default CardsSearch;

// cardItem.filter((item)=> item.name.toLowerCase().includes(inputhValue.toLowerCase())).map((data)=>(

