import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom'; 

// place for more Categories
import Home from '../Home/Home'
import Categorie from '../Categorie/Categorie'
import ProductDetailsPage from '../ProductDetailsPage/ProductDetailsPage'
import Cart from '../Cart/Cart'
import Checkout from '../Checkout/_Checkout/Checkout';
import NotFindedPage from '../NotFindedPage/NotFindedPage'
import FooterPagesTabs from '../Footer/FooterPages/FooterPagesTabs/FooterPagesTabs';
// import UserProfile from '../UserProfile/UserProfile';
import UserProfile from '../UserProfile/UserProfile/UserProfile';
import PrivatPage from './hoc/PrivatPage';
// import Company from '../Company/Company'
// import Contacts from '../Contacts/Contacts'
// import Clients from '../Clients/Clients'




const Pages = () => {

    const categories = useSelector(state => state.categoriesReducer.categories)


    return (
        <Routes>

            {categories?.map(categorie => {
                const { parentId, name, id } = categorie
                return (
                    <Route path={`catalog/${ parentId !== 'null' ? `${parentId}/${name}` : name }`} 
                        element={<Categorie categorieId={id} />} key={id} 
                    />
                )
            })}

            <Route path="/" 
                element={<Home />} 
            />

            <Route path="product-details/:commonItemsNo-:itemNo/size-:size" 
                element={<ProductDetailsPage />}
            />

            <Route path="/user-profile" element={
                <PrivatPage>
                    <UserProfile />
                </PrivatPage>
            } />

            <Route path="cart" element={<Cart />} />

            <Route path="checkout" element={<Checkout />} />
            
            <Route path="checkout/payment-successful" element={<Checkout activeStep='2'/>} /> 

            <Route path="company" element={<FooterPagesTabs />} />

            {/* <Route path="contacts" element={<Contacts />} /> */}

            {/* <Route path="clients" element={<Clients />} /> */}

            <Route path="*" element={<NotFindedPage />} />

        </Routes>
    )
}

export default Pages