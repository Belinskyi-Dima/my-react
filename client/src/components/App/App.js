
import React from 'react';
import { BrowserRouter } from 'react-router-dom';



import './App.css';
import Header from '../Header/Header';
import CardsSearch from '../CardSearch/CardsSearch.jsx'
import Pages from '../Pages/Pages';
import Footer from '../Footer/Footer/Footer';
import Toast from '../Toast/Toast';


const App = () => {

	return (

		<BrowserRouter>

			<Header />


			<Pages />
			<Toast />
			<Footer />


		</BrowserRouter>


	);
}
export default App;